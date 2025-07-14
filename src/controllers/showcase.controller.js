const {
    addOneUser,
    getAllUsers,
    deleteUsers,
    getAnalytics,
} = require('../services/firebase.service');

async function addUser(req, res) {
    await addOneUser(req.body);
}

async function getUsers(req, res) {
    res.json(await getAllUsers());
}

async function summarize(req, res) {
    res.json(await getAnalytics());
}

async function wipe(req, res) {
    const users = await getAllUsers();
    await deleteUsers(users.map((user) => user.id));
}

module.exports = { addUser, getUsers, wipe, summarize };
