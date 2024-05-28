class Service {

    constructor(dataAccess) {
        return this.dataAccess = dataAccess;
    }

    async create(data) {
        try {
            return this.dataAccess.create(data);
        }
        catch (err) {
            console.log(err);
        }
    }

    async getAll() {

        try {
           return this.dataAccess.getAll();
        }
        catch (err) {
            console.log(err);
        }
    }

    async getById(id) {
        try {
            return this.dataAccess.getById(id);
        }
        catch (err) {
            return console.log(err);
        }
    }

  
    async update(data) {
        try {
            return this.dataAccess.update(data);
        }
        catch (err) {
            console.log(err);
        }
    }

    async delete(id) {
        try {
            return this.dataAccess.delete(id);
        }
        catch (err) {
            console.log(err);
        }
    }
}

export default Service;