const {Airplane} = require('../models/index');

class AirplaneRepository {
    async createAirplane({modelNumber, capacity}) {
        try {
            const airplane = await Airplane.create({modelNumber, capacity});
            return airplane;
        } catch (error) {
            console.error("Error creating airplane:", error);
            throw error;
        }
    }

    async deleteAirplane(airplaneId) {
        try {
            const result = await Airplane.destroy({
                where: { id: airplaneId }
            });
            return result > 0; // Returns true if an airplane was deleted
        } catch (error) {
            console.error("Error deleting airplane:", error);
            throw error;
        }
    }
    async getAirplaneById(airplaneId) {
        try {
            const airplane = await Airplane.findByPk(airplaneId);
            return airplane;
        } catch (error) {
            console.error("Error fetching airplane:", error);
            throw error;
        }
    }
}
module.exports = AirplaneRepository;