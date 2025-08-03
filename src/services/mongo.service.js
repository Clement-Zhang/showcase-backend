import { collection } from '../configs/mongo.config.js';

async function addOneUser(user) {
    return await collection.insertOne(user);
}

async function getAllUsers() {
    const cursor = collection.find();
    let users = [];
    for await (let user of cursor) {
        user.id = user._id;
        console.log(user);
        users.push(user);
    }
    return users;
}

async function getAnalytics() {
    return {
        male: await collection.countDocuments({ gender: 'male' }),
        female: await collection.countDocuments({ gender: 'female' }),
    };
}

async function deleteUsers() {
    await collection.deleteMany();
}

export default { addOneUser, getAllUsers, deleteUsers, getAnalytics };
