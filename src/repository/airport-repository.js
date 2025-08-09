const CrudRepository = require('./crud-repository');
const { Airport } = require('../models/index'); // Assuming Airport is a Sequelize model
class AirportRepository extends CrudRepository{
    constructor(){
        super(Airport);
    }
}

module.exports = AirportRepository;