var express=require("express");
var app=express();
var path=require('path');
var formidable = require('formidable');
var requestIp = require('request-ip');
var port = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname,"public")));
var fs = require('fs')
var mv = require('mv');
var files = fs.readdirSync('./public/media');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
var mediatext='<!DOCTYPE html><html><head><title id="titlehead"></title><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="icon" href="app_pics/logo/logo.png" type="image/x-icon" /><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script><script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script><link rel="stylesheet" type="text/css" href="css/main.css"></head><body class="bcolor"><div class="fullpage" id="fullpageid"><center><video src="" controls class="fullpageitemvideo allSides" id="fullpageitemvid"></video><img src="" class="fullpageitempic allSides" id="fullpageitempic"><audio controls class="fullpageitemaudio allSides" src="" id="fullpageitemaud"></audio></center><p class="closecor cursor" onclick="closeitem()">Close</p> <div class="closebtn"><a onclick="closeitem()"><img src="app_pics/close.png" class="closeitem"></a></div></div><div class="allSides header"><center><p style="font-size:40px;font-weight:bold;color: white">DreamUnplugged</p><center><a class="btn btn-default" href="/">Home</a><a class="btn btn-default" href="/songs" style="margin:2px;">Songs</a><a class="btn btn-default" href="/videos" style="margin:2px;">Videos</a><a class="btn btn-default" href="/images" style="margin:2px;">PicWall</a></center><br></center></div><br/><center><button type="button" name="button" class="btn btn-primary" id="shownamesid" onclick="shownames()">Hide All File Names</button></center><div style="margin-top:50px"><div>';
var indxtext='<!DOCTYPE html><html><head><title>DreamUnplugged</title><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="icon" href="app_pics/logo/logo.png" type="image/x-icon" /><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script><script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script><link rel="stylesheet" type="text/css" href="css/main.css"><link rel="stylesheet" type="text/css" href="css/index.css"><style type="text/css">.div1{margin:100px 20%;background-color: rgba(0,0,0,0.7);}@media (max-width : 720px){.div1{margin:100px 8%;background-color: rgba(0,0,0,0.7);}}.mainiodiv{padding: 10px; margin-bottom: 15px; display: flex; justify-content: center;}.box{width: 150px; height: 100px; background: rgba(0,0,0,0.9); vertical-align: middle; display: table-cell; border-style: solid; border-color: white; margin: 20px; color: white;}.box:hover{background:rgba(0,255,0,0.2);}.circle{width: 200px; height: 100px; background: rgba(0,0,0,0.9); -moz-border-radius: 50px; -webkit-border-radius: 50px; border-radius: 50px; vertical-align: middle; display: table-cell; border-style: solid; border-color: white; margin: 20px; color: white;}.circle:hover{background:rgba(255,255,0,0.4);}.circlev:hover{background:rgba(0,0,255,0.4);}.circlei:hover{background:rgba(255,0,0,0.4);}@media (max-width : 720px){.circle{width: 70px; height: 70px; background: rgba(0,0,0,0.9); -moz-border-radius: 100%; -webkit-border-radius: 100%; border-radius:100%; vertical-align: middle; display: table-cell; border-style: solid; border-color: white; margin: 20px; color: white;}.btns{margin-top: 20px;font-size: 10px;font-weight: bold;}}.btns{margin-top: 15px;font-size: 20px;font-weight: bold;}.btnalign{margin: 20px}a:hover{text-decoration:none;}</style></head><body><div class="allSides" style="background-color: black;"><center><p style="font-size:50px;font-weight:bold;color: white">DreamUnplugged</p></center></div><div class="mainiodiv div1"><a href="/songs" class="btnalign"><div class="circle"><center><p class="btns">Songs</p></center></div></a><a href="/videos" class="btnalign"><div class="circle circlev"><center><p class="btns">Videos</p></center></div></a><a href="/images" class="btnalign"><div class="circle circlei"><center><p class="btns">PicWall</p></center></div></a></div></body></html>';
var mediatext2='<!DOCTYPE html><html><head><title id="titlehead"></title><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="icon" href="app_pics/logo/logo.png" type="image/x-icon" /><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script><script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script><link rel="stylesheet" type="text/css" href="css/main.css"></head><body class="bcolor"><div class="fullpage" id="fullpageid"><center><video src="" controls class="fullpageitemvideo allSides" id="fullpageitemvid"></video><img src="" class="fullpageitempic allSides" id="fullpageitempic"><audio controls class="fullpageitemaudio allSides" src="" id="fullpageitemaud"></audio></center><p class="closecor cursor" onclick="closeitem()">Close</p><div class="closebtn"><a onclick="closeitem()"><img src="app_pics/close.png" class="closeitem"></a></div></div><div class="allSides header"><center><p style="font-size:40px;font-weight:bold;color:  white">DreamUnplugged</p><center><a class="btn btn-default" href="/">Home</a><a class="btn btn-default" href="/songs" style="margin:2px;">Songs</a><a class="btn btn-default" href="/videos" style="margin:2px;">Videos</a><a class="btn btn-default" href="/images" style="margin:2px;">PicWall</a></center><br></center></p></center></div><div style="margin-top:50px"><div>';
app.get("/",function(req,res){
res.writeHead(200, {'Content-Type': 'text/html'});
res.end(indxtext);
});
//----------------------------------Songs--------------------------------------------------
  app.get("/songs",function(req,res){
    console.log("Songs");
    songstext=mediatext;
    var files=[];
    var files=fs.readdirSync('./public/media/songs');
    var backimages=fs.readdirSync('./public/app_pics/music');
          for(i=0;i<files.length;i++)
          {
              var mpicname=backimages[Math.floor(Math.random() * backimages.length)];
              if((files[i].endsWith(".mp3")))
              {
                songstext=songstext+'<div class="col-md-3 picdivs" id="picsizes"><div class="scrolltext nametag" id="myitemname"><span>'+files[i]+'</span></div><a ondblclick="largepic(\''+i+'\')"><audio controls class="audioitem songpicmp3 allSides" id="audiofiles'+i+'" style="background-image: url(../app_pics/music/'+mpicname+');"><source src="media/songs/'+files[i]+'" id="'+i+'"></audio></a></div>';
              }
              else if ((files[i].endsWith(".m4a")))
              {
                songstext=songstext+'<div class="col-md-3 picdivs" id="picsizes"><div class="scrolltext nametag" id="myitemname"><span>'+files[i]+'</span></div><a ondblclick="largepic(\''+i+'\')"><audio controls class="audioitem songpicm4a allSides" id="audiofiles'+i+'"  style="background-image: url(../app_pics/music/'+mpicname+');"><source src="media/songs/'+files[i]+'" id="'+i+'"></audio></a></div>';
              }
              else if ((files[i].endsWith(".ogg")))
              {
                songstext=songstext+'<div class="col-md-3 picdivs" id="picsizes"><div class="scrolltext nametag" id="myitemname"><span>'+files[i]+'</span></div><a ondblclick="largepic(\''+i+'\')"><audio controls class="audioitem songpicogg allSides" id="audiofiles'+i+'" style="background-image: url(../app_pics/music/'+mpicname+');"><source src="media/songs/'+files[i]+'" id="'+i+'"></audio></a></div>';

              }
              else if ((files[i].endsWith(".wav")))
              {
                songstext=songstext+'<div class="col-md-3 picdivs" id="picsizes"><div class="scrolltext nametag" id="myitemname"><span>'+files[i]+'</span></div><a ondblclick="largepic(\''+i+'\')"><audio controls class="audioitem songpicwav allSides" id="audiofiles'+i+'" style="background-image: url(../app_pics/music/'+mpicname+');"><source src="media/songs/'+files[i]+'" id="'+i+'"></audio></a></div>';

              }
              else{
                songstext=songstext+'<div class="col-md-3 picdivs" id="picsizes"><div class="scrolltext nametag" id="myitemname"><span>'+files[i]+'</span></div><a ondblclick="largepic(\''+i+'\')"><audio controls class="audioitem songpicdefault allSides" id="audiofiles'+i+'" style="background-image: url(../app_pics/music/'+mpicname+');"><source src="media/songs/'+files[i]+'" id="'+i+'"></audio></a></div>';
              }
          }
          songstext=songstext+'</div></div></div><script src="main.js"></script><script>document.getElementById("titlehead").innerHTML="Songs";</script></body></html>';
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.end(songstext);
    });
