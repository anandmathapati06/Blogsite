﻿
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Blogify - README</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 0;
      padding: 0 20px;
      background-color: #f4f4f9;
      color: #333;
    }
    h1, h2, h3 {
      color: #2c3e50;
    }
    h1 {
      text-align: center;
      margin-top: 20px;
    }
    ul {
      margin-left: 20px;
    }
    pre {
      background: #eee;
      padding: 10px;
      border-radius: 5px;
      overflow-x: auto;
    }
    code {
      font-family: monospace;
      background: #f9f9f9;
      padding: 2px 5px;
      border-radius: 3px;
    }
    a {
      color: #3498db;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <h1>Blogify - A Modern Blog Platform</h1>

  <h2>Table of Contents</h2>
  <ul>
    <li><a href="#features">Features</a></li>
    <li><a href="#technologies-used">Technologies Used</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#project-structure">Project Structure</a></li>
    <li><a href="#available-scripts">Available Scripts</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
  </ul>

  <h2 id="features">Features</h2>
  <ul>
    <li>User Authentication: Secure sign-up and login with JWT.</li>
    <li>CRUD Operations: Users can create, edit, and delete blog posts.</li>
    <li>Responsive Design: Fully optimized for mobile and desktop.</li>
    <li>Fast and Lightweight: Built using Vite for a snappy development experience.</li>
    <li>Rich Text Editing: Integrated WYSIWYG editor for formatting blog content.</li>
    <li>Comment System: Allows users to comment on blog posts.</li>
    <li>Search and Filter: Search for blogs by title or tags.</li>
  </ul>

  <h2 id="technologies-used">Technologies Used</h2>
  <h3>Frontend:</h3>
  <ul>
    <li>React</li>
    <li>Vite</li>
    <li>Tailwind CSS</li>
    <li>React Router DOM</li>
    <li>Axios</li>
  </ul>
  <h3>Backend:</h3>
  <ul>
    <li>Node.js</li>
    <li>Express.js</li>
    <li>MongoDB (Mongoose)</li>
  </ul>
  <h3>Other Tools:</h3>
  <ul>
    <li>JSON Web Token (JWT) for authentication</li>
    <li>Bcrypt.js for secure password hashing</li>
  </ul>

  <h2 id="getting-started">Getting Started</h2>
  <h3>Prerequisites</h3>
  <ul>
    <li>Node.js</li>
    <li>npm or yarn</li>
    <li>MongoDB</li>
  </ul>

  <h3>Installation</h3>
  <ol>
    <li>Clone the repository:
      <pre><code>git clone https://github.com/yourusername/blogify.git
cd blogify</code></pre>
    </li>
    <li>Install dependencies:
      <ul>
        <li>Frontend:
          <pre><code>cd client
npm install</code></pre>
        </li>
        <li>Backend:
          <pre><code>cd server
npm install</code></pre>
        </li>
      </ul>
    </li>
    <li>Set up environment variables:
      <pre><code>.env
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret</code></pre>
    </li>
    <li>Start the development servers:
      <ul>
        <li>Backend:
          <pre><code>npm run dev</code></pre>
        </li>
        <li>Frontend:
          <pre><code>npm run dev</code></pre>
        </li>
      </ul>
    </li>
    <li>Visit the app at <code>http://localhost:5173</code>.</li>
  </ol>

  <h2 id="project-structure">Project Structure</h2>
  <pre><code>blogify/
├── client/       # Frontend code
├── server/       # Backend code
├── .gitignore
├── README.md
└── package.json</code></pre>

  <h2 id="available-scripts">Available Scripts</h2>
  <h3>Frontend</h3>
  <ul>
    <li><code>npm run dev</code>: Starts the frontend in development mode.</li>
    <li><code>npm run build</code>: Builds the frontend for production.</li>
    <li><code>npm run preview</code>: Previews the production build.</li>
  </ul>
  <h3>Backend</h3>
  <ul>
    <li><code>npm run dev</code>: Starts the backend in development mode.</li>
    <li><code>npm run start</code>: Starts the backend in production mode.</li>
  </ul>

  <h2 id="contributing">Contributing</h2>
  <ol>
    <li>Fork the repository.</li>
    <li>Create a feature branch (<code>git checkout -b feature-name</code>).</li>
    <li>Commit your changes (<code>git commit -m 'Add feature'</code>).</li>
    <li>Push to the branch (<code>git push origin feature-name</code>).</li>
    <li>Create a pull request.</li>
  </ol>

  <h2 id="license">License</h2>
  <p>This project is licensed under the MIT License. See the <code>LICENSE</code> file for details.</p>

  <p><strong>Happy Blogging!</strong></p>
</body>
</html>

