const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Bike = require("../../models/Bike");
const Rental = require("../../models/Rental");
const User = require("../../models/User");
const Feedback = require("../../models/Feedback");
const Message = require("../../models/Message");

const userUrl = "http://localhost:5001/api/users";
const bikeUrl = "http://localhost:5001/api/bikes";
const rentalUrl = "http://localhost:5001/api/rentals";

// @route GET api/messages/:id
// @desc Get one rentals
// @acces Public
router.get("/:id", async (req, res, next) => {
  const id = req.params.id;
  // feedbacks of specific with id bike
  let messages = [];
  
  let user = await User.findById(req.params.id)

  // is agency
  let unSeen = 0, unSeenToUser = 0;
  Message.find().sort({createdAt: -1})
    .exec((err, msgs) => {
      msgs.map((msg) => {
        if (msg.user.toString() === id) {
          messages.push(msg);
          if (msg.seen === false) unSeen++;
          if (msg.seenUserTo === false) unSeenToUser++;
        }
        else if (msg.userTo.toString() === id) {
          messages.push(msg);
          if (msg.seen === false) unSeen++;
          if (msg.seenUserTo === false) unSeenToUser++;
        }
      });
      console.log("unSeen", unSeen)
      console.log("unSeenToUser", unSeenToUser)    
      //console.log(messages)
      res.status(200).json({
        count: messages.length,
        unSeen: unSeen + unSeenToUser,
        messages: messages.map((msg) => {
          return {
            _id: msg._id,
            user: msg.user,
            userTo: msg.userTo,
            type: msg.type,
            rental: msg.rental,
            text: msg.text,
            textToUser: msg.textToUser,
            seen: msg.seen,
            seenUserTo: msg.seenUserTo,
            createdAt: msg.createdAt
          };
        }),
      });
    });
});


// @route POST api/rentals
// @desc Create one rental
// @acces Public
router.post("/", (req, res, next) => {
  const userId = req.body.userId;
  const rentalId = req.body.rentalId;
  const grade = req.body.grade;
  const message = req.body.message;
  // Is succeeds this user
  User.findById(userId)
    .then((user) => {
      if (!user) {
        return res.status(404).json("User Not Found!");
      }
      // Is succeeds this rental
      Rental.findById(rentalId).then(async (rental) => {
        if (!rental) {
          return res.status(404).json("Rental Not Found!");
        }
        let bike = await Bike.findById(rental.bike)
        bike.rating += grade;
        bike.rating /= bike.used;
        bike.save();
        rental.feedback = true;
        rental.save();

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


// @route PUT api/rentals/:id
// @desc Update one message
// @acces Public
router.put("/:id", (req, res, next) => {
  const id = req.params.id;
  const status = req.body.status;
  Message.findById(id)
    .then((msg) => {
      if (status && status === "seenUserTo") msg.seenUserTo = true
      else msg.seen = true
      msg.save()
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
        message: `Could not get message with id: ${id}!`,
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