//----------------------------------------------Videos--------------------------------------------------------
  app.get("/videos",function(req,res){
    console.log("Videos");
    videostext=mediatext;
    var files=[];
    var files=fs.readdirSync('./public/media/videos');
          for(i=0;i<files.length;i++)
          {
            videostext=videostext+'<div class="col-md-3 picdivs" id="picsizes"><div class="scrolltext nametag" id="myitemname"><span>'+files[i]+'</span></div><a ondblclick="largepic(\''+i+'\')"><video src="media/videos/'+files[i]+'" controls class="item allSides" id="'+i+'"> </video></a></div>';
          }
        videostext=videostext+'</div></div></div><script src="main.js"></script><script>document.getElementById("titlehead").innerHTML="Videos";</script></body></html>';
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(videostext);
    });
//-------------------------------------------------Images----------------------------------------------------
  app.get("/images",function(req,res){
    console.log("Images");
    imagestext=mediatext2;
    var files=[];
    var files=fs.readdirSync('./public/media/images');
          for(i=0;i<files.length;i++)
          {
            imagestext=imagestext+'<div class="col-md-3 picdivs" id="picsizes"><a ondblclick="largepic(\''+i+'\')"><img src="media/images/'+files[i]+'" class="item allSides" id="'+i+'"></a></div>';
          }
          imagestext=imagestext+'</div></div></div><script src="main.js"></script><script>document.getElementById("titlehead").innerHTML="Images";</script></body></html>';
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.end(imagestext);
    });
