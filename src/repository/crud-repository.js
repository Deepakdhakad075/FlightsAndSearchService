const { where } = require("sequelize");

class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data){
    try{
        const record = await this.model.create(data);
        return record;
    }
    catch(error) {
      console.error("Error creating record in crud repository:", error);
      throw error;
    }
  }

  async destroy(id){
    try{
        if (!id) {
            throw new Error("ID is required to delete a record");
        }
        const result = await this.model.destroy({
            where: { id }
        });
        return result > 0; // Returns true if a record was deleted
    }
    catch(error){
         console.error("Error deleting record in crud repository:", error);
         throw error;  
    }
  }


  async get(id) {
    try {
      if (!id) {
        throw new Error("ID is required to fetch a record");
      }
      const record = await this.model.findByPk(id);
      return record;
    } catch (error) {
      console.error("Error fetching record by primary key in crud repository:", error);
      throw error;
    }
  }
   
  async getAll(filter = {}) {
    try {
      const records = await this.model.findAll({
        where: filter
      });
      return records;
    } catch (error) {
      console.error("Error fetching all records in crud repository:", error);
      throw error;
    }
  }

  async update(id, data) {
    try {
      if (!id) {
        throw new Error("ID is required to update a record");
      }
     const response = await this.model.update(data,{
        where: { id }
      });   
        if (response[0] === 0) {
            return null; // No record was updated
        }
        const updatedRecord = await this.model.findByPk(id);
        return updatedRecord;
      // Returns the updated record or null if not found
    } catch (error) {
      console.error("Error updating record in crud repository:", error);
      throw error;
    }
  }

}
module.exports = CrudRepository;