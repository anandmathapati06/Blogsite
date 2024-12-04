
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
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
    
  </ul>

  <h2 id="features">Features</h2>
  <ul>
    <li>Responsive Design: Fully optimized for mobile and desktop.</li>
    <li>Fast and Lightweight: Built using Vite for a snappy development experience.</li>
    
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
cd blogsite</code></pre>
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
PORT=8000
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
    <li><code>npm run dev</code>: Starts the backend in production mode.</li>
  </ul>

  <h2 id="contributing">Contributing</h2>
  <ol>
    <li>Fork the repository.</li>
    <li>Create a feature branch (<code>git checkout -b feature-name</code>).</li>
    <li>Commit your changes (<code>git commit -m 'Add feature'</code>).</li>
    <li>Push to the branch (<code>git push origin feature-name</code>).</li>
    <li>Create a pull request.</li>
  </ol>

 

  <p><strong>Happy Blogging!</strong></p>
</body>
</html>