//------------------------------------------Login----------------------------------------------------------------
var passnot='<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="IE=edge"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script><link href="css/font-awesome.min.css" type="text/css" rel="stylesheet"/><link href="css/login.css" type="text/css" rel="stylesheet"/><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"><style type="text/css">.logindiv{height: 50%; width: 100%;}</style><body class="backgroundb"><nav class="unselectable" style="background-color: #fff"><center><a href="/"><img src="app_pics/logo/logo.png" class="pichead" height="150" width="190"></a></center></nav><div class="container"><center><div class="alert alert-warning" style="margin: 20px;width: 50%"> <strong>Invalid Password!</strong> Password is wrong. </div><div class="col-md-6 col-md-push-3 create_popup_div unselectable"><div style="background: rgba(0,0,0,0.2);margin-top: 10%"><br><h1>Login</h1><form action="/login" method="post"> <input type="text" id="username" name="username" class="input" placeholder="Username" required="required"/> <input type="password" id="password" name="password" placeholder="Password" class="input" required="required"/> <center> <input type="submit" name="submit" id="loginbtn" class="inputbtn unselectable" value="Sign In"> </center> </form> <br><br></div></div></center></div><footer class="unselectable"><center><a class="icon-link round facebook" href="https://www.facebook.com/officialdreamunplugged" target="_blank"><i class="fa fa-facebook"></i></a><a class="icon-link round tumblr" href="https://github.com/bcrazydreamer" target="_blank"><i class="fa fa-github"></i></a><a class="icon-link round twitter" href="https://twitter.com/imbharatrawat" target="_blank"><i class="fa fa-twitter"></i></a><a class="icon-link round instagram" href="https://instagram.com/bharat_xettri" target="_blank"><i class="fa fa-instagram"></i></a></center></br><center><h2 style="color: rgba(0,0,0,0.5);">DreamUnplugged © 2018</h2></center></footer></body></html>';
var unamnot='<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="IE=edge"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script><link href="css/font-awesome.min.css" type="text/css" rel="stylesheet"/><link href="css/login.css" type="text/css" rel="stylesheet"/><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"><style type="text/css">.logindiv{height: 50%; width: 100%;}</style><body class="backgroundb"><nav class="unselectable" style="background-color: #fff"><center><a href="/"><img src="app_pics/logo/logo.png" class="pichead" height="150" width="190"></a></center></nav><div class="container"><center><div class="alert alert-warning" style="margin: 20px;width: 50%"> <strong>Invalid Username!</strong> Username is wrong. </div><div class="col-md-6 col-md-push-3 create_popup_div unselectable"><div style="background: rgba(0,0,0,0.2);margin-top: 10%"><br><h1>Login</h1><form action="/login" method="post"> <input type="text" id="username" name="username" class="input" placeholder="Username" required="required"/> <input type="password" id="password" name="password" placeholder="Password" class="input" required="required"/> <center> <input type="submit" name="submit" id="loginbtn" class="inputbtn unselectable" value="Sign In"> </center> </form> <br><br></div></div></center></div><footer class="unselectable"><center><a class="icon-link round facebook" href="https://www.facebook.com/officialdreamunplugged" target="_blank"><i class="fa fa-facebook"></i></a><a class="icon-link round tumblr" href="https://github.com/bcrazydreamer" target="_blank"><i class="fa fa-github"></i></a><a class="icon-link round twitter" href="https://twitter.com/imbharatrawat" target="_blank"><i class="fa fa-twitter"></i></a><a class="icon-link round instagram" href="https://instagram.com/bharat_xettri" target="_blank"><i class="fa fa-instagram"></i></a></center></br><center><h2 style="color: rgba(0,0,0,0.5);">DreamUnplugged © 2018</h2></center></footer></body></html>';
var invalidlogin='<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="IE=edge"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script><link href="css/font-awesome.min.css" type="text/css" rel="stylesheet"/><link href="css/login.css" type="text/css" rel="stylesheet"/><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"><style type="text/css">.logindiv{height: 50%; width: 100%;}</style><body class="backgroundb"><nav class="unselectable" style="background-color: #fff"><center><a href="/"><img src="app_pics/logo/logo.png" class="pichead" height="150" width="190"></a></center></nav><div class="container"><center><div class="alert alert-warning" style="margin: 20px;width: 50%"> <strong>Invalid Username and Password!</strong> </div><div class="col-md-6 col-md-push-3 create_popup_div unselectable"><div style="background: rgba(0,0,0,0.2);margin-top: 10%"><br><h1>Login</h1><form action="/login" method="post"> <input type="text" id="username" name="username" class="input" placeholder="Username" required="required"/> <input type="password" id="password" name="password" placeholder="Password" class="input" required="required"/> <center> <input type="submit" name="submit" id="loginbtn" class="inputbtn unselectable" value="Sign In"> </center> </form> <br><br></div></div></center></div><footer class="unselectable"><center><a class="icon-link round facebook" href="https://www.facebook.com/officialdreamunplugged" target="_blank"><i class="fa fa-facebook"></i></a><a class="icon-link round tumblr" href="https://github.com/bcrazydreamer" target="_blank"><i class="fa fa-github"></i></a><a class="icon-link round twitter" href="https://twitter.com/imbharatrawat" target="_blank"><i class="fa fa-twitter"></i></a><a class="icon-link round instagram" href="https://instagram.com/bharat_xettri" target="_blank"><i class="fa fa-instagram"></i></a></center></br><center><h2 style="color: rgba(0,0,0,0.5);">DreamUnplugged © 2018</h2></center></footer></body></html>';
var loginpage='<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="IE=edge"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script><link href="css/font-awesome.min.css" type="text/css" rel="stylesheet"/><link href="css/login.css" type="text/css" rel="stylesheet"/><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"><style type="text/css">.logindiv{height: 50%; width: 100%;}</style><body class="backgroundb"><nav class="unselectable" style="background-color: #fff"><center><a href="/"><img src="app_pics/logo/logo.png" class="pichead" height="150" width="190"></a></center></nav><div class="container"><center><div class="col-md-6 col-md-push-3 create_popup_div unselectable"><div style="background: rgba(0,0,0,0.2);margin-top: 10%"><br><h1>Login</h1><form action="/login" method="post"> <input type="text" id="username" name="username" class="input" placeholder="Username" required="required"/> <input type="password" id="password" name="password" placeholder="Password" class="input" required="required"/> <center> <input type="submit" name="submit" id="loginbtn" class="inputbtn unselectable" value="Sign In"> </center> </form> <br><br></div></div></center></div><footer class="unselectable"><center><a class="icon-link round facebook" href="https://www.facebook.com/officialdreamunplugged" target="_blank"><i class="fa fa-facebook"></i></a><a class="icon-link round tumblr" href="https://github.com/bcrazydreamer" target="_blank"><i class="fa fa-github"></i></a><a class="icon-link round twitter" href="https://twitter.com/imbharatrawat" target="_blank"><i class="fa fa-twitter"></i></a><a class="icon-link round instagram" href="https://instagram.com/bharat_xettri" target="_blank"><i class="fa fa-instagram"></i></a></center></br><center><h2 style="color: rgba(0,0,0,0.5);">DreamUnplugged © 2018</h2></center></footer></body></html>';
app.get("/login",function(req,res){
console.log("login");
res.writeHead(200, {'Content-Type': 'text/html'});
res.end(loginpage);
});
app.post("/login",function(req,res)
{
var data=req.body;
var unam=data.username;
var pass=data.password;
if(unam=="admin" && pass=="dreamer"){
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<html><body onload="login()"> <script type="text/javascript">function login(){location.href="/";};</script> </body></html>');
}
else if(pass=="dreamer")
{
  if(unam!="admin")
  {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(unamnot);
  }
}
else
{
  if(unam=="admin")
  {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(passnot);
  }
  else{
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(invalidlogin);
}
}
});
/*--------------------------------------File Uploading------------------------------------------------------------*/
app.get("/upload",function(req,res){
  console.log(requestIp.getClientIp(req));
  res.status(300).sendFile(path.join(__dirname,"public","fileupload.html"));
  });

  app.get("/uploadaudio",function(req,res){
    console.log(requestIp.getClientIp(req));
    res.status(300).sendFile(path.join(__dirname,"public","audioupload.html"));
    });


