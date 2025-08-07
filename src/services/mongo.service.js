import { collection } from '../configs/mongo.config.js';

async function addOneUser(user) {
    return await collection.insertOne(user);
}

async function getAllUsers() {
    return await collection
        .aggregate([
            //prettier-ignore
            {
                $addFields: {
                    age: {
                        $dateDiff: {
                            startDate: { $toDate: '$dob' },
                            endDate: '$$NOW',
                            unit: 'year',
                            timezone: '-04',
                        },
                    },
                    id: "$_id",
                },
            },
            {
                $project: {
                    _id: 0,
                },
            },
        ])
        .toArray();
}

async function getAnalytics() {
    const template = {
        male: 0,
        female: 0,
        0: 0,
        15: 0,
        25: 0,
        55: 0,
        65: 0,
    };
    (
        await collection
            .aggregate([{ $group: { _id: '$gender', count: { $sum: 1 } } }])
            .toArray()
    ).forEach((genderCount) => (template[genderCount._id] = genderCount.count));
    (
        await collection
            .aggregate([
                {
                    $bucket: {
                        groupBy: {
                            $dateDiff: {
                                startDate: { $toDate: '$dob' },
                                endDate: '$$NOW',
                                unit: 'year',
                                timezone: '-04',
                            },
                        },
                        boundaries: [0, 15, 25, 55, 65, 9999999999],
                    },
                },
            ])
            .toArray()
    ).forEach(
        (ageCount) => (template[ageCount._id] = ageCount.count)
    );
    return template;
}

async function deleteUsers() {
    await collection.deleteMany();
}

export default { addOneUser, getAllUsers, deleteUsers, getAnalytics };
