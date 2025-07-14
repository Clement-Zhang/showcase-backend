const {
    addOneUser,
    getAllUsers,
    deleteUsers,
} = require('../services/firebase.service');

async function addUser(req, res) {
    console.log('Adding user:', req.body);
    await addOneUser(req.body);
}

async function getUsers(req, res) {
    console.log('Fetching all users');
    res.json(await getAllUsers());
}

async function wipe(req, res) {
    const users = await getAllUsers();
    await deleteUsers(users.map((user) => user.id));
}

module.exports = { addUser, getUsers, wipe };
