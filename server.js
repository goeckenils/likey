const express = require('express')
const connectDB = require('./config/db')


const app = express()

connectDB();

app.use(express.json({ extended: false }))
//define routes 
app.use('/api/users', require('./routes/api/users'))
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/projects', require('./routes/api/projects'))
app.use('/api/posts', require('./routes/api/posts'))

app.get('/', (req, res) => res.send("API Running"))
const PORT = process.env.PORT || 5000;


app.listen(PORT, () => { console.log(`Server started on ${PORT}`) })