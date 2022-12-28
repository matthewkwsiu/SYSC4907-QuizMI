from django.urls import re_path, path
from quizzes import views

urlpatterns = [
    path('instructors', views.instructor_list),
    path('students', views.student_list),
    path('students/<int:pk>', views.student_detail),
    path('quizzes', views.quiz_list), 
    path('quizzes/<int:pk>', views.quiz_detail), 
    path('quizzes/instructor/<int:instructorId>', views.quiz_list_owned_by_instructor),
    path('questions', views.questions_list)
]
