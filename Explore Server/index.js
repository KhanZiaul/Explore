const express = require('express');
const cors = require('cors');
require('dotenv').config()
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express()
const port = process.env.PORT || 1000

// Middleware
app.use(cors())
app.use(express.json())


// MongoDB

const uri = `mongodb+srv://${process.env.DB_TITLE}:${process.env.DB_PASS}@cluster0.mf37tl1.mongodb.net/?retryWrites=true&w=majority`

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();

    const exploreCollections = client.db("exploreDB").collection("datas")

    app.get('/jobs',async(req,res) => {
        const result = await exploreCollections.find().toArray()
        res.send(result)
    })

    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



app.get('/', (req,res) => {
    res.send('Explore')
})

app.listen(port,()=>[
    console.log(`PORT IS RUNNING IN - ${port}`)
])