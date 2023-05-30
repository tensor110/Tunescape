// const MongoClient = require("mongodb").MongoClient;
// const assert = require("assert");

// const url = 'mongodb://127.0.0.1:27017';

// const dbName='fruitsDB'

// // console.log("connected Successfuly to server1");

// const client = new MongoClient(url);
// // console.log("connected Successfuly to server2");

// client.connect((err)=>{

//     assert.equal(null,err);

//     console.log("connected Successfuly to server");

//     const db =client.db(dbName);

//     client.close();
// },{ serverSelectionTimeoutMS: 5000 })


// const insertDocuments = (db,callback)=>{
//     const collection=db.collection('fruits');


//     collection.insertMany([{a:1},{a:2},{a:3}],(err,result)=>{
//         assert.equal(err,null);
//         assert.equal(3,result.result.n);
//         assert.equal(3,result.ops.length);
//         console.log("Inserted 3 documents into the collection");
//         callback(result);
//     })
// }



// const { MongoClient } = require('mongodb');
// const assert = require("assert");

// // or as an es module:
// // import { MongoClient } from 'mongodb'


// // Connection URL
// const url = 'mongodb://127.0.0.1:27017';
// const client = new MongoClient(url);

// // Database Name
// const dbName = 'myProject';

// async function main() {
//   // Use connect method to connect to the server
//   await client.connect();
//   console.log('Connected successfully to server');
//   const db = client.db(dbName);
//   const collection = db.collection('documents');

//   // the following code examples can be pasted here...

//     collection.insertMany([{a:1},{a:2},{a:3}],(err,result)=>{
//         assert.equal(err,null);
//         assert.equal(3,result.result.n);
//         assert.equal(3,result.ops.length);
//         console.log("Inserted 3 documents into the collection");
//         client.close();
//     })


//   return 'done.';
// }

// main()
//   .then(console.log)
//   .catch(console.error)
//   .finally(() => client.close());



// The error message "MongoBulkWriteError: Attempted to check out a connection from closed connection pool" 
// suggests that you're attempting to use a connection from a closed connection pool to execute a bulk write operation.
// In the provided code, the connection is closed immediately after the insertMany operation is initiated, which can lead
//  to this error. Since the insertMany operation is asynchronous, the connection might be closed before the operation completes.
// To resolve this issue, you can await the insertMany operation and close the connection afterward. Here's the updated code:

const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'myProject';

async function main() {
  try {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('documents');

    const result = await collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }]);
    console.log('Inserted 3 documents into the collection');

    return 'done.';
  } catch (error) {
    console.error(error);
  } finally {
    client.close();
  }
}

main()
  .then(console.log)
  .catch(console.error);