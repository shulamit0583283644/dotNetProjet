
const express = require('express');
const userControllers = require('../controllers/usersControllers');
const router = express.Router();

router.use(express.json());

router.get('/', (req, res, next) => {
    userControllers.getAll(req, res, next);
});

router.get('/:userId', (req, res, next) => {
    userControllers.getByUserId(req, res, next);
});

router.post('/', (req, res, next) => {
    userControllers.create(req, res, next);
});

router.put('/:id', (req, res, next) => {
    userControllers.update(req, res, next);
});



module.exports = router;
