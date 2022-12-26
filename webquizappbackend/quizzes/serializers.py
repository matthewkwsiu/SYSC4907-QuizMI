from rest_framework import serializers
from quizzes.models import Instructor

class InstructorSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Instructor
        fields = ('id','instructor_name',)

    class Meta2:
        model = Student
        fields = ('id','student_name',)
