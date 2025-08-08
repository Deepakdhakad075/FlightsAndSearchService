const {City} = require('../models');

class CityRepository {
    async createCity({name}) {
        try{
          const city =   await City.create({name});
            return city;
        }
        catch (error) {
            console.error("Error creating city:", error);
            throw error;
        }}
   


        async deleteCity(cityId) {
        try{
          const city =   await City.destroy({
            where: {
                id: cityId      
            }
        });
        }
        catch (error) {
            console.error("Error creating city:", error);
            throw error;
        }}
}

module.exports = CityRepository;