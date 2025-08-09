
class CrudService{
    constructor(repository){
        this.repository = repository;
    }

    async create(data){
        try{
            const record = await this.repository.create(data);
            return record;
        }
        catch(error){
            console.error("Error creating record in crud service:", error);
            throw error;
        }
    }

    async get(id){
          try{   
            const record = await this.repository.get(id);
            return record;
        }
        catch(error){
            console.error("Error creating record in crud service:", error);
            throw error;
        }
    }

    async update(id, data){
         try{
             const record = await this.repository.update(id, data);
             return record;
        }
        catch(error){
            console.error("Error creating record in crud service:", error);
            throw error;
        }
    }

    async destroy(id){
         try{
            const response = await this.repository.destroy(id);
            return response;
        }
        catch(error){
            console.error("Error creating record in crud service:", error);
            throw error;
        }
    }

    async getAll(){
         try{
            const records = await this.repository.getAll();
            return records;

        }
        catch(error){
            console.error("Error creating record in crud service:", error);
            throw error;
        }
    }

}



module.exports = CrudService;