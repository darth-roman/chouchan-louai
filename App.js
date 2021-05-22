/* Import Start */
import express from "express"



/* Const Scope Start */
const PORT = process.env.PORT || 9090
const App = express()


/* App Usage */
App.set("view engine", "ejs")
App.use(express.static('public'))


// Routes
App.get('/', (req, res)=>{
    res.render('index.ejs')
})


// Listen to the PORT
App.listen(PORT, console.log(`Server Running on ${PORT}`))


