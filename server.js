var http = require("http");
var fs = require("fs");
var qs = require("querystring")
var Datastore = require('nedb')
var coll = new Datastore({
    filename: 'user.db',
    autoload: true
});
var server = http.createServer(function (req, res) {
    console.log("url: " + req.url)
    //html loader
    if(req.url === "/"){
        fs.readFile("static/index.html", function (error, data) {        
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        });
    }
    else if(req.url === "/loader"){
        fs.readFile("static/index3.html", function (error, data) {        
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        });
    }
    //css loader
    else if(req.url === "/css/style.css"){
        fs.readFile("static/css/style.css", function (error, data) {        
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.write(data);
            res.end();
        });
    }
    else if(req.url === "/css/input.css"){
        fs.readFile("static/css/input.css", function (error, data) {        
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.write(data);
            res.end();
        });
    }
    else if(req.url === "/css/style2.css"){
        fs.readFile("static/css/style2.css", function (error, data) {        
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.write(data);
            res.end();
        });
    }
    else if(req.url === "/css/style3.css"){
        fs.readFile("static/css/style3.css", function (error, data) {        
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.write(data);
            res.end();
        });
    }
    else if(req.url === "/css/font.css"){
        fs.readFile("static/css/font.css", function (error, data) {        
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.write(data);
            res.end();
        });
    }
    //js loader
    else if(req.url === "/js/jquery-3.1.0.min.js"){
        fs.readFile("static/js/jquery-3.1.0.min.js", function (error, data) {        
            res.writeHead(200, { 'Content-Type': 'application/javascript' });
            res.write(data);
            res.end();
        });
    }
    else if(req.url === "/js/rejestracja.js"){
        fs.readFile("static/js/rejestracja.js", function (error, data) {        
            res.writeHead(200, { 'Content-Type': 'application/javascript' });
            res.write(data);
            res.end();
        });
    }
    else if(req.url === "/js/ajax.js"){
        fs.readFile("static/js/ajax.js", function (error, data) {        
            res.writeHead(200, { 'Content-Type': 'application/javascript' });
            res.write(data);
            res.end();
        });
    }
    else if(req.url === "/js/ajax2.js"){
        fs.readFile("static/js/ajax2.js", function (error, data) {        
            res.writeHead(200, { 'Content-Type': 'application/javascript' });
            res.write(data);
            res.end();
        });
    }
    else if(req.url === "/js/ajax3.js"){
        fs.readFile("static/js/ajax3.js", function (error, data) {        
            res.writeHead(200, { 'Content-Type': 'application/javascript' });
            res.write(data);
            res.end();
        });
    }
    //gfx loader
    else if(req.url === "/gfx/logo.png"){
        fs.readFile("static/gfx/logo.png", function (error, data) {        
            res.writeHead(200, { 'Content-Type': 'image/png' });
            res.write(data);
            res.end();
        });
    }
    else if(req.url === "/gfx/add.png"){
        fs.readFile("static/gfx/add.png", function (error, data) {        
            res.writeHead(200, { 'Content-Type': 'image/png' });
            res.write(data);
            res.end();
        });
    }
    //fonts loader
    else if(req.url === "/fonts/BebasNeue.otf"){
        fs.readFile("static/fonts/BebasNeue.otf", function (error, data) {        
            res.writeHead(200, { 'Content-Type': 'image/png' });
            res.write(data);
            res.end();
        });
    }
    //other actions 
    else if(req.method === "POST" && req.url === "/login"){
        login(req, res)
    }
    else if(req.method === "POST" && req.url === "/register"){
        register(req, res)
    }
    else if(req.method === "POST" && req.url === "/newtable"){
        fs.readFile("static/index2.html", function (error, data) {        
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        });
    }
})

server.listen(3000);
console.log("server start: localhost:3000")


function login(req,res){
    var allData="";
        req.on("data", function (data) {
            console.log("data: "+ data)
            allData += data;
        })
        req.on("end", function (data) {
            var finish = qs.parse(allData);
            console.log("login: " + finish.login)
            coll.findOne({ login: finish.login }, function (err, doc) {
                console.log(doc)
                
                if(doc.passwd == finish.passwd){
                    res.end("success");
                }else{
                    res.end("unauthorized");
                }
            });     
        }) 
}

function register(req,res){
    var allData="";
        req.on("data", function (data) {
            console.log("data: "+data)
            allData += data;
            console.log(data)
        })
        req.on("end", function (data) {
            var finish = qs.parse(allData);
            console.log(finish.login)
            var doc = {
                login: finish.login,
                passwd: finish.passwd
            }
            coll.count({ a: finish.login }, function (err, count) {
                // zwracam liczbę dokumentów / rekordów gdzie a = "xxx"
                if(count == 0){
                        coll.insert(doc, function (err, newDoc) {
                            console.log("dodano użytkownika: " + newDoc.login + ", o id " + newDoc._id)
                        });
                        finish.response = finish.login;
                        res.end(JSON.stringify(finish.response));
                    }
                });
            });     
        }


