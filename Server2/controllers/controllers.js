class Controllers {
    constructor(service) {
        this.service = service;
        console.log(service);
        
    }

    async create(req, res, next) {
        try {
            const newData = req.body;
            const result = await this.service.create(newData);
            res.status(201).send(result);
        } catch (err) {
            console.error(err);
            if (err.name === 'ValidationError') {
                res.status(400).send('Validation error: ' + err.message);
            } else if (err.name === 'MongoError' && err.code === 11000) {
                res.status(409).send('Duplicate key error: ' + err.message);
            } else {
                res.status(500).send('Internal Server Error');
            }
        }
    }

    async getAll(req, res, next) {
        try {
            console.log("CONTROLLERS_getAll");
            const result = await this.service.getAll();
            res.status(200).send(result);
        } catch (err) {
            console.log("error in controlers getAll")
            console.error(err);
            res.status(500).send('Internal Server Error');
        }
    }

    async getById(req, res, next) {
        try {
            console.log("CONTROLLERS_getById")
            const id = req.params.id;
            const result = await this.service.getById(id);
            if (!result) {
                res.status(404).send('Not found');
            } else {
                res.status(200).send(result);
            }
        } catch (err) {
            console.error(err);
            if (err.kind === 'ObjectId') {
                res.status(400).send('Invalid ID');
            } else {
                console.log("error in controlers getById")
                res.status(500).send('Internal Server Error');
            }
        }
    }

    async update(req, res, next) {
        try {
            const patientId = parseInt(req.params.patientId); 
            const inquiryId = req.params.id;
            const updatedData = {
                answerText:req.body,
                patientId: patientId,
                inquiryId: inquiryId
              };
          
              const result = await this.service.update(updatedData);
            res.status(200).send(`${id} updated successfully`);
        } catch (err) {
            console.error(err);
            if (err.name === "Update failed") {
                res.status(404).send('Not found: ' + err.message);
            } else if (err.name === 'ValidationError') {
                res.status(400).send('Validation error: ' + err.message);
            } else {
                res.status(500).send('Internal Server Error');
            }
        }
    }

    async delete(req, res, next) {
        try {
            const id = req.params.id;
            const result = await this.service.delete(id);
            res.status(200).send(`${id} deleted successfully`);
        } catch (err) {
            console.error(err);
            if (err.name === "Delete failed") {
                res.status(404).send('Not found: ' + err.message);
            } else {
                res.status(500).send('Internal Server Error');
            }
        }
    }
}

module.exports = Controllers;
