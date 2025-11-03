Fastor CRM Backend – Node.js Assignment
📘 Overview

This project is a CRM backend system built with Node.js, Express, and MongoDB.
It allows employees (counselors) to manage public and claimed enquiries from potential clients.

🧠 Features

Employee Register/Login using JWT Authentication

Public enquiry form (accessible without authentication)

Claim leads – once claimed, enquiry becomes private

View Unclaimed Leads (Public) and My Claimed Leads (Private)

Secure API routes using JWT Middleware

🛠️ Tech Stack
Category	Technology
Runtime	Node.js
Framework	Express.js
Database	MongoDB
Auth	JWT (JSON Web Token)
Password Hashing	bcryptjs
Env Management	dotenv
📂 Folder Structure
fastor-crm-backend/
│
├── models/
│   ├── Employee.js
│   └── Enquiry.js
│
├── routes/
│   ├── employeeRoutes.js
│   └── enquiryRoutes.js
│
├── middleware/
│   └── auth.js
│
├── .env
├── server.js
├── package.json
└── README.md

⚙️ Setup Instructions
1️⃣ Clone or create the project

If you haven’t yet:

git clone https://github.com/your-username/fastor-crm-backend.git
cd fastor-crm-backend

2️⃣ Install dependencies
npm install express mongoose dotenv bcryptjs jsonwebtoken


(Optional for auto-restart during development)

npm install --save-dev nodemon

3️⃣ Add environment variables

Create a .env file at the root with:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=fastor_secret_key


💡 Example (MongoDB Atlas):

MONGO_URI=mongodb+srv://username:password@cluster0.mongodb.net/fastor-crm

4️⃣ Start the Server

Development mode:

npx nodemon server.js


Or normal run:

node server.js


If successful, you’ll see:

✅ MongoDB Connected
🚀 Server running on port 5000

🧪 API Endpoints
Action	Method	Endpoint	Auth	Body
Register Employee	POST	/api/employees/register	❌	{ name, email, password }
Login Employee	POST	/api/employees/login	❌	{ email, password }
Submit Enquiry (Public Form)	POST	/api/enquiries/public	❌	{ name, email, courseInterest }
Get Unclaimed Leads	GET	/api/enquiries/public	✅	–
Claim Lead	POST	/api/enquiries/claim/:id	✅	–
Get My Claimed Leads	GET	/api/enquiries/private	✅	–
🔑 Authentication Flow

Register → /api/employees/register

Login → get JWT Token

Add this header to protected routes:

Authorization: Bearer <your_token>

✅ Example JSON Bodies

Register

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "123456"
}


Login

{
  "email": "john@example.com",
  "password": "123456"
}


Submit Enquiry

{
  "name": "Alice",
  "email": "alice@gmail.com",
  "courseInterest": "Full Stack Web Development"
}

🧾 Notes

Only employees can claim or view enquiries.

Clients can submit the public form without logging in.

Once an enquiry is claimed, it becomes private and hidden from other employees.

🧰 Useful Commands
Command	Description
npm run start	Run normally
npx nodemon server.js	Auto restart (dev mode)
node server.js	Manual start
npm install	Reinstall dependencies
🚀 Deployment (Optional)

You can deploy this backend on:

Render → https://render.com

Railway → https://railway.app

Vercel (API Mode) → https://vercel.com

📩 Submission

Provide the following when submitting:

GitHub Repository URL

Deployed API URL (optional, e.g. Render)