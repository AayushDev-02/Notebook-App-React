const connectToMongo = require('./db');
var cors = require('cors')
connectToMongo();



const express = require('express')
const app = express()
const port = process.env.PORT || 5000


app.use(cors())
app.use(express.json())

//Available Routers
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))  


app.listen(port, () => {
  console.log(`Notebook App Backend listening on port ${port}`)
})
