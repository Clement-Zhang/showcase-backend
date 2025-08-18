import {
    addOneUser,
    getAllUsers,
    updateUser,
    getAnalytics,
    deleteOneUser,
    deleteUsers,
} from '../services/mongo.service.js';

async function addUser(req, res) {
    await addOneUser(req.body);
    res.end();
}

async function getUsers(req, res) {
    res.json(await getAllUsers());
}

async function editUser(req, res) {
    await updateUser(req.body);
    res.end();
}

async function summarize(req, res) {
    res.json(await getAnalytics());
}

async function deleteUser(req, res) {
    await deleteOneUser(req.body);
    res.end();
}

async function wipe(req, res) {
    await deleteUsers();
    res.end();
}

export { addUser, getUsers, summarize, editUser, deleteUser, wipe };
