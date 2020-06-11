# DataTables Django App

## Brief Overview
A Django app that incorporates the DataTables library

## Instructions to Run Application

After cloning the project on your machine, cd into the project directory and run the following commands (Mac):
1. `source bin/activate` - Enter the virtual environment
2. `pip freeze` - Verifies the following versions are shown for the virtual environment: 
> * asgiref==3.2.7
> * Django==3.0.7
> * pytz==2020.1
> * sqlparse==0.3.1
3. `cd src` - Go into the src folder
4. `python manage.py runserver` - Starts the development server

You should then be able to go to localhost:8000 on your browser and see the table

* `deactivate` will take you out of the virtual environment