const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Bike = require("../../models/Bike");
const Rental = require("../../models/Rental");
const User = require("../../models/User");
const Feedback = require("../../models/Feedback");

const userUrl = "http://localhost:5001/api/users";
const bikeUrl = "http://localhost:5001/api/bikes";
const rentalUrl = "http://localhost:5001/api/rentals";

/*
// @route GET api/rentals
// @desc Get all rentals
// @acces Public
router.get("/", async (req, res, next) => {
  let query = Rental.find();
  if (req.query) {
    query = query.find({ user: req.query.user });
  }

  let rentals = await query;
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
        price: rental.price,
        quantity: rental.quantity,
        status: rental.status
      };
    }),
  });
  /*  .catch((err) => {
      res.status(500).json({
        message: "Could not get rentals!",
        error: err,
      });
    });
    
});
*/
// @route GET api/rentals/:id
// @desc Get one rentals
// @acces Public
router.get("/:id", async (req, res, next) => {
  const id = req.params.id;
  // feedbacks of specific with id bike
  let feedbacks1 = [];
  Feedback.find()
    .populate("rental")
    .exec((err, feedbacks) => {
      feedbacks.map((feed) => {
        console.log("Rental is " + feed.rental.bike, id);
        let bikeId = feed.rental.bike.toString();
        if (bikeId === id) feedbacks1.push(feed);
      });
      res.status(200).json({
        count: feedbacks1.length,
        feedbacks1: feedbacks1.map((feed) => {
          return {
            _id: feed._id,
            user: {
              _id: feed.user,
              request: {
                type: "GET",
                url: userUrl + "/" + feed.user,
              },
            },
            rental: {
              _id: feed.rental,
              request: {
                type: "GET",
                url: rentalUrl + "/" + feed.rental.id,
              },
            },
            bike: id,

            grade: feed.grade,
            message: feed.message,
          };
        }),
      });
    });
});

const utilFunc = async (feedbacks1, id) => {
  console.log("kraajjjjjj");
};

// @route POST api/rentals
// @desc Create one rental
// @acces Public
router.post("/", (req, res, next) => {
  const userId = req.body.userId;
  const rentalId = req.body.rentalId;
  console.log(rentalId)
  const grade = req.body.grade;
  const message = req.body.message;
  // Is succeeds this user
  User.findById(userId)
    .then((user) => {
      if (!user) {
        return res.status(404).json("User Not Found!");
      }
      // Is succeeds this rental
      Rental.findById(rentalId).then((rental) => {
        if (!rental) {
          return res.status(404).json("Rental Not Found!");
        }
        /* ipdate bike or user
        bike["available"] = bike["available"] - quantity;
        bike.save();
         
        let priceOfRental = bike["price"] * quantity;
         */
        const newFeedback = new Feedback({
          _id: mongoose.Types.ObjectId(),
          user: userId,
          rental: rentalId,
          grade,
          message,
        });
        newFeedback.save().then((feed) => {
          res.status(201).json({
            message: "Feedback created!",
            feedback: {
              _id: feed._id,
              user: {
                _id: feed.user,
                request: {
                  type: "GET",
                  url: userUrl + "/" + feed.user,
                },
              },
              rental: {
                _id: feed.rental,
                request: {
                  type: "GET",
                  url: rentalUrl + "/" + feed.rental,
                },
              },
              message: feed.message,
              grade: feed.grade,
            },
          });
        });
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Could not create feedback!",
        error: err,
      });
    });
});

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
