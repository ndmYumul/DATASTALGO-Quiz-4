Part 1: Frontend README
ClickUp Clone UI

Role: Frontend Developer

Framework: React with Redux Toolkit
1. Installation & Dependencies

The following libraries are required for the project. Run these commands in order:

# UI Framework and Routing
npm install react-bootstrap react-router-dom react-router-bootstrap

# Data Fetching
npm install axios

# Global State Management
npm install redux react-redux redux-thunk @reduxjs/toolkit @redux-devtools/extension

2. Technical Implementation details
Global State (Redux Toolkit)

We use Redux to handle user authentication and RBAC.

    Slices: Managed via @reduxjs/toolkit.

    Async Logic: redux-thunk handles the API calls to the backend.

    Debugging: @redux-devtools/extension is enabled for state tracking.

Routing & UI

    Bootstrap Integration: react-bootstrap provides the Table and Accordion components for the Dashboard.

    Navigation: react-router-bootstrap ensures that Navbar links don't trigger a full page reload, maintaining the Redux state.

    API Client: axios is used for all requests. Use a central api.js file to attach the JWT token from Redux to the Authorization headers.

3. Screen logic requirements

    Dashboard: Project rows must be Accordions.

    Role-Based Filtering:

        Project Create: Filter user dropdown for Manager role only.

        Task Create: Filter user dropdown based on whether an Admin or Manager is logged in.

    User Management: Access restricted to Admin role only for creating and viewing users.

Part 2: Backend README
ClickUp Clone API

Role: Backend Developer

Status: Core Project Management API (Quiz 4)
1. Setup Instructions

    Environment: Create and activate a virtual environment.

    Installation: ```bash pip install django djangorestframework djangorestframework-simplejwt django-cors-headers

    Database: ```bash python manage.py makemigrations python manage.py migrate

    Superuser: Create an admin account to start registering colleagues.

2. API Endpoints (Testing via Postman)

All endpoints are prefixed with /api/v1.
Authentication

    POST /token/: Use username and password. Returns access and refresh tokens.

    Header Requirement: For all protected routes, use Authorization: Bearer <access_token>.

Project & Task Logic

    GET /projects/: Returns projects based on role. (Admins: All, Others: Assigned).

    POST /projects/create/: (Admin Only). logic handles status (CREATED vs IN PROGRESS) based on the start_date.

    POST /projects/<id>/task/create/: (Admin/Manager).

3. Automated Signals

    Total Hours Calculation: When a task is marked COMPLETED, a signal calculates hours_consumed based on the duration between start_date and the completion date.

    Project Roll-up: A secondary signal triggers to update the total hours_consumed of the parent project whenever a task is finished.