//-------------------------------------------------------------------------------------------------
  app.post("/uploadaudio",function(req,res)
  {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.path;
      var newpath = './public/media/songs/' + files.filetoupload.name;
      mv(oldpath, newpath, function(err) {
        if (err) throw err;
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="IE=edge"><link rel="icon" href="app_pics/logo/logo.png" type="image/x-icon"/><title>Uploaded</title><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script><link href="css/font-awesome.min.css" type="text/css" rel="stylesheet"/><link href="css/login.css" type="text/css" rel="stylesheet"/><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"><style type="text/css">.logindiv{height: 50%; width: 100%;}a{margin: 5px;text-decoration: none;}</style><body class="redyel"><nav class="unselectable" style="background-color: #fff"><center><a href="#"><img src="app_pics/logo/logo.png" class="pichead" height="150" width="190"></a></center></nav><center><div class="alert alert-success" style="margin-top: 20px;width: 50%"> <strong>Success!</strong> File '+files.filetoupload.name+' succesfully uploaded.</div></center><div class="container"><center><div class="col-md-6 col-md-push-3 unselectable"><div style="background: rgba(0,0,0,0.2);margin-top: 10%"><br><h1>Upload</h1><br><a type="button" class="btn btn-default btn-lg" href="/uploadaudio">Audio</a> <a type="button" class="btn btn-default btn-lg" href="/uploadvideo">Video</a> <a type="button" class="btn btn-default btn-lg" href="/uploadimage">Image</a> <br><br><br><br><br></div></div></center></div><footer class="unselectable"><center><a class="icon-link round facebook" href="https://www.facebook.com/officialdreamunplugged" target="_blank"><i class="fa fa-facebook"></i></a><a class="icon-link round tumblr" href="https://github.com/bcrazydreamer" target="_blank"><i class="fa fa-github"></i></a><a class="icon-link round twitter" href="https://twitter.com/imbharatrawat" target="_blank"><i class="fa fa-twitter"></i></a><a class="icon-link round instagram" href="https://instagram.com/bharat_xettri" target="_blank"><i class="fa fa-instagram"></i></a></center></br><center><h2 style="color: rgba(0,0,0,0.5);">DreamUnplugged © 2018</h2></center></footer></body></html>');
      });
 });
});

