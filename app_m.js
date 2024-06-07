const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

//let nav_content=['materials','disciplines','teachers','video','students','abitur','science','contacts'];
//let n,i; 
//n=nav_content.length;

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/main/index.html'));
});

router.get('/about',function(req,res){
  res.sendFile(path.join(__dirname+'/about/index.html'));
});

router.get('/SK',function(req,res){
  res.sendFile(path.join(__dirname+'/SK/index.html'));
});

router.get('/TKzaII',function(req,res){
  res.sendFile(path.join(__dirname+'/TKzaII/index.html'));
});

router.get('/DK',function(req,res){
  res.sendFile(path.join(__dirname+'/DK/index.html'));
});

router.get('/techzakaz',function(req,res){
  res.sendFile(path.join(__dirname+'/techzakaz/index.html'));
});
 
router.get('/TA',function(req,res){
  res.sendFile(path.join(__dirname+'/TA/index.html'));
});

router.get('/contacts',function(req,res){
  res.sendFile(path.join(__dirname+'/contacts/index.html'));
});

app.use('/', router);
app.use(express.static(__dirname + '/public'));
app.use('/node_modules/@dotlottie', express.static(__dirname + '/node_modules/@dotlottie'));
app.listen(process.env.port || 8084);
 
console.log('Running at Port 8084');