release: python webquizappbackend/manage.py migrate
worker: npm start
web: gunicorn --chdir webquizappbackend webquizappbackend.wsgi