//-------------------------------------------------------------------------------------------------
 app.get("/uploadvideo",function(req,res){
   console.log(requestIp.getClientIp(req));
   res.status(300).sendFile(path.join(__dirname,"public","videoupload.html"));
   });
 app.post("/uploadvideo",function(req,res)
 {
   var form = new formidable.IncomingForm();
   form.parse(req, function (err, fields, files) {
     var oldpath = files.filetoupload.path;
     console.log(files.filetoupload.name);
   //console.log(oldpath);
     var newpath = './public/media/videos/' + files.filetoupload.name;
     mv(oldpath, newpath, function(err) {
       if (err) throw err;
       res.writeHead(200, {'Content-Type': 'text/html'});
       res.end('<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="IE=edge"><link rel="icon" href="app_pics/logo/logo.png" type="image/x-icon"/><title>Uploaded</title><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script><link href="css/font-awesome.min.css" type="text/css" rel="stylesheet"/><link href="css/login.css" type="text/css" rel="stylesheet"/><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"><style type="text/css">.logindiv{height: 50%; width: 100%;}a{margin: 5px;text-decoration: none;}</style><body class="redyel"><nav class="unselectable" style="background-color: #fff"><center><a href="#"><img src="app_pics/logo/logo.png" class="pichead" height="150" width="190"></a></center></nav><center><div class="alert alert-success" style="margin-top: 20px;width: 50%"> <strong>Success!</strong> File '+files.filetoupload.name+' succesfully uploaded.</div></center><div class="container"><center><div class="col-md-6 col-md-push-3 unselectable"><div style="background: rgba(0,0,0,0.2);margin-top: 10%"><br><h1>Upload</h1><br><a type="button" class="btn btn-default btn-lg" href="/uploadaudio">Audio</a> <a type="button" class="btn btn-default btn-lg" href="/uploadvideo">Video</a> <a type="button" class="btn btn-default btn-lg" href="/uploadimage">Image</a> <br><br><br><br><br></div></div></center></div><footer class="unselectable"><center><a class="icon-link round facebook" href="https://www.facebook.com/officialdreamunplugged" target="_blank"><i class="fa fa-facebook"></i></a><a class="icon-link round tumblr" href="https://github.com/bcrazydreamer" target="_blank"><i class="fa fa-github"></i></a><a class="icon-link round twitter" href="https://twitter.com/imbharatrawat" target="_blank"><i class="fa fa-twitter"></i></a><a class="icon-link round instagram" href="https://instagram.com/bharat_xettri" target="_blank"><i class="fa fa-instagram"></i></a></center></br><center><h2 style="color: rgba(0,0,0,0.5);">DreamUnplugged © 2018</h2></center></footer></body></html>');
     });
});
});
//--------------------------------------------------------------------------------------------------
app.get("/uploadimage",function(req,res){
  console.log(requestIp.getClientIp(req));
  res.status(300).sendFile(path.join(__dirname,"public","imageupload.html"));
  });

