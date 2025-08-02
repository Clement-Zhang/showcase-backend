import collection from '../configs/firebase.config.s';
import {
    addDoc,
    getDocs,
    deleteDoc,
    doc,
    getCountFromServer,
    query,
    where,
} from 'firebase/firestore';

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

async function getAnalytics() {
    let q = await getCountFromServer(
        query(collection, where('gender', '==', 'male'))
    );
    const male = q.data().count;
    q = await getCountFromServer(
        query(collection, where('gender', '==', 'female'))
    );
    const female = q.data().count;
    return { male: male, female: female };
}

async function deleteUsers(userIds) {
    await Promise.all(
        userIds.map((userId) => deleteDoc(doc(collection, userId)))
    );
}

export default { addOneUser, getAllUsers, deleteUsers, getAnalytics };
