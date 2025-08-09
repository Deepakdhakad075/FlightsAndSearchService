const { get } = require('express/lib/response');
const {CityService}   = require('../services/index');

 const cityService = new CityService(); 

 const  cityController =  {
     async createCity  (req, res) {
    try{
           const city  = await cityService.createCity(req.body);
           return res.status(201).json({
              data:city,
              message: "Successfully created a city",
              success:true
           })
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


 async deleteCity   (req, res)  { 
    try{
        const cityId = req.params.cityId;
        const response = await cityService.deleteCity(cityId);
        if(response){
            return res.status(200).json({
                message: "Successfully deleted the city",
                success: true
            });
        } else {
            return res.status(404).json({
                message: "City not found",
                success: false
            });
        }

    }catch(error){
            console.log("Something went wrong in the controller layer");
            return res.status(500).json({
                error: error,
                message: "Something went wrong in the controller layer",
                success: false
            });
    }
 },

 async updateCity(req, res) {
    try{ 
        const cityId = req.params.cityId;
        const data = req.body; // {name: "New City Name"}
        const updatedCity = await cityService.updateCity(cityId, data);
        return res.status(200).json({
            data: updatedCity,
            message: "Successfully updated the city",
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
 async getCityByID (req,res){
    try{
          const cityId = req.params.cityId;
          const city = await cityService.getCity(cityId);
          res.status(200).json({
              data: city,
              message: "Successfully fetched the city",
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
 }
,
 async getAllCities(req, res) {
    try {
        const filter = req.query; // {name: "City Name"}
        const cities = await cityService.getAllCities(filter);
        return res.status(200).json({
            data: cities,
            message: "Successfully fetched all cities",
            success: true
        });
    } catch (error) {
        console.log("Something went wrong in the controller layer");
        return res.status(500).json({
            error: error,
            message: "Something went wrong in the controller layer",
            success: false
        });
    }
 }  
}

module.exports = cityController;