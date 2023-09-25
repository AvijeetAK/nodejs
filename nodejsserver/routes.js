
const fs = require('fs');

const requestHandler = (req,res) => {

    const url = req.url;
    const method = req.method;

    if(url === '/')
{
   var datanew = "";

   fs.readFile("message.txt", {encoding : 'utf-8'}, (data, err) =>{

     
      
      console.log('data from file' + data);
      res.write('<html>');
      res.write('<head><title>Enter Message <title><head>');
      res.write(`<body>${datanew}</body>`);
      res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button><form> </body>')
      res.write('</html>');
     
      
    })

    
    
    return res.end();
     


}

if(url === "/message"  &&  method === "POST")
{
   const body = [];
   var redmsg = "";

   req.on("data", (chunk) => {
      body.push(chunk);
   })

   req.on("end" , () => {

      const parseBody = Buffer.concat(body).toString();
      const message = parseBody.split("=")[1];
      fs.writeFileSync("message.txt", message);
      redmsg = message;


   })

   res.setHeader('COntent-Type', 'application/json');
   res.write(redmsg);

   res.statusCode = 302;
   res.setHeader("Location", "/");
   return res.end();
}

 res.setHeader('Content-Type', 'text/html');
 res.write('<html>');
 res.write('<head><title>My First Page</title></head>')
 res.write('<body>Hello from the node.js server</body>')
 res.write('</html>')
 res.end();

}

module.exports = requestHandler;