app.post("/uploadimage",function(req,res)
{
  var form = new formidable.IncomingForm();
  form.parse(req, function (err, fields, files) {
    var oldpath = files.filetoupload.path;
    var newpath = './public/media/images/' + files.filetoupload.name;
    mv(oldpath, newpath, function(err) {
      if (err) throw err;
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end('<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="IE=edge"><link rel="icon" href="app_pics/logo/logo.png" type="image/x-icon"/><title>Uploaded</title><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script><link href="css/font-awesome.min.css" type="text/css" rel="stylesheet"/><link href="css/login.css" type="text/css" rel="stylesheet"/><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"><style type="text/css">.logindiv{height: 50%; width: 100%;}a{margin: 5px;text-decoration: none;}</style><body class="redyel"><nav class="unselectable" style="background-color: #fff"><center><a href="#"><img src="app_pics/logo/logo.png" class="pichead" height="150" width="190"></a></center></nav><center><div class="alert alert-success" style="margin-top: 20px;width: 50%"> <strong>Success!</strong> File '+files.filetoupload.name+' succesfully uploaded.</div></center><div class="container"><center><div class="col-md-6 col-md-push-3 unselectable"><div style="background: rgba(0,0,0,0.2);margin-top: 10%"><br><h1>Upload</h1><br><a type="button" class="btn btn-default btn-lg" href="/uploadaudio">Audio</a> <a type="button" class="btn btn-default btn-lg" href="/uploadvideo">Video</a> <a type="button" class="btn btn-default btn-lg" href="/uploadimage">Image</a> <br><br><br><br><br></div></div></center></div><footer class="unselectable"><center><a class="icon-link round facebook" href="https://www.facebook.com/officialdreamunplugged" target="_blank"><i class="fa fa-facebook"></i></a><a class="icon-link round tumblr" href="https://github.com/bcrazydreamer" target="_blank"><i class="fa fa-github"></i></a><a class="icon-link round twitter" href="https://twitter.com/imbharatrawat" target="_blank"><i class="fa fa-twitter"></i></a><a class="icon-link round instagram" href="https://instagram.com/bharat_xettri" target="_blank"><i class="fa fa-instagram"></i></a></center></br><center><h2 style="color: rgba(0,0,0,0.5);">DreamUnplugged © 2018</h2></center></footer></body></html>');
    });
});
});
//--------------------------------------------------------------------------------------------------------
  app.listen(8000,'192.168.43.60',function() {
    console.log("127.0.0.1:8000 Sever");
  })
