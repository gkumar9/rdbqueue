const jobQueue = require('./jobqueue.class.js');

const Queue = require('rethinkdb-job-queue')
const axios=require('axios')
const qOptions = {
    name: 'Metalsmith' // The queue and table name
}
const cxnOptions = {
    db: 'JobQueue', // The name of the database in RethinkDB
}

const q = new Queue(cxnOptions, qOptions)


let jq = new jobQueue();

console.log('jq :: ',jq)

jq.publish();