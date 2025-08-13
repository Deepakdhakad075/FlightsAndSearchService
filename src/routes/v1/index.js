const express = require("express");

const router = express.Router();
const cityController = require('../../controllers/city-controller');
const flightController = require('../../controllers/flight-controller');
const airportController = require("../../controllers/airport-controller");
const { FlightMiddleware } = require("../../middlewares/index");

//City routes
  router.post('/cities', cityController.createCity);
  router.delete('/cities/:cityId', cityController.deleteCity);
  router.patch('/cities/:cityId', cityController.updateCity);
  router.get('/cities/:cityId', cityController.getCityByID);
  router.get('/cities', cityController.getAllCities);

  //Flight routes
  router.post('/flights',FlightMiddleware.validateCreateFlight , flightController.createFlight);
  router.get('/flights', flightController.getFlights);
  router.get('/flight/:id', flightController.get);
  router.patch('/flight/:id',flightController.updateFlight);

  //Airport routes
  router.post('/airports', airportController.create);
  router.get('/airports', airportController.getAll);
  router.get('/airports/:id', airportController.get);
  router.delete('/airports/:id', airportController.destroy);
  router.patch('/airports/:id', airportController.update);

  module.exports = router;