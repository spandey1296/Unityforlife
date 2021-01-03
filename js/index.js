const express = require("express"); //express module
const path = require("path");
const app = express(); //app using express
const port = 8000;
const staticPath = path.join(__dirname, "index.html");
app.use(express.static(staticPath));
app.get("/",(req,res) =>
{
    res.send("Hello express !");
});
app.listen(port,()=>
{
    console.log(`listening to the port ${8000}`);
});