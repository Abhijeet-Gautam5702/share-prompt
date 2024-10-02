# Share Prompts

A full-stack Next-JS application to create and share AI-prompts.

## Installation

- Clone the repository

```bash
git clone https://github.com/Abhijeet-Gautam5702/share-prompt.git
```

- Install all dependencies

```bash
npm install
```

- **GOOGLE AUTHENTICATION:**  

  - Go to [Google Cloud Console](https://console.cloud.google.com/), and create a new project.

  - Set up a new web client and go to its credentials panel.

  - Set the Authorized JavaScript Origins & Authorized Redirect URIs to `http://localhost:3000` (Next-JS default Port is 3000).

  - Copy the Client-ID and Client-Secret from the credentials panel.

- **DATABASE SETUP:**  

  - Go to [Mongo-DB Atlas](https://cloud.mongodb.com/), and create a free cluster (if not already created).

  - Copy the connection string (or MongoDB Connection URI) along with your MongoDB username and password.

- Create a new `.env` file (taking refrence from the `.env.sample` file) and populate the environment variables.

- Run the application

```bash
npm run dev
```

## Tech Stack

- **FRONTEND FRAMEWORK:** Next-JS
- **STYLING:** Tailwind-CSS
- **BACKEND:** Next-JS
