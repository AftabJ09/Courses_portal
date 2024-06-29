const ComponentSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
        enum: ['subtitle', 'text', 'image', 'video']
    },
    value: {
        type: mongoose.Schema.Types.Buffer,
        required: true
    }
});

// Blog post schema
const BlogPostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: [ComponentSchema],
    createdAt: {
        type: Date,
        default: Date.now
    }
});




async function submitBlog() {
    try {
        const title = document.getElementById('title').value;
        const subtitle = document.getElementById('subtitle').value;
        const text = document.getElementById('text').value;
        const imageFileInput = document.getElementById('imageFile');
        const videoFileInput = document.getElementById('videoFile');

        // Validate file inputs
        if (!imageFileInput || !videoFileInput) {
            throw new Error('File inputs not found.');
        }

        // Retrieve files
        const imageFile = imageFileInput.files[0];
        const videoFile = videoFileInput.files[0];

        // Validate presence of files
        if (!imageFile || !videoFile) {
            alert('Image file or video file is missing.');
            return;
        }

        const formData = new FormData();
        formData.append('title', title);
        formData.append('subtitle', subtitle);
        formData.append('text', text);
        formData.append('image', imageFile);
        formData.append('video', videoFile);

        const response = await fetch('http://localhost:5000/api/blogs', {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            const data = await response.json();
            alert('Blog post created successfully');
            console.log("Created blog post:", data);
        } else {
            throw new Error('Failed to create blog post');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error creating blog post', error.message);
    }
}

app.post('/api/blogs', upload.fields([{ name: 'image', maxCount: 1 }, { name: 'video', maxCount: 1 }]), async (req, res) => {
    try {
        const { title, content } = req.body;
        const imageFile = req.files['image'] ? req.files['image'][0].path : null;
        const videoFile = req.files['video'] ? req.files['video'][0].path : null;
        
        const newBlogPost = new BlogPost({ title, content, image: imageFile, video: videoFile });
        
        await newBlogPost.save();
        
        res.status(201).json({ message: 'Blog post created successfully', blogPost: newBlogPost });
    } catch (error) {
        console.error('Error creating blog post:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});