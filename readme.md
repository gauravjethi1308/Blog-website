![Alt Text]()



Blog Application


This is a full-featured blog application built using Node.js, Express.js, EJS, JWT, and MongoDB. It allows users to sign up, log in, create, read, and comment on blog posts.​

Features
User Authentication: Users can register and log in securely using JSON Web Tokens (JWT).​

Create and Read Blogs: Authenticated users can create new blog posts and view existing ones.​

Commenting: Users can add comments to blog posts.​

Technologies Used
Node.js: JavaScript runtime for server-side development.​

Express.js: Web application framework for Node.js.​

EJS: Templating engine for generating HTML markup with plain JavaScript.​
DEV Community

MongoDB: NoSQL database for data storage.​
GitHub

JWT (JSON Web Tokens): For secure user authentication
Installation
Clone the Repository:

git clone https://github.com/your-username/your-repository.git
Navigate to the Project Directory:

cd your-repository
Install Dependencies:

npm install
Set Up Environment Variables:

Create a .env file in the root directory and add the following:

PORT=1000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
Replace your_mongodb_connection_string with your MongoDB connection string.​

Replace your_jwt_secret with a secret key for JWT.​

Start the Application:

npm start
Access the Application:

Open your browser and navigate to http://localhost:3000.

Usage
Sign Up: Create a new account by providing a username and password.​
GitHub

Log In: Access your account using your credentials.​

Create Blog Post: After logging in, navigate to the "New Post" section to create a blog.​

Read Blog Posts: View all blogs on the homepage.​
GitHub

Comment on Posts: Add comments to individual blog posts.​

Contributing
Contributions are welcome! Please fork the repository and submit a pull request with your changes

Note: Ensure that you have Node.js and MongoDB installed on your system before running the application.
