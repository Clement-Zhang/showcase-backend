const collection = require('../configs/firebase.config.js');
const { addDoc, getDocs, deleteDoc, doc } = require('firebase/firestore');

async function addOneUser(user) {
    await addDoc(collection, user);
}

async function getAllUsers() {
    const result = await getDocs(collection);
    return result.docs.map((user) => ({
        id: user.id,
        ...user.data(),
    }));
}

async function deleteUsers(userIds) {
    await Promise.all(
        userIds.map((userId) => deleteDoc(doc(collection, userId)))
    );
}

module.exports = { addOneUser, getAllUsers, deleteUsers };
