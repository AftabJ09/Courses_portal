const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const BlogPost = require('./models/BlogPost');
const User = require('./models/User');
const fs = require("fs");
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb+srv://aftab50100:DEpdzqG03xTiZO9f@coursedb1.lnjeep1.mongodb.net/coursecollection?retryWrites=true&w=majority&appName=courseDb1')
    .then(() => {
        console.log("connected to database");
        app.listen(4000, () => {
            console.log("server is running on port 4000");
        });
    })
    .catch((err) => {
        console.log("not connected to database", err.message);
    });

// Create uploads directory if it doesn't exist
 /*const uploadDir = './uploads';
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}
    */

// Set up Multer for file uploads
const storage = multer.memoryStorage(); // Using memory storage to get file buffer directly
const upload = multer({ storage: storage });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));



// Serve the HTML form
app.get('/', (req, res) => {
    res.render(path.join(__dirname, 'public', 'index.html'));
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/*

app.post('/api/upload', upload.fields([
    { name: 'title' },
    { name: 'text' },
    {name:'vediourl'},
    { name: 'image' },
    { name: 'video' }
]), async (req, res) => {
    try {
        const { title } = req.body;
        const {text}  =req.body;
        const {url} =req.body;
        const components = [];

        for (const [key, value] of Object.entries(req.files)) {
            value.forEach(file => {
                components.push({
                    type: key,
                    value: file.buffer
                });
            });
        }

        const blogPost = new BlogPost({
            title,text,url,
            content: components
        });

        await blogPost.save();
        res.status(201).send('Blog post created successfully');
        alert(url);
    } catch (error) {
        res.status(500).send('Error creating blog post');
        alert(url);
    }
});

*/


// POST endpoint for user registration
app.post('/api/reg', async (req, res) => {
    try {
        const { email, password } = req.body;


        // Check if email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'Email already exists' });
        }

        // Create a new user instance
        const newUser = new User({ email, password });

        // Save the new user to the database
        await newUser.save();

        // Respond with success message
        return res.status(201).json({ message: 'Account created successfully' });
    } catch (error) {
        console.error('Error creating user:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }

});



app.post('/api/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find the user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }

        // Check if the password matches
        if (user.password !== password) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }

        // Login successful
        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});










app.post('/api/upload', upload.fields([
    { name: 'title' },
    { name: 'text' },
    { name: 'vediourl' }, // Ensure this matches the field name in FormData from frontend
    { name: 'image' },
    { name: 'video' }
]), async (req, res) => {
    try {
        const { title, text, vediourl } = req.body; // Ensure this matches field names in FormData
        const components = [];

        for (const [key, value] of Object.entries(req.files)) {
            value.forEach(file => {
                components.push({
                    type: key,
                    value: file.buffer
                });
            });
        }

        const blogPost = new BlogPost({
            title,
            text,
            url: vediourl, // Ensure this matches the field name in your schema
            content: components
        });

        await blogPost.save();
        res.status(201).send('Blog post created successfully');
    } catch (error) {
        console.error('Error creating blog post:', error);
        res.status(500).send(error.message); // Send the error message for debugging
    }
});


app.get('/api/course/title', async (req, res) => {
    try {
        const titles = await BlogPost.find({}, 'title'); // Fetch only titles
        res.status(200).json(titles);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


app.get('/api/course/:title', async (req, res) => {
    try {
        const title = req.params.title;
        const blog = await BlogPost.findOne({ title: title });
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        res.status(200).json(blog);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});





