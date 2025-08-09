const CrudService = require('./crud-service');
const { AirportRepository } = require('../repository/index');
class AirportService extends CrudService {
    constructor() {
        const airportRepository = new AirportRepository();
        super(airportRepository);
    }
    // Additional methods specific to AirportService can be added here if needed
}
module.exports = AirportService;