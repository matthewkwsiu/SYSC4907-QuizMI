release: python webquizappbackend/manage.py migrate
web: python webquizappbackend/manage.py runserver 8080
web: gunicorn --chdir webquizappbackend webquizappbackend.wsgi
