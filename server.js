var express = require('express');
var app=express();
app.use(express.static(__dirname+'/frontend'));
app.get('/',function(req,res){
    res.sendFile(__dirname+"/frontend/index.html");
})
app.get('/eslambook',function(req,res){
    res.sendFile(__dirname+"/frontend/eslambook.html");
})
app.get('/memories',function(req,res){
    res.sendFile(__dirname+"/frontend/memories.html");
})
app.get('/suggest',function(req,res){
    res.sendFile(__dirname+"/frontend/suggest.html");
})
var port=process.env.PORT || 3000;
app.listen(port,function(){
    console.log('site run on http://localhost:'+port);
});