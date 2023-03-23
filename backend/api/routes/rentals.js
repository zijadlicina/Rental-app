const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const moment = require("moment");

const Bike = require("../../models/Bike");
const Rental = require("../../models/Rental");
const RentalArchive = require("../../models/RentalArchive");
const Provider = require("../../models/Provider");
const Message = require("../../models/Message");
const User = require("../../models/User");

const userUrl = "http://localhost:5000/api/users";
const bikeUrl = "http://localhost:5000/api/bikes";

// @route GET api/rentals
// @desc Get all rentals
// @acces Public
router.get("/", async (req, res, next) => {
  let rentals = [];
  let status = req.query.status
  if (req.query.user) {
    let user = await User.findById(req.query.user)
    // is agency
    /// ---????? populate: Promise.all(niz_promise-a)
    if (user.roles[0] === "1994"){
      if (status === "rejected"){
        let rents = await RentalArchive.find().sort({updatedAt: -1}).populate("bike")
        await Promise.all(rents.map(async(rent) => {
          var pro = await Provider.findById(rent.bike.provider)
          if (pro.user.toString() === req.query.user) rentals.push(rent)
        }))
      }
      else {
      let rents = await Rental.find().sort({updatedAt: -1}).populate("bike")
        await Promise.all(rents.map(async(rent) => {
          var pro = await Provider.findById(rent.bike.provider)
          if (pro.user.toString() === req.query.user) { 
            if (status === "all" 
            || status === "completed" && rent.completed 
            || status === "inactive" && !rent.status 
            || status === "active" && rent.status && !rent.completed) {
              rentals.push(rent)
            }
          }
        }))
      }   
    }
    else {
      if (status === "rejected"){
        let rents = await RentalArchive.find().sort({updatedAt: -1}).populate("bike")
        await Promise.all(rents.map(async(rent) => {
          var pro = await Provider.findById(rent.bike.provider)
          if (rent.user.toString() === req.query.user) rentals.push(rent)
        }))
      }
      else {
        let query = Rental.find().sort({updatedAt: -1});
        query = query.find({ user: req.query.user });
        if (status === "all"){}
        else if (status === "active") {
          query = query.find({ status: true, completed: false})
        } else if (status === "inactive") {
          query = query.find({ status: false, completed: false})
        } else if (status === "completed") {
          query = query.find({ status: true, completed: true})
        }
        rentals = await query;
      }
    }
  }
  else {
    rentals = await Rental.find().sort({updatedAt: -1});
  }
 res.status(200).json({
    count: rentals.length,
    rentals: rentals.map((rental) => {
      return {
        _id: rental._id,
        user: {
          _id: rental.user,
          request: {
            type: "GET",
            url: userUrl + "/" + rental.user,
          },
        },
        bike: {
          _id: rental.bike,
          request: {
            type: "GET",
            url: bikeUrl + "/" + rental.bike,
          },
        },
        dateOut: rental.dateOut,
        dateReturned: rental.dateReturned,
        reqSent: rental.reqSent,
        price: rental.price,
        quantity: rental.quantity,
        status: rental.status,
        reqApproved: rental.reqApproved,
        completed: rental.completed,
        reqCompleted: rental.reqCompleted,
        feedback: rental.feedback,
        rejected: rental.rejected,
        reqRejected: rental.reqRejected,
        reasonMessage: rental.reasonMessage,
        feedbackSent: rental.feedbackSent
      };
    }),
  });
  /*  .catch((err) => {
      res.status(500).json({
        message: "Could not get rentals!",
        error: err,
      });
    });
    */
});

const utilFunc = async (rents, id) => {
  let rentals = [];
  return rentals;
};

// @route GET api/rentals/:id
// @desc Get one rentals
// @acces Public
router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  Rental.findById(id)
    .then((rental) => {
      res.status(200).json({
        rental: {
          _id: rental._id,
          user: {
            _id: rental.user,
            request: {
              type: "GET",
              url: userUrl + "/" + rental.user,
            },
          },
          bike: {
            _id: rental.bike,
            request: {
              type: "GET",
              url: bikeUrl + "/" + rental.bike,
            },
          },
          dateOut: rental.dateOut,
          dateReturned: rental.dateReturned,
          reqSent: rental.reqSent,
          price: rental.price,
          quantity: rental.quantity,
          reqApproved: rental.reqApproved,
          completed: rental.completed,
          reqCompleted: rental.reqCompleted,
          feedback: rental.feedback
        },
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: `Could not get rental with id: ${id}!`,
        error: err,
      });
    });
});

