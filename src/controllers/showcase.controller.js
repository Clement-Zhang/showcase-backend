import mongo from '../services/mongo.service.js';

async function addUser(req, res) {
    await mongo.addOneUser(req.body);
}

async function getUsers(req, res) {
    res.json(await mongo.getAllUsers());
}

async function summarize(req, res) {
    res.json(await mongo.getAnalytics());
}

async function wipe(req, res) {
    await mongo.deleteUsers();
    res.end();
}

export default { addUser, getUsers, wipe, summarize };
