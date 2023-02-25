from django.urls import re_path, path
from quizzes import views

urlpatterns = [
    path('instructors', views.instructor_list),
    path('instructors/<pk>', views.instructor_detail),
    path('students', views.student_list),
    path('students/<int:pk>', views.student_detail),
    path('students/username/<username>', views.username_getStudentFromUsername),
    path('quizzes', views.quiz_list), 
    path('quizzes/<quiz_name>/<username>', views.username_quizNameCrossCheck),
    path('quizzes/<int:pk>', views.quiz_detail), 
    path('quizzes/instructor/<int:instructorId>', views.quiz_list_owned_by_instructor),
    path('questions', views.questions_list),
    path('questions/<int:questionId>', views.questions_detail),
    path('questions/quiz/<int:quizId>', views.questions_quiz_detail),
    path('responses', views.response_list), 
    path('responses/<int:pk>', views.response_detail), 
    path('responses/student/<int:studentId>', views.response_list_with_student_Id),
    path('responses/question/<int:questionId>', views.response_list_with_question_Id),
    path('responses/quiz/<int:quizId>', views.response_list_with_quiz_Id),
    
]

