import { MongoClient, ServerApiVersion } from 'mongodb';
const uri =
    'mongodb+srv://zhangclement947:8imzvIYFQmuPHTXS@website.6gtbmdg.mongodb.net/?retryWrites=true&w=majority&appName=website';

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

async function run() {
    try {
        await client.connect();
        return client.db('analytics').collection('users');
    } catch (err) {
        console.log(err);
        await client.close();
    }
}
export const collection = await run().catch(console.dir);
