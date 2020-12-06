const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const cors = require('cors')


const app = express();


//allow cross-origin requests
app.use(cors())



mongoose.connect('mongodb+srv://admin-methma:test123@cluster0.14js5.mongodb.net/GQLBooks?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.once('open', () => {
    console.log('connected to database');
})




app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))


app.listen(4000, () => console.log('Server is running'))