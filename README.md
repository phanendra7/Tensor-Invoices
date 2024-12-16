# Invoice Reminder & Follow-Up Automation
![image](https://github.com/user-attachments/assets/b8a22197-d14f-4c9c-878a-c353498a0cdf)

## Requirements:
- Node.js (backend)
- npm 
- React (frontend)
- Google OAuth credentials
- MongoDB instance
- Zapier account


## Setup Instructions:

### 1. Clone the repository:
Create an empty folder and clone this repository
Open terminal:
git clone https://github.com/phanendra7/Tensor-Invoices.git


### Backend:
1. cd backend
2. Install dependencies: `npm install`.
3. Set up `.env` file with your Google OAuth credentials, MongoDB credentials and zepiar webhook link.

GOOGLE_CLIENT_ID=your-google-client-id  
GOOGLE_CLIENT_SECRET=your-google-client-secret  
GOOGLE_REDIRECT_URI=http://localhost:8080/auth/google/callback  
MONGO_URI=mongodb://your-mongodb-connection-string  
SESSION_SECRET=your-session-secret  
ZAPIER_WEBHOOK_URL=your-zapier-webhook-url  


5. Run the backend: `node server.js`.
The backend will run on http://localhost:8080

### Frontend:
1. cd frontend
2. Install dependencies: `npm install`.
3. Run the frontend: `npm start`.
The frontend will run on http://localhost:3000

## Features:
- Google OAuth Login: Users can log in with their Google account to access invoice data.
- View Due Invoices: Once logged in, users can view their overdue invoices.
- Zapier Integration: Users can trigger automation for invoice reminders and follow-ups via Zapier.
