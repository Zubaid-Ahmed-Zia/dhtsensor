const sensor = require('node-dht-sensor');
const express = require('express');
const app = express();

var port = process.env.PORT || 3000;

app.get('/',(req,res)=>{
sensor.read(11,17,function(err,temperature,humidity){
if(!err){
res.send(JSON.stringify({temp:temperature,humi:humidity}));
}
else{
res.send(err);
}
});
});
app.listen(port,()=>{console.log('sensor working')
});


