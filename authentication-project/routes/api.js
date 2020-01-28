const express = require('express');
const router = express.Router();
const Logic = require('./../models/apiLogic');

const logic = new Logic();

router.get('/', async (req, res, next) => {
    const result = await logic.getUsers();
    res.json(result);
});
module.exports = router;