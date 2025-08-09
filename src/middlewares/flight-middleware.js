const { ClientErrorCodes } = require("../utils/error-codes");

const validateCreateFlight  = (req,res,next)=>{
 if(
        !req.body.flightNumber ||
        !req.body.airplaneId ||
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId ||
        !req.body.arrivalTime || 
        !req.body.departureTime || 
        !req.body.price
    ){
    return res.status(ClientErrorCodes.NOT_FOUND).json({
        success: false,
        message: "Missing required flight details",
        error: "Mendatory Flight  details are incomplete"
    });
         
}

next();
}

module.exports = {validateCreateFlight};