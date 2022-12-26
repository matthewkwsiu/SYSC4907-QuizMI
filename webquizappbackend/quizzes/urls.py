from django.urls import re_path, path
from quizzes import views

urlpatterns = [
    path('instructors', views.instructor_list),
    path('students', views.student_list),
    path('students/<int:pk>', views.student_detail),
]
