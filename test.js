var http = require('http');
var url=require('url');
var fs= require('fs');
const PORT= process.env.PORT || 5000

http.createServer(function (req,res){
    var q =url.parse(req.url,true);
    //console.log(q.pathname);

    var filename= "."+q.pathname
    console.log(filename);
    if (filename=='./'){
    	filename='./index';
    }
    filename=filename+".html";
	fs.readFile(filename,function(err,data) {
		if (err) {
			res.writeHead(404,{'Content-Type':'text/html'});
	        return res.end("404 Not Found");     
		}

		res.writeHead(200,{'Content-Type':'text/html'});
    //var q=url.parse(req.url,true).query;
    //var dates=q.year + q.month;
        console.log("incoming request from "+req.url);
        res.write(data);
        return res.end(); 

	})
    
}).listen(PORT);

console.log("server listening on port 8080....")

