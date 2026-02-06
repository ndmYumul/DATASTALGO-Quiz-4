Part 1: Backend README (README.md for the Backend Repo)
ClickUp Replacement - Backend API

Role: Backend Developer

Repository: git@gitlab.com:Mo.emam/clickup.git
1. Getting Started & Installation

Follow these steps to set up the backend environment:

    Clone the Repository:
    Bash

git clone git@gitlab.com:Mo.emam/clickup.git
cd clickup

Environment Setup:
Bash

# Create virtual environment
python -m venv venv

# Activate environment
# Windows:
venv\Scripts\activate
# Mac/Linux:
source venv/bin/activate

Install Dependencies:
Bash

pip install django djangorestframework djangorestframework-simplejwt django-cors-headers
# Or if requirements.txt is present:
pip install -r requirements.txt

Database & Admin Setup:
Bash

    python manage.py makemigrations
    python manage.py migrate
    python manage.py createsuperuser

2. API Endpoints & Postman Testing

Base URL: /api/v1

Auth: Use Authorization: Bearer <access_token> in headers.
Endpoint	Method	Permission	Description
/token/	POST	Public	Get Access/Refresh tokens
/users/	GET	Admin	List all colleagues
/users/create/	POST	Admin	Register new colleagues (No Dummy Data)
/projects/	GET	All	View projects based on RBAC
/projects/create/	POST	Admin	Create project (Status logic applied)
/projects/<id>/task/create/	POST	Admin/Manager	Create task for specific project
3. Business Logic (Signals)

    Task Completion: Hours are calculated from start_date to the actual completion date.

    Project Aggregation: Every task update triggers a signal that recalculates the total hours_consumed for the parent project.

Part 2: Frontend README (README.md for the Frontend Repo)
ClickUp Replacement - Frontend UI

Role: Frontend Developer

Repository: https://github.com/ndmYumul/DATASTALGO-Quiz-4.git
1. Getting Started & Installation

Follow these steps to set up the React environment:

    Clone the Repository:
    Bash

git clone https://github.com/ndmYumul/DATASTALGO-Quiz-4.git
cd DATASTALGO-Quiz-4

Install Required Dependencies:
Bash

# UI and Routing
npm install react-bootstrap react-router-dom react-router-bootstrap

# API Client
npm install axios

# Redux State Management
npm install redux react-redux redux-thunk @reduxjs/toolkit @redux-devtools/extension

Run Application:
Bash

    npm start

2. Technical Stack Details

    State Management: Redux Toolkit is used for global RBAC and Auth state.

    UI Components: React-Bootstrap (Accordions used for Dashboard rows).

    API Integration: Axios with interceptors for SimpleJWT handling.

3. RBAC Requirements

    Admin: Full access to User List, User Creation, and Project Creation.

    Manager: Can see assigned projects and create tasks (can only assign tasks to 'User' roles).

    User: Can see assigned projects and tasks only; no creation permissions.
