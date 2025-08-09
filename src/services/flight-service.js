const { AirplaneRepository ,FlightRepository} = require('../repository');
const { compareTime } = require('../utils/helper');

class FlightService {
    constructor() {
        this.airplaneRepository = new AirplaneRepository();
        this.flightRepository = new FlightRepository();
    }

    async createFlight(data){
       try{
        if(!compareTime(data.departureTime, data.arrivalTime)) {
            throw {error: "Arrival time cannot be before as departure time"};
        }

        const airplane = await this.airplaneRepository.getAirplaneById(data.airplaneId);
         if(!airplane) {
            throw {error: "Airplane not found"}; 
        }
      
        const flight = await this.flightRepository.createFlight({
            ...data,totalSeats: airplane.capacity
        });
        return flight;
       }
       catch(error){
        console.log("Something went wrong at service layer");
        throw {error};
       }
    }


      async deleteFlight(flightId) {{
        try{
            const response = await this.flightRepository.deleteFlight(flightId);
            if(response) {
                return { message: "Flight deleted successfully" };
            }
        }catch(error){
                console.log("Something went wrong at service layer");
                throw {error};
        }
      }
}
    async getFlights(data){
        try{
            const flights = await this.flightRepository.getAllFlights(data);
            return flights;
        }
        catch(error){
            console.log("Something went wrong at service layer");
            throw {error};
        }   
    }

}

module.exports = FlightService;