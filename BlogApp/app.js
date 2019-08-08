var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose");
var methodOverride = require("method-override");
var expressSanitizer = require("express-sanitizer");

//APP CONFIG
mongoose.connect("mongodb://localhost/blog_app", { useNewUrlParser: true, useFindAndModify: false });
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer());
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));
app.use(methodOverride("_method"));

//MONGOOSE MODEL CONFIG
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
});

var Blog = mongoose.model("Blog", blogSchema);


// Blog.create({
//     title: "This is a new blog",
//     image: "https://farm8.staticflickr.com/7922/46716402612_1aa149aaa6.jpg",
//     body: "This is the body, a lot of things go there like all the details and the stuff"
// }, function(err, blog){
// 	if (err){
// 		console.log("Error creating a blog");
// 		console.log(err);
// 	} else {
// 		console.log("blog created:");
// 		console.log(blog);
// 	}
// });

//REST ROUTES
app.get("/", function(req, res){
    res.redirect("/blogs");
});

//INDEX route
app.get("/blogs", function(req, res){
    Blog.find({}, function(err, blogs){
        if (err){
            console.log(err);
        } else {
            res.render("index", {blogs:blogs});
        }
    });
});


//NEW route
app.get("/blogs/new", function(req, res){
        res.render("new");
});

//CREATE route
app.post("/blogs", function(req, res){
    //create the object
    req.body.blog.body= req.sanitize(req.body.blog.body);
    Blog.create(req.body.blog, function(err, blog){
        if (err){
            console.log("Error");
            res.redirect("/blogs/new");
        } else {
            //redirect
            res.redirect("/blogs");
        }
    });
});

//SHOW route
app.get("/blogs/:id", function(req, res){
    Blog.findById(req.params.id, function(err, foundBlog){
        if(err){
            console.log(err);
        } else {
            res.render("show", {blog:foundBlog});
        }
    });
});

//EDIT route
app.get("/blogs/:id/edit", function(req, res){
    Blog.findById(req.params.id, function(err, foundBlog){
        if(err){
            console.log(err);
        } else {
            res.render("edit", {blog:foundBlog});
        }
    });
});

//UPDATE route
app.put("/blogs/:id", function(req, res){
    req.body.blog.body= req.sanitize(req.body.blog.body);
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog){
        if (err) {
            res.redirect("/blogs");
        } else {
            res.redirect("/blogs/" + req.params.id);
        }
    });
});

//DELETE route
app.delete("/blogs/:id", function(req, res){
    Blog.findByIdAndRemove(req.params.id, function(err){
        if (err) {
            res.redirect("/blogs");
        } else {
            res.redirect("/blogs");
        }
    });
});


app.listen(process.env.PORT, process.env.IP, function(){
	console.log("Server started!");
});