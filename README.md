# Invoice Reminder & Follow-Up Automation

## Requirements:
- Node.js (backend)
- npm 
- React (frontend)
- Google OAuth credentials
- Zapier account

## Setup:
Create an empty folder and clone these folders

### Backend:
1. Clone the repo and navigate to the `backend/` folder.
2. Install dependencies: `npm install`.
3. Set up `.env` file with your Google OAuth credentials, MongoDB credentials and zepiar webhook link.
4. Run the backend: `node server.js`.

### Frontend:
1. Clone the repo and navigate to the `frontend/` folder.
2. Install dependencies: `npm install`.
3. Set up `.env` file with the backend API URL.
4. Run the frontend: `npm start`.

## Features:
- User login with Google OAuth.
- View due invoices.
- Trigger Zapier-based invoice reminders and follow-ups.
