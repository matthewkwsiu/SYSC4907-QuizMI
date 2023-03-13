release: python webquizappbackend/manage.py migrate
web: node App.js
web: gunicorn --chdir webquizappbackend webquizappbackend.wsgi
