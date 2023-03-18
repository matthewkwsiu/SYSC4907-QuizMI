release: python webquizappbackend/manage.py migrate
web: npm start
worker: gunicorn --chdir webquizappbackend webquizappbackend.wsgi
