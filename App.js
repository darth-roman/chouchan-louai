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

App.get('/uc', (req, res)=>{
    res.render('components/under_construction.ejs')
})

App.get('/projects', (req, res)=>{
    res.render('components/projects/index.ejs')
})

App.get('/theories', (req, res)=>{
    res.render('components/theories/index.ejs')
})

App.get('/admin', (req, res)=>{
    res.render('admin/index.ejs')
})


// Listen to the PORT
App.listen(PORT, console.log(`Server Running on ${PORT}`))





