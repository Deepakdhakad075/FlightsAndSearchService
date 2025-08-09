const  {AirportService} = require('../services/index');
const airportService = new AirportService();

class AirportController {
 
    async create(req, res) {
        try{
           const data = req.body;
           const airport = await airportService.create(data);
           return res.status(201).json({
                success: true,
                message: "Airport created successfully",
                data: airport
              });
        }
        catch(error){
            console.error("Error creating airport:", error);
            return res.status(500).json({
                success: false,
                message: "Failed to create airport",
                error: error.message
            });
        }
    }
    
    async get(req, res) {
        try {
            const airportId = req.params.id;
            const airport = await airportService.get(airportId);
            if (!airport) {
                return res.status(404).json({
                    success: false,
                    message: "Airport not found"
                });
            }
            return res.status(200).json({
                success: true,
                data: airport
            });
        } catch (error) {
            console.error("Error fetching airport:", error);
            return res.status(500).json({
                success: false,
                message: "Failed to fetch airport",
                error: error.message
            });
        }
    }
    
    async getAll(req, res) {
       try{
         const airports = await airportService.getAll();
         return res.status(200).json({
             success: true,
             data: airports 
            });     
       }catch(error){
            console.error("Error fetching all airports:", error);
            return res.status(500).json({
                success: false,
                message: "Failed to fetch airports",
                error: error.message
            });
       }
    
    }

     async update(req, res) {
        try {
            const airportId = req.params.id;
            const data = req.body;
            const updatedAirport = await airportService.update(airportId, data);
            if (!updatedAirport) {
                return res.status(404).json({
                    success: false,
                    message: "Airport not found"
                });
            }
            return res.status(200).json({
                success: true,
                message: "Airport updated successfully",
                data: updatedAirport
            });
        } catch (error) {
            console.error("Error updating airport:", error);
            return res.status(500).json({
                success: false,
                message: "Failed to update airport",
                error: error.message
            });
        }   }

        async destroy (req,res){
                try{
                   const airportId = req.params.id;
                   const isDeleted = await airportService.destroy(airportId);
                     if (!isDeleted) {
                          return res.status(404).json({
                            success: false,
                            message: "Airport not found"
                          });
                     }
                    return res.status(200).json({
                        success: true,
                        message: "Airport deleted successfully"
                    });
                }
                catch(error){
                    console.error("Error deleting airport:", error);
                    return res.status(500).json({
                        success: false,
                        message: "Failed to delete airport",
                        error: error.message
                    });
                }
        }

}
module.exports = new AirportController();