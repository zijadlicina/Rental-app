const mongoose = require("mongoose");
const asyncHandler = require("../middleware/asyncHandler");
const ErorResponse = require("../utils/errorResponse");

const Bike = require("../models/Bike");
const Provider = require("../models/Provider");
const Category = require("../models/Category");
const ErrorResponse = require("../utils/errorResponse");

const providerUrl = "http://localhost:" + process.env.PORT + "/api/providers";

exports.getAllBikes = (async (req, res, next) => {
  let query =  Bike.find();

  // Category
  let category = req.query.category;
  if (category && category === "all") {
  } else if (category) {
    let cat = await Category.find({ name: category }, "_id");
    query = query.find({ category: cat[0]._id });
  }
  // Provider
  let provider = req.query.provider;
  if (provider && provider === "all") {
  } else if (provider) {
    let pro = await Provider.findById(provider);
    query = query.find({ provider: pro._id.toString() });
  }
  // Search
  let searchField = req.query.search;
  if (searchField) {
    query = query.find({ $text: { $search: searchField } });
  }

  // SOrting
  let sortField = req.query.sort;

  // Filter
  let reqQuery;
  reqQuery = { ...req.query };

  let statusField = req.query.status

  let removeField = ["page", "limit", "sort", "category", "provider", "status"]; // clean up filter fields
  removeField.map((val) => delete reqQuery[val]);
  let queryStr = JSON.stringify(reqQuery);
  queryStr = queryStr.replace(
    /\b(gt|gte|lt|lte|in)\b/g,
    (match) => `$${match}`
  );
  query = query.find(JSON.parse(queryStr));

  if (statusField) {
    if (statusField === "yes") {
      query = query.find({ "available": { $ne: 0 } })
    } 
    else if (statusField === "no") {
      query = query.find({ "available": 0})    
    } 
    else {}
  }
  // Pagination
  const page = parseInt(req.query.page) || 1;
  
  let limit = parseInt(req.query.limit) || 8;
  const total = await Bike.countDocuments(query); // await Bike.countDocuments();
  const pages = Math.ceil(total / limit);

  if (total < limit) limit = total;
  const skip = (page - 1) * limit;
  query = query.skip(skip).limit(limit);

  if (sortField) {
    if (sortField === "newest") {
      query = query.sort({createdAt: -1});
    } 
    else if (sortField === "used") query = query.sort({used: -1});
    else query = query.sort('-rating');
  }

  const bikes = await query;
  res.status(200).json({
    message: "GET all bikes",
    count: bikes.length,
    page,
    pages,
    bikes: bikes.map((bike) => {
      return bikeDetails(bike);
    }),
  });
});

exports.createOneBike = (async (req, res, next) => {
  const providerId = req.body.provider;
  // Is succeeds this provider
  const provider = await Provider.findById(providerId);
  if (!provider) {
    next(
      new ErorResponse(`Provider with id {${providerId}} was not found`, 404)
    );
  }
  try {
    let category = req.body.category;
    let categoryId = await Category.find({ name: category }, "_id");
    const newBike = new Bike({
      _id: mongoose.Types.ObjectId(),
      provider: providerId,
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      model: req.body.model,
      status: req.body.status,
      category: categoryId[0]._id,
      types: req.body.types,
      seat: req.body.seat,
      color: req.body.color,
      images: req.body.images,
      quantity: req.body.quantity,
      available: req.body.available || req.body.quantity,
    });
    const result = await newBike.save();
    res.status(201).json({
      message: "Successfully created new bike!",
      bike: bikeDetails(result),
    });
  } catch (error) {
    return next(new ErrorResponse(error, 400)); // 
  }
});

exports.getOneBike = (async (req, res, next) => {
  const id = req.params.id;
  const result = await Bike.findById(id);
  if (!result) {
    next(new ErorResponse(`Bike with id {${id}} was not found`, 404));
  }

    res.status(201).json({
        message: "Successfully get a bike",
        bike: bikeDetails(result),
      });
});

exports.updateOneBike = (async (req, res, next) => {
  const id = req.params.id;
  const bike = await Bike.findById(id);
  if (!bike) {
    next(new ErorResponse(`Bike with id {${id}} was not found`, 404));
  }
  result = await Bike.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });
  let category = await Category.find({ _id: bike.category }, "name");
  let categoryName = category.name
  res.status(201).json({
    message: "Successfully updated a bike",
    bike: bikeDetails(result, categoryName),
  });
});

exports.removeOneBike = (async (req, res, next) => {
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
    types: bike.types,
    seat: bike.seat,
    color: bike.color,
    weight: bike.weight,
    description: bike.description,
    images: bike.images,
    createdAt: bike.createdAt || null,
    quantity: bike.quantity,
    available: bike.available,
    used: bike.used,
    feedbacks: bike.feedbacks
  };
}
