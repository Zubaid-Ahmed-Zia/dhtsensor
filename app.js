const sensor = require('node-dht-sensor');
const express = require('express');
const app = express();

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
app.listen(3000,()=>{console.log('sensor working')
});
