from django.urls import re_path, path
from quizzes import views

urlpatterns = [
    path('instructors', views.instructor_list),
]