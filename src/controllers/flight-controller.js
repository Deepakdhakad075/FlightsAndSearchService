const { FlightService } = require("../services/index");

const flightService = new FlightService();

const flightController = {
  async createFlight(req, res) {
    try {
      const {
        flightNumber,
        airplaneId,
        departureAirportId,
        arrivalAirportId,
        departureTime,
        arrivalTime,
        price,
        boardingGate,
      } = req.body;

      const flightReqData = {
        flightNumber,
        airplaneId,
        departureAirportId,
        arrivalAirportId,
        departureTime,
        arrivalTime,
        price,
        boardingGate,
      };

      const flight = await flightService.createFlight(flightReqData);
      return res.status(201).json({
        data: flight,
        message: "Successfully created a flight",
        success: true,
      });
    } catch (error) {
      console.log("Something went wrong in the controller layer");
      return res.status(500).json({
        error: error,
        message: "Something went wrong in the controller layer",
        success: false,
      });
    }
  },
  //    async getFlight(req,res){
  //        try{
  //         const flightId = req.params.flightId;
  //         const flight = await flightService.getFlight(flightId);
  //         if(flight) {
  //             return res.status(200).json({
  //                 data: flight,
  //                 message: "Successfully fetched the flight",
  //                 success: true
  //             });
  //         } else {
  //             return res.status(404).json({
  //                 message: "Flight not found",
  //                 success: false
  //             });
  //         }

  //        }
  //        catch(error){
  //            console.log("Something went wrong in the controller layer");
  //            return res.status(500).json({
  //                error: error,
  //                message: "Something went wrong in the controller layer",
  //                success: false
  //            });
  //        }
  //    }

  async getFlights(req, res) {
    try {
      const data = req.query;
      const flights = await flightService.getFlights(data);
      if (flights && flights.length > 0) {
        return res.status(200).json({
          data: flights,
          message: "Successfully fetched flights",
          success: true,
        });
      } else {
        return res.status(404).json({
          message: "No flights found",
          success: false,
        });
      }
    } catch (error) {
      console.log("Something went wrong in the controller layer");
      return res.status(500).json({
        error: error,
        message: "Something went wrong in the controller layer",
        success: false,
      });
    }
  },
  async get(req, res) {
    try {
      const id = req.params.id;
      const flights = await flightService.get(id);
      console.log(flights, "response of flight");

      res.status(200).json({
        data: flights,
        message: "Successfully fetched flight",
        success: true,
      });
    } catch (error) {
      console.log("Something went wrong in the controller layer");
      return res.status(500).json({
        error: error,
        message: "Something went wrong in the controller layer",
        success: false,
      });
    }
  },
  async updateFlight(req, res) {
    try {
      const flightId = req.params.id;
      const response = await flightService.update(flightId, req.body);
      res.status(200).json({
        message: "flight Updated Successfully",
        data: response,
        status: true,
      });
    } catch (error) {
      console.log("error in update flight controller ", error);
      res.status(500).json({
        message: "server Error",
        status: false,
      });
    }
  },
};

module.exports = flightController;
