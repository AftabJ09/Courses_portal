/* nav bar link options */

let homelink =document.getElementById("homelink");
let aboutlink =document.getElementById("aboutlink");
let contactlink =document.getElementById("contactlink");
let signuplink =document.getElementById("signuplink");
let loginlink =document.getElementById("loginlink");
let adminlink =document.getElementById("adminlink");
let backlink=document.getElementById("backlink");
let footer =document.getElementById("footer");


//const login1 = document.querySelector("signin1");
//const login2 = document.querySelector("signin2");


/* mainframe activities */
var mainframe=document.getElementById('mainframe');
var mainframe1=document.getElementById('mainframe1');
var adminpage=document.getElementById('adminpage')
var introduction=document.getElementById("introduction");
var login =document.getElementById("login");
var account=document.getElementById("account");
var adminlogin=document.getElementById("adminlogin");
var blog=document.getElementById("blog");
var userpage=document.getElementById("userpage");
var aboutus=document.getElementById("aboutus");
var contactus=document.getElementById("contactus");
var coursechoice=document.getElementById("coursechoice");
var coursecontent=document.getElementById("course");

/*nav bar functions */

homelink.addEventListener('click',gohome)
aboutlink.addEventListener('click',goabout)
contactlink.addEventListener('click',gocontact)
signuplink.addEventListener('click',gosignup)
loginlink.addEventListener('click',gologin)
adminlink.addEventListener('click',goadmin)


/*login2 button function*/

function copyEmailAddress(email) {
    navigator.clipboard.writeText(email)
        .then(() => alert('Email address copied to clipboard: ' + email))
        .catch(err => console.error('Failed to copy email address: ', err));
}




function gohome(){
    mainframe.style.display="block";
    mainframe1.style.display="none";
    adminpage.style.display="none";
    introduction.style.display="block";
    account.style.display="none";
    login.style.display="none";
    blog.style.display="none";
    backlink.style.display="none";

    homelink.style.display="block";
    adminlink.style.display="block";
    loginlink.style.display='block';
    signuplink.style.display="block";
    aboutlink.style.display="block";
    contactlink.style.display="block";
}
function goabout(){
    aboutus.style.display="block";
    contactus.style.display="none";
    mainframe.style.display="none";
    mainframe1.style.display="block";
    homelink.style.display="block";
    adminlink.style.display="block";
    loginlink.style.display='block';
    signuplink.style.display="block";
    aboutlink.style.display="none";
    contactlink.style.display="block";
    backlink.style.display="none";
    adminpage.style.display="none";
    introduction.style.display="none";
    account.style.display="none";
    login.style.display="none";
    blog.style.display="none";


}
function gocontact(){
    mainframe.style.display="none";
    aboutus.style.display="none";
    contactus.style.display="block";
    mainframe1.style.display="block";
    homelink.style.display="block";
    adminlink.style.display="block";
    loginlink.style.display='block';
    signuplink.style.display="block";
    aboutlink.style.display="block";
    contactlink.style.display="none";
    backlink.style.display="none";
    adminpage.style.display="none";
    introduction.style.display="none";
    account.style.display="none";
    login.style.display="none";
    blog.style.display="none";
}
function gosignup(){
    mainframe1.style.display="none";
    mainframe.style.display="block";
    adminpage.style.display="none";
    account.style.display="block";
    introduction.style.display="none";
    login.style.display="none";
    userpage.style.display="none";

    backlink.style.display="none";
    homelink.style.display="block";
    adminlink.style.display="block";
    loginlink.style.display='block';
    signuplink.style.display="none";
    aboutlink.style.display="block";
    contactlink.style.display="block";
    
    
}
function gologin(){
    mainframe1.style.display="none";
    mainframe.style.display="block";
    adminpage.style.display="none";
    account.style.display="none";
    introduction.style.display="none";
    login.style.display="block";
    userpage.style.display="none";
    backlink.style.display="none";
    
    homelink.style.display="block";
    adminlink.style.display="block";
    loginlink.style.display='none';
    signuplink.style.display="block";
    aboutlink.style.display="block";
    contactlink.style.display="block";
}
function goadmin(){
    mainframe1.style.display="none";
    mainframe.style.display = "none";
    adminpage.style.display="block";
    adminlogin.style.display="block";
    blog.style.display="none";
    footer.style.display="none"
    adminpage.style.height="100%";
    userpage.style.display="none";
    backlink.style.display="none";

    homelink.style.display="block";
    adminlink.style.display="none";
    loginlink.style.display='block';
    signuplink.style.display="block";
    aboutlink.style.display="block";
    contactlink.style.display="block";
    footer.style.display="block";
    
}