// @route POST api/rentals
// @desc Create one rental
// @acces Public
router.post("/", (req, res, next) => {
  const userId = req.body.userId;
  const bikeId = req.body.bikeId;
  const quantity = req.body.quantity;
  // Is succeeds this user
  User.findById(userId)
    .then((user) => {
      if (!user) {
        return res.status(404).json("User Not Found!");
      }
      // Is succeeds this bike
      Bike.findById(bikeId).then(async(bike) => {
        if (!bike) {
          return res.status(404).json("Bike Not Found!");
        }
        bike.save();
     /*
        let a = moment(dateReturned)
        let b = moment(dateOut)
        let days = a.diff(b, "days")
        */
        let priceOfRental = bike["price"] * quantity;
        const newRental = new Rental({
          _id: mongoose.Types.ObjectId(),
          user: userId,
          bike: bikeId,
          dateOut: req.body.dateOut,
          dateReturned: req.body.dateReturned,
          quantity: req.body.quantity,
          reqSent: req.body.reqSent,
          price: priceOfRental,
        });
        const provider = await Provider.findById(bike.provider)
        const agency = await User.findById(provider.user)
        const newMessage = new Message({
          _id: mongoose.Types.ObjectId(),
          type: "RENTAL_REQ",
          user: userId,
          userTo: agency._id,
          rental: newRental._id,
          text: "You succesfully send request to rent the item: " + bike.name + " with a quantity of " + quantity,
          textToUser: "You have received a request to rent a item: " + bike.name + " with a quantity of " + quantity,
        })
        newMessage.save()

        newRental.save().then((rental) => {
          res.status(201).json({
            message: "Rental created!",
            rental: {
              _id: rental._id,
              user: {
                _id: rental.user,
                request: {
                  type: "GET",
                  url: userUrl + "/" + rental.user,
                },
              },
              bike: {
                _id: rental.bike,
                request: {
                  type: "GET",
                  url: bikeUrl + "/" + rental.bike,
                },
              },
              reqSent: rental.reqSent,
              dateOut: rental.dateOut,
              dateReturned: rental.dateReturned,
              reqApproved: rental.reqApproved,
              completed: rental.completed,
              reqCompleted: rental.reqCompleted,
              feedback: rental.feedback
            },
          });
        });
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Could not create rental!",
        error: err,
      });
    });
});

router.put("/:id", async(req, res, next) => {
    const id = req.params.id;
    const status = req.body.status;
    const completed = req.body.completed;
    const rental = await Rental.findById(id)
      if (completed) {
        rental.completed = true;
        rental.reqCompleted = req.body.reqCompleted;
        rental.save();
        let bike = await Bike.findById(rental.bike)
        bike.available += rental.quantity;
        bike.save()

        const provider = await Provider.findById(bike.provider)
        const agency = await User.findById(provider.user)
        const newMessage = new Message({
          _id: mongoose.Types.ObjectId(),
          type: "RENTAL_COMPLETE",
          user: agency._id,
          userTo: rental.user,
          rental: rental._id,
          textToUser: "Agency was complete the process of rent a item: " + bike.name + "!",
          text: "You succesfully complete the process of rent a item: " + bike.name + "!",
        })
        newMessage.save()

        res.status(200).json({
          succes: true,
          msg: "Rental was changed"
        });
      } else if (status) {
        rental.status = true;
        rental.reqApproved = req.body.reqApproved;
        let bike = await Bike.findById(rental.bike);
        let user = await User.findById(bike.user);
        bike.available = bike.available - rental.quantity;
        bike.used++;

        const provider = await Provider.findById(bike.provider)
        const agency = await User.findById(provider.user)
        const newMessage = new Message({
          _id: mongoose.Types.ObjectId(),
          type: "RENTAL_APPROVE",
          user: agency._id,
          userTo: rental.user,
          rental: rental._id,
          textToUser: "Agency was approved the request of rent a item: " + bike.name + "!",
          text: "You succesfully approved the request of rent a item: " + bike.name + "!",
        })
        newMessage.save();
        bike.save();
        rental.save()
        res.status(200).json({
          succes: true,
          msg: "Rental was changed"
        });
      } else if (!status){
        let rentalArchive = new RentalArchive({
          _id: mongoose.Types.ObjectId(),
          user: rental.user,
          bike: rental.bike,
          reqSent: rental.reqSent,
          reqRejected: req.body.reqRejected,
          dateOut: rental.dateOut,
          dateReturned: rental.dateReturned,
          rejected: true,
          quantity: rental.quantity,
          price: rental.price,
          pickLocation: rental.pickLocation,
          reasonMessage: req.body.reasonMessage
        })
        await rentalArchive.save()
        
        const bike = await Bike.findById(rental.bike);
        const provider = await Provider.findById(bike.provider)
        const agency = await User.findById(provider.user)
        const newMessage = new Message({
          _id: mongoose.Types.ObjectId(),
          type: "RENTAL_REJECT",
          user: agency._id,
          userTo: rental.user,
          rental: rentalArchive._id,
          textToUser: "Agency was rejected the request of rent a item: " + bike.name + "!",
          text: "You rejected the request of rent a item: " + bike.name + "!",
        })
        newMessage.save();

        rental.remove()
        res.status(200).json({
          succes: true,
          msg: "Rental was removed and archive rental was created!"
        });
      }
})


// @route DELETE api/rentals/:id
// @desc Delete one rental
// @acces Public
router.delete("/:id", (req, res, next) => {
  const id = req.params.id;
  Rental.findById(id)
    .then((rental) => {
      rental
        .remove()
        .then(() => {
          res.status(200).json({
            succes: true,
          });
        })
        .catch((err) => {
          res.status(500).json({
            succes: false,
            error: err,
          });
        });
    })
    .catch((err) => {
      res.status(500).json({
        message: `Could not get rental with id: ${id}!`,
        error: err,
      });
    });
});

module.exports = router;
