const DB = require('./db');

const db = new DB();

module.exports = class logic {
    constructor() {

    }

    async getUsers() {
        const result = await db.read('user');
        return result;
    }
}