function adminlog(){
    loginlink.style.display='block';
    mainframe1.style.display="none";
    mainframe.style.display="none";
    adminpage.style.display="block";
    adminlogin.style.display="none";
    blog.style.display="block";
    userpage.style.display="none";
    loginlink.textContent ="Logout"
    adminlink.style.display="none";
    aboutlink.style.display="none";
    contactlink.style.display="none";
    signuplink.style.display="none";
    homelink.style.display="none";
    loginlink.onclick = logout;
    backlink.style.display="none";
}
function userp(){
    homelink.style.display="none";
    contactlink.style.display="none";
    loginlink.style.display='block';
    mainframe1.style.display="none";
    mainframe.style.display="none";
    adminpage.style.display="none";
    adminlogin.style.display="none";
    blog.style.display="none";
    aboutlink.style.display="none";
    backlink.style.display="block";
    userpage.style.display="block";
    createButtons();
    loginlink.textContent ="Logout"
    adminlink.style.display="none";
    loginlink.onclick = logout;
    signuplink.style.display="none";
   
    

    
}
function logout() {
   
    loginlink.textContent = "Login";
    sessionStorage.removeItem('accessToken');
    localStorage.removeItem('userCredentials');
    
    
    window.location.reload();
}




async function register(event) {
    event.preventDefault();
    const email = document.getElementById('signinput1').value;
    const password = document.getElementById('signinput2').value;

    try {
        const response = await fetch('https://courses-portal-2bw0.onrender.com/api/reg', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        if (response.ok) {
            
           // Displaying the success message from the server
            // Optionally reset form fields after successful registration
            location.reload();
        } else {
            const errorData = await response.json();
            alert(errorData.error || 'Error in creating account. Please try again!');
        }
    } catch (error) {
        console.error('Fetch error:', error);
        alert('Error in making request. Please try again later.');
    }
}


document.getElementById('signup').addEventListener('click', register);




function validateEmail() {
    const email = document.getElementById('loginput1').value;
    const emailError = document.getElementById('emailError');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        emailError.style.display = 'block';
    } else {
        emailError.style.display = 'none';
    }
}

function validatePassword() {
    const password = document.getElementById('loginput2').value;
    const passwordError = document.getElementById('passwordError');

    if (password.length === 0) {
        passwordError.style.display = 'block';
    } else {
        passwordError.style.display = 'none';
    }
}

function Login() {
    validateEmail();
    validatePassword();
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    
    if (emailError.style.display === 'none' && passwordError.style.display === 'none') {
        const email = document.getElementById('loginput1').value;
        const password = document.getElementById('loginput2').value;

        // Perform login operation
        fetch('https://courses-portal-2bw0.onrender.com/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        .then(response => {
            if (response.ok) {
        
                userp();
                
            } else {
                return response.json().then(data => {
                    throw new Error(data.error || 'Login failed');
                });
            }
        })
        .catch(error => {
            console.error('Login error:', error);
            alert('Error in logging in. Please try again.');
        });
    }
}




function validateEmailadmin() {
    const email = document.getElementById('addinput1').value;
    const emailError = document.getElementById('emailError');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        emailError.style.display = 'block';
    } else {
        emailError.style.display = 'none';
    }
}

function validatePasswordadmin() {
    const password = document.getElementById('addinput2').value;
    const passwordError = document.getElementById('passwordError');

    if (password.length === 0) {
        passwordError.style.display = 'block';
    } else {
        passwordError.style.display = 'none';
    }
}

function creater() {
    validateEmailadmin();
    validatePasswordadmin();
    const emailError = document.getElementById('emailErroradmin');
    const passwordError = document.getElementById('passwordErroradmin');
    
    if (emailError.style.display === 'none' && passwordError.style.display === 'none') {
        const email = document.getElementById('addinput1').value;
        const password = document.getElementById('addinput2').value;
        const code = document.getElementById('addinput3').value;

        // Perform login operation
        fetch('http://localhost:4000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        .then(response => {
            if (response.ok && code =="ajss") {
        
                adminlog();
                
            } else {
                return response.json().then(data => {
                    throw new Error(data.error || 'Login failed');
                });
            }
        })
        .catch(error => {
            console.error('Login error:', error);
            alert('Error in logging in. Please try again.');
        });
    }
}


document.getElementById("signin2").addEventListener("click", creater);






















function openBlogFormModal() {
    document.getElementById('modalTitle').textContent = 'Create Blog Post';
    document.getElementById('blogForm').reset();
    document.getElementById('components').innerHTML = '';
    document.getElementById('previewContent').innerHTML = '';
    document.getElementById('postId').value = '';
    document.getElementById('blogFormModal').style.display = 'block';
    

}

function previewBlog() {
    const formData = new FormData(document.getElementById('blogForm'));
    const previewContent = document.getElementById('previewContent');
    previewContent.innerHTML = `
        <h2>${formData.get('title')}</h2>
        <iframe width="560" height="315" src="${formData.get('vediourl')}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <p>${formData.get('text')}</P>
        ${Array.from(document.querySelectorAll('[name="componentHTML"]')).map(component => {
            const type = component.dataset.type;
            const value = type === 'text' || type === 'subtitle' ? component.value : URL.createObjectURL(component.files[0]);
            switch(type) {
                case 'subtitle':
                    return `<h3>${value}</h3>`;
                case 'text':
                    return `<p>${value}</p>`;
                case 'vediourl':
                    return `${value}`;
               /* case 'image':
                    return `<img src="${value}" alt="Blog Image">`;
                case 'video':
                    return `<video src="${value}" controls></video">`;
                    */
            }
        }).join('')}
    `;
    
    
}

function addComponent(type) {
    const componentsDiv = document.getElementById('components');
    let componentHTML = '';
    switch(type) {
        /*
        case 'subtitle':
            componentHTML = '<input type="text" name="subtitle" placeholder="Subtitle">';
            break;
            */
        case 'text':
            componentHTML = '<textarea name="text" placeholder="Text"></textarea>';
            break;
        case 'youtubevedio':
            componentHTML = '<textarea name="vediourl" placeholder="Vediourl"></textarea>';
            break;            
        case 'image':
            componentHTML = '<input type="file" name="image">';
            break;
        case 'video':
            componentHTML = '<input type="file" name="video">';
            break;
    }
    const div = document.createElement('div');
    div.classList.add('component'); 
     div.innerHTML = `
    ${componentHTML}
    <button type="button" onclick="removeComponent(this)">Remove</button>`;
    div.innerHTML = componentHTML;
    componentsDiv.appendChild(div);
}





function removeComponent(button) {
button.parentElement.remove();
}



function updatePreviewSectionHeight() {
    var previewContentHeight = document.getElementById('previewContent').scrollHeight;
    document.getElementById('previewSection').style.height = previewContentHeight + 'px';
}

async function submitBlog() {
    const form = document.getElementById('blogForm');
    const formData = new FormData(form);
    
    
    const response = await fetch('http://localhost:4000/api/upload', {
        method: 'POST',
        body: formData
    });

    if (response.ok) {
        alert('Blog post created successfully');

    } else {
        alert('Error creating blog post');
        alert(form[2]);
    }
}


document.addEventListener('click', event => {
    if (event.target === document.getElementById('blogFormModal')) {
        document.getElementById('blogFormModal').style.display = 'none';
    }
});

document.addEventListener('click', event => {
    if (event.target.classList.contains('close')) {
        document.getElementById('blogFormModal').style.display = 'none';
    }
});


async function fetchTitles() {
    try {
        const response = await fetch('/api/course/title');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}

async function fetchBlogByTitle(title) {
    try {
        const response = await fetch(`/api/course/${title}`);
        if (!response.ok) {
            throw new Error('Failed to fetch blog data');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching blog data:', error);
        return null;
    }
}

async function createButtons() {
    try {
        const titles = await fetchTitles();
        const container = document.getElementById('coursechoice');
        if (!container) {
            console.error('Container element not found');
            return;
        }

        container.innerHTML = ''; // Clear existing buttons

        titles.forEach(blog => {
            const button = document.createElement('button');
            button.textContent = blog.title;
            button.style.margin = '5px';
            button.style.padding = '10px';
            button.style.backgroundColor = '#126100';
            button.style.color = 'white';
            button.style.borderRadius = '8px'; 
            button.style.border = 'none'; 

            button.addEventListener('click', () => displayBlogDetails(blog.title));
            container.appendChild(button);
        });
    } catch (error) {
        console.error('Error creating buttons:', error);
    }
}
/*
var choosecourse=document.getElementById("coursechoice");
var courselist=document.getElementById("courselist");
var courseback=document.getElementById("course");
*/
async function displayBlogDetails(title) {
    coursechoice.style.display = "none";
    coursecontent.style.display = "block";
    
    try {
        

        const blog = await fetchBlogByTitle(title);
        if (!blog) {
            console.error('Blog not found');
            return;
        }

        const blogDetailsContainer = document.getElementById('course');
        blogDetailsContainer.innerHTML = '';

        const titleElement = document.createElement('h2');
        titleElement.textContent = blog.title;
        blogDetailsContainer.appendChild(titleElement);
        
        if (blog.url) {
           
            const videoId = extractYouTubeID(blog.url);
            if (videoId) {
                const iframe = document.createElement('iframe');
                iframe.src = `https://www.youtube.com/embed/${videoId}`;
                iframe.width = '560';
                iframe.height = '315';
              
                iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
                iframe.allowFullscreen = true;
                blogDetailsContainer.appendChild(iframe);
            }
        }
        

     
        const textElement = document.createElement('p');
        textElement.innerHTML = blog.text;
        blogDetailsContainer.appendChild(textElement);
      
        
        if (Array.isArray(blog.content) && blog.content.length > 0) {
            blog.content.forEach(component => {
                if (component.type === 'image') {
                    const imageElement = document.createElement('img');
                    imageElement.src = `data:image/jpeg;base64,${component.value}`;
                    imageElement.alt = 'Blog Image';
                    imageElement.classList.add('blog-content');
                    console.log(`Image src: ${imageElement.src}`); // Log the image src
                    blogDetailsContainer.appendChild(imageElement);
                } else if (component.type === 'video') {
                    const videoElement = document.createElement('video');
                    const sourceElement = document.createElement('source');
                    sourceElement.src = `data:video/mp4;base64,${component.value}`;
                    sourceElement.type = 'video/mp4';
                    videoElement.appendChild(sourceElement);
                    videoElement.controls = true;
                    videoElement.classList.add('blog-content');
                    console.log(`Video src: ${sourceElement.src}`);
                    blogDetailsContainer.appendChild(videoElement);
                    
                }
            });
        } else {
            const errorElement = document.createElement('p');
            errorElement.textContent = 'No content available';
            blogDetailsContainer.appendChild(errorElement);
        }
    } catch (error) {
        console.error('Error displaying blog details:', error);
    }
}
backlink.addEventListener('click', () => {
    // Toggle display of course content and course choice
    if (coursecontent.style.display === "none") {
        coursecontent.style.display = "block";
        coursechoice.style.display = "none";
    } else {
        coursecontent.style.display = "none";
        coursechoice.style.display = "block";
        createButtons(); // Recreate buttons when showing course choice
    }
});
/*
backlink.addEventListener('click',choosethecourse)

async function choosethecourse() {
    try {
        // Hide coursecontent or other elements
        coursecontent.style.display = "none";

        // Fetch necessary data
        await fetchTitles();
        const blog = await fetchBlogByTitle(); // Assuming you pass a title parameter here

        // Create necessary buttons or elements
        createButtons(); // Ensure this function creates buttons as needed

        // Display coursechoice or other elements
        coursechoice.style.display = "block";
    } catch (error) {
        console.error('Error in choosethecourse:', error);
    }
}


*/
function extractYouTubeID(url) {
    const match = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
    return match && match[1];
}
