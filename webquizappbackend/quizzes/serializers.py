from rest_framework import serializers
from quizzes.models import Instructor
from quizzes.models import Student

class InstructorSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Instructor
        fields = ('id','instructor_name',)

class StudentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Student
        fields = ('id','student_name',)
