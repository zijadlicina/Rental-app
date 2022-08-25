const mongoose = require("mongoose");
const asyncHandler = require("../middleware/asyncHandler");
const ErorResponse = require("../utils/errorResponse");

const Bike = require("../models/Bike");
const Provider = require("../models/Provider");
const providerUrl = "http://localhost:" + process.env.PORT + "/api/providers";

const multer = require("multer");

const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "---" + file.orginalname);
  },
});

const upload = multer({ storage: fileStorageEngine });

exports.getAllBikes = asyncHandler(async (req, res, next) => {
  const bikes = await Bike.find();
  res.status(200).json({
    message: "GET all bikes",
    count: bikes.length,
    bikes: bikes.map((bike) => {
      return bikeDetails(bike);
    }),
  });
});

exports.createOneBike = asyncHandler(async (req, res, next) => {
  console.log(req.file);
  const providerId = req.body.provider;
  // Is succeeds this provider
  const provider = await Provider.findById(providerId);
  if (!provider) {
    next(
      new ErorResponse(`Provider with id {${providerId}} was not found`, 404)
    );
  }
  const newBike = new Bike({
    _id: mongoose.Types.ObjectId(),
    provider: providerId,
    name: req.body.name,
    price: req.body.price,
    rating: req.body.rating,
    description: req.body.description,
    model: req.body.model,
    status: req.body.status,
    category: req.body.category,
    type: req.body.type,
    seat: req.body.seat,
    color: req.body.color,
  });
  const result = await newBike.save();
  res.status(201).json({
    message: "Successfully created new bike!",
    bike: bikeDetails(result),
  });
});

exports.getOneBike = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const result = await Bike.findById(id);
  if (!result) {
    next(new ErorResponse(`Bike with id {${id}} was not found`, 404));
  }
  res.status(200).json({
    message: "GET one bike",
    bike: bikeDetails(result),
  });
});

exports.updateOneBike = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const bike = await Bike.findById(id);
  if (!bike) {
    next(new ErorResponse(`Bike with id {${id}} was not found`, 404));
  }
  result = await Bike.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(201).json({
    message: "Successfully updated a bike",
    bike: bikeDetails(result),
  });
});

exports.removeOneBike = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const bike = await Bike.findById(id);
  if (!bike) {
    next(new ErorResponse(`Bike with id {${id}} was not found`, 404));
  }
  await bike.remove();
  res.status(200).json({
    succes: true,
    message: "Succesfully removed one item",
  });
});

function bikeDetails(bike) {
  return {
    _id: bike._id,
    name: bike.name,
    provider: {
      _id: bike.provider,
      request: {
        type: "GET",
        url: providerUrl + "/" + bike.provider,
      },
    },
    model: bike.model,
    price: bike.price,
    rating: bike.rating,
    status: bike.status,
    category: bike.category,
    type: bike.type,
    seat: bike.seat,
    color: bike.color,
    description: bike.description,
    image: bike.image
  };
}
