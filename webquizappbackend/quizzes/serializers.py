from rest_framework import serializers
from quizzes.models import Instructor

class InstructorSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Instructor
        fields = ('id','instructor_name',)
