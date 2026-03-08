const express = require("express");
const app = express();
const path = require("path");
const { v4 : uuidv4 } = require("uuid");
var methodOverride = require('method-override')
const port = 8080;
app.use(methodOverride('_method'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

let posts = [
  { id: uuidv4(), username: "Complete Physics Assignment", caption: "08:00" },
 
];
// we have made a  comment here
app.get("/posts", (req, res) => {
  res.render("home.ejs", { posts });
});

app.get("/posts/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/posts", (req, res) => {
  let { username, caption } = req.body;
  let id = uuidv4();

  posts.push({ id,username, caption });
  res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => p.id === id);
 
  res.render("show.ejs",{post});
});

app.patch("/posts/:id",(req,res)=>{
    let {id} = req.params;
     let post = posts.find((p) => p.id === id);
    let newcont = req.body.caption;

    post.caption = newcont;
    console.log(post);
   res.redirect("/posts");
})

app.get("/posts/:id/edit",(req,res)=>{
     let {id} = req.params;
     let post = posts.find((p) => p.id === id);
     res.render("edit.ejs",{post});
     
    
})
app.get("/posts/:id/delete", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => p.id === id);
  posts = posts.filter(p => p.id !== id);
  res.redirect('/posts');
 
});

app.listen(port, () => {
  console.log(`app is listening to ${port}`);
});