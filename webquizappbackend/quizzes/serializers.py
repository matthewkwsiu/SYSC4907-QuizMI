from rest_framework import serializers
from quizzes.models import Instructor
from quizzes.models import Student
from quizzes.models import Quiz
from quizzes.models import Question
from quizzes.models import Response

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
        
class QuestionSerializer(serializers.ModelSerializer):
    quiz_id = serializers.IntegerField(style={'intput_type':'hidden'})

    class Meta:
        model = Question
        fields = ('id', 'question_data', 'question_text', 'question_total_marks', 'quiz_id')
    
class ResponseSerializer(serializers.ModelSerializer):
    student_id = serializers.IntegerField(style={'intput_type':'hidden'})
    question_id = serializers.IntegerField(style={'intput_type':'hidden'})

    class Meta: 
        model = Response
        fields = ('id', 'attempt_number', 'response_data', 'grade_acheived', 'student_id', 'question_id')
