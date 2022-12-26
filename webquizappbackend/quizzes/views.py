from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view

from quizzes.models import Instructor
from quizzes.serializers import InstructorSerializer

# Create your views here.

@api_view(['GET', 'POST', 'DELETE'])
def instructor_list(request):
    if request.method == 'GET':
        instructors = Instructor.objects.all()
        
        instructor_name = request.GET.get('instructor_name', None)
        if instructor_name is not None:
            instructors = instructors.filter(instructor_name__icontains=instructor_name)
            
        instructor_serializer = InstructorSerializer(instructors, many=True)
        return JsonResponse(instructor_serializer.data, safe=False)

@api_view(['GET', 'POST', 'DELETE'])
def student_list(request):
    if request.method == 'GET':
        students = Students.objects.all()

        student_name = request.GET.get('student_name', None)
        if student_name is not None:
            students = students.filter(student_name__icontains=student_name)

        student_serializer = StudentSerializer(students, many=True)
        return JsonResponse(student_serializer.data, safe=False)




