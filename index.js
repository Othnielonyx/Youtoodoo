import express from "express";
import bodyParser from "body-parser";


const app = express();
const port = 3000;
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true}));


let newItems = []
let newTasks = []
app.get("/", (req, res) => {
    res.render("index.ejs", { newListItems: newItems });
});

app.get("/work", (req, res) => {
    res.render("work.ejs", { newListTasks: newTasks });
});

app.post("/submit", (req, res) => {
    let newItem = req.body.newItem;
    newItems.push(newItem);
    res.redirect("/"); 
});
app.post("/work", (req, res) => {
    let newTask = req.body.newTask;
    newTasks.push(newTask);
    res.redirect("/work"); 
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });