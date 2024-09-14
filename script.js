// JavaScript code to manage visibility of sections and mock blog functionality

// Elements selection
const homeLink = document.getElementById('homeLink');
const loginLink = document.getElementById('loginLink');
const signupLink = document.getElementById('signupLink');
const loginSection = document.getElementById('loginSection');
const signupSection = document.getElementById('signupSection');
const blogSection = document.getElementById('blogSection');
const commentSection = document.getElementById('commentSection');

// Navigation logic
homeLink.addEventListener('click', () => showSection('home'));
loginLink.addEventListener('click', () => showSection('login'));
signupLink.addEventListener('click', () => showSection('signup'));

function showSection(section) {
    loginSection.classList.add('hidden');
    signupSection.classList.add('hidden');
    blogSection.classList.remove('hidden');
    commentSection.classList.add('hidden');

    if (section === 'login') {
        loginSection.classList.remove('hidden');
    } else if (section === 'signup') {
        signupSection.classList.remove('hidden');
    }
}

// Mock data for posts and comments
const postsContainer = document.getElementById('postsContainer');
const mockPosts = [
    { id: 1, title: "First Post", content: "This is the content of the first post." },
    { id: 2, title: "Second Post", content: "This is the content of the second post." },
];

function renderPosts() {
    postsContainer.innerHTML = '';
    mockPosts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'post';
        postElement.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.content}</p>
            <button onclick="showComments(${post.id})">View Comments</button>
        `;
        postsContainer.appendChild(postElement);
    });
}

function showComments(postId) {
    commentSection.classList.remove('hidden');
    // Implement comment loading here if needed
}

renderPosts();