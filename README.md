# Web-Project



Project Title: Simple Web App with React and Django  

Description:  

This web application demonstrates a basic integration between a React frontend and a Django backend. The frontend, built using React and Vite, features a simple user interface with a button that toggles the display of data fetched from the backend. The backend, developed with Django and Django REST Framework, provides an API endpoint to serve data to the frontend.

  Features:  

-   Frontend:  
Built with React and Vite, includes a button to fetch and display data from the backend.

-  Backend:   
Django application with Django REST Framework to create an API endpoint for delivering data.

-   API Endpoint:   `/api/data/` that returns a list of data items.

  Technologies Used:  

-   Frontend:   React, Vite
-   Backend:   Django, Django REST Framework
-   Database:   SQLite (default for Django)
-   Version Control:   Git for source code management

  Setup Instructions:  

1.   Frontend Setup:  
   - Install dependencies with `npm install`.
   - Start the development server with `npm run dev`.

2.   Backend Setup:  
   - Install dependencies with `pip install -r requirements.txt`.
   - Apply migrations with `python manage.py migrate`.
   - Start the development server with `python manage.py runserver`.

  Note:   Ensure the backend server is running and accessible at `http://localhost:8000` for the frontend to fetch data successfully.
