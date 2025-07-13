const {
    addOneUser,
    getAllUsers,
    deleteUsers,
} = require('../services/firebase.service');

async function addUser(req, res) {
    await addOneUser(req.body.user);
}

async function getUsers(req, res) {
    res.json(await getAllUsers());
}

async function wipe(req, res) {
    const users = await getAllUsers();
    await deleteUsers(users.map((user) => user.id));
}

module.exports = { addUser, getUsers, wipe };
