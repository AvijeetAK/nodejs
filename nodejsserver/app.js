const http = require('http');



const server = http.createServer((req,res) => {
    
   // process.exit();

   const url = req.url;

   if(url === '/')
   {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>intro</title></head>')
    res.write('<body>Welcome to my node js project</body>')
    res.write('</html>')
    res.end();

   }
   if(url === '/home')
   {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>homepage</title></head>')
    res.write('<body>Welcome home</body>')
    res.write('</html>')
    res.end();

   }

   if(url === '/about')
   {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>about</title></head>')
    res.write('<body>Welcome to About Page</body>')
    res.write('</html>')
    res.end();

   }

   if(url === '/node')
   {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>homepage</title></head>')
    res.write('<body>Welcome to my node js project</body>')
    res.write('</html>')
    res.end();

   }


});

server.listen(4000);
