import { MongoClient } from "npm:mongodb@6";

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const dbName = "myProject";

await client.connect();
console.log("Connected successfully to server");

// Get a reference to a collection
const db = client.db(dbName);
const collection = db.collection("documents");

// Execute an insert operation
const insertResult = await collection.insertMany([{ a: 1 }, { a: 2 }]);
console.log("Inserted documents =>", insertResult);

client.close();
