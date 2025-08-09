const {Flights} = require('../models/index');
const {Op} = require('sequelize');
class FlightRepository {
  
    #createFilter(filter) {
        let flightFilter = {};
        if (filter.departureAirportId) {
            flightFilter.departureAirportId = filter.departureAirportId;
        }
        if (filter.arrivalAirportId) {
            flightFilter.arrivalAirportId = filter.arrivalAirportId;
        }
        // if (filter.departureTime) {
        //     flightFilter.departureTime = filter.departureTime;
        // }
        // if (filter.arrivalTime) {
        //     flightFilter.arrivalTime = filter.arrivalTime;
        // }
if (filter.minPrice || filter.maxPrice) {
  flightFilter.price = {};
  
  if (filter.minPrice) {
    flightFilter.price[Op.gte] = Number(filter.minPrice);
  }

  if (filter.maxPrice) {
    flightFilter.price[Op.lte] = Number(filter.maxPrice);
  }
}


        return flightFilter;
    }


    async createFlight(flightData) {
        try {
            const flight = await Flights.create(flightData);
            return flight;
        } catch (error) {
            console.error("Error creating flight:", error);
            throw error;
        }
    }

    async deleteFlight(flightId) {
        try {
            const result = await Flights.destroy({
                where: { id: flightId }
            });
            return result > 0; // Returns true if a flight was deleted
        } catch (error) {
            console.error("Error deleting flight:", error);
            throw error;
        }
    }

    async getFlight(flightId) {
        try {
            const flight = await Flights.findByPk(flightId);
            return flight;
        } catch (error) {
            console.error("Error fetching flight:", error);
            throw error;
        }
    }   

   async getAllFlights(filter) {
    try{  
          const filteredObj =  this.#createFilter(filter);
          console.log("Filtered Object:", filteredObj);
           const flights = await Flights.findAll({
            where:filteredObj
           })
           return flights;
    }
    catch(error){
        console.error("Error fetching all flights:", error);
        throw error;
    }
   }
}

module.exports = FlightRepository;