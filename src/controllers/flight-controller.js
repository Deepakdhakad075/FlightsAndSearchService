const {FlightService} = require('../services/index');

const flightService = new FlightService();  

  const flightController = {
    async createFlight(req, res)  {
    try{
          const flight = await flightService.createFlight(req.body);
            return res.status(201).json({
                data: flight,   
                message: "Successfully created a flight",
                success: true
            });
    }
    catch(error){
        console.log("Something went wrong in the controller layer");
        return res.status(500).json({
            error: error,
            message: "Something went wrong in the controller layer",
            success: false
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

async getFlights (req, res) {
    try{
        const data = req.query; 
        const flights = await flightService.getFlights(data);
        if(flights && flights.length > 0) {
            return res.status(200).json({
                data: flights,
                message: "Successfully fetched flights",
                success: true
            });
        }
      else{
          return res.status(404).json({
            message: "No flights found",
            success: false
        });
      }
    }
    catch(error){
        console.log("Something went wrong in the controller layer");
        return res.status(500).json({
            error: error,
            message: "Something went wrong in the controller layer",
            success: false
        });
    }
}
  }

module.exports = 
    flightController    
