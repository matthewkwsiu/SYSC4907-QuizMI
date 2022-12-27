from rest_framework import serializers
from quizzes.models import Instructor
from quizzes.models import Student
from quizzes.models import Quiz

class InstructorSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Instructor
        fields = ('id','instructor_name',)

class StudentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Student
        fields = ('id','student_name')

class QuizSerializer(serializers.ModelSerializer):
    instructor_id = serializers.IntegerField(style={'intput_type':'hidden'})
    
    class Meta:
        model = Quiz
        fields = ('id', 'quiz_name', 'course_name', 'active_status', 'feedback_status', 'instructor_id')
    
