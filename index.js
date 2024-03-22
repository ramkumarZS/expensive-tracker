var express=require('express')
var bodyparser=require('body-parser')
var mongoose=require('mongoose')

const app=express()
app.use(bodyparser.json())
app.use(express.static('front'))
app.use(bodyparser.urlencoded({
    extended:true
}))

mongoose.connect('mongodb://localhost:27017/trackexpensedb')
var db=mongoose.connection
db.on('error',()=>console.log("not connected db"))
db.once('open',()=>console.log("connected db"))

app.post("/add",(req,res)=>{
    var category_select=req.body.category_select
    var amount_input=req.body.amount_input
    var info=req.body.info
    var date_input=req.body.date_input

var data={
    "category":category_select,
    "amount":amount_input,
    "info":info,
    "date":date_input,
}
db.collection('users').insertOne(data,(err,colletion)=>{
    if(err){
        throw err;
    }
    console.log("inserted successfully")
})



})



app.get('/',(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin":'*'
    })
    return res.redirect('index.html')
}).listen(3000)

console.log("listening on port 5001 node ")
