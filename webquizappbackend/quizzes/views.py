from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.parsers import JSONParser 
from rest_framework import status

from quizzes.models import Instructor
from quizzes.serializers import InstructorSerializer
from quizzes.models import Student
from quizzes.serializers import StudentSerializer
from quizzes.models import Quiz
from quizzes.serializers import QuizSerializer
from quizzes.models import Question
from quizzes.serializers import QuestionSerializer

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
        
    elif request.method == 'POST':
        instructor_data = JSONParser().parse(request)
        instructor_serializer = InstructorSerializer(data=instructor_data)
        if instructor_serializer.is_valid():
            instructor_serializer.save()
            return JsonResponse(instructor_serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(instructor_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'POST', 'DELETE'])
def student_list(request):
    if request.method == 'GET':
        students = Student.objects.all()

        student_name = request.GET.get('student_name', None)
        if student_name is not None:
            students = students.filter(student_name__icontains=student_name)

        student_serializer = StudentSerializer(students, many=True)
        return JsonResponse(student_serializer.data, safe=False)
    
    elif request.method == 'POST':
        student_data = JSONParser().parse(request)
        student_serializer = StudentSerializer(data=student_data)
        if student_serializer.is_valid():
            student_serializer.save()
            return JsonResponse(student_serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(student_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        count = Student.objects.all().delete()
        return JsonResponse({'message': '{} Students were deleted successfully!'.format(count[0])}, status=status.HTTP_204_NO_CONTENT)

@api_view(['GET', 'PUT', 'DELETE'])
def student_detail(request, pk):
    try:
        student = Student.objects.get(pk=pk)
    except Student.DoesNotExist:
        return JsonResponse({'message': 'The student does not exist'}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        student_serializer = StudentSerializer(student)
        return JsonResponse(student_serializer.data)
    
    elif request.method == 'PUT':
        student_data = JSONParser().parse(request)
        student_serializer = StudentSerializer(student, data=student_data)
        if student_serializer.is_valid():
            student_serializer.save()
            return JsonResponse(student_serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(student_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        student.delete()
        return JsonResponse({'message': 'Student was deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)

@api_view(['GET', 'POST', 'DELETE'])
def quiz_list(request):
    if request.method == 'GET':
        quizzes = Quiz.objects.all()

        quiz_name = request.GET.get('quiz_name', None)
        if quiz_name is not None:
            quizzes = quizzes.filter(quiz_name__icontains=quiz_name)

        quiz_serializer = QuizSerializer(quizzes, many=True)
        return JsonResponse(quiz_serializer.data, safe=False)
    
    elif request.method == 'POST':
        quiz_data = JSONParser().parse(request)
        quiz_serializer = QuizSerializer(data=quiz_data)
        if quiz_serializer.is_valid():
            quiz_serializer.save()
            return JsonResponse(quiz_serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(quiz_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        count = Quiz.objects.all().delete()
        return JsonResponse({'message': '{} Quizzes were deleted successfully!'.format(count[0])}, status=status.HTTP_204_NO_CONTENT)

@api_view(['GET', 'PUT', 'DELETE'])
def quiz_detail(request, pk):
    try:
        quiz = Quiz.objects.get(pk=pk)
    except Quiz.DoesNotExist:
        return JsonResponse({'message': 'The quiz does not exist'}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        quiz_serializer = QuizSerializer(quiz)
        return JsonResponse(quiz_serializer.data)
    
    elif request.method == 'PUT':
        quiz_data = JSONParser().parse(request)
        quiz_serializer = QuizSerializer(quiz, data=quiz_data)
        if quiz_serializer.is_valid():
            quiz_serializer.save()
            return JsonResponse(quiz_serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(quiz_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        quiz.delete()
        return JsonResponse({'message': 'Quiz was deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)

@api_view(['GET', 'DELETE'])
def quiz_list_owned_by_instructor(request, instructorId):
    try:
        instructor = Instructor.objects.get(id=instructorId)
    except Instructor.DoesNotExist:
        return JsonResponse({'message': 'The instructor does not exist'}, status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'GET':
        quizzes = Quiz.objects.all().filter(instructor_id=instructorId)

        quiz_name = request.GET.get('quiz_name', None)
        if quiz_name is not None:
            quizzes = quizzes.filter(quiz_name__icontains=quiz_name)

        quiz_serializer = QuizSerializer(quizzes, many=True)
        return JsonResponse(quiz_serializer.data, safe=False)

    elif request.method == 'DELETE':
        count = Quiz.objects.all().filter(instructor_id=instructorId).delete()
        return JsonResponse({'message': '{} Quizzes were deleted successfully!'.format(count[0])}, status=status.HTTP_204_NO_CONTENT)
        
@api_view(['POST'])
def questions_list(request):
    if request.method == 'POST':
        question_data = JSONParser().parse(request)
        question_serializer = QuestionSerializer(data=question_data)
        if question_serializer.is_valid():
            question_serializer.save()
            return JsonResponse(question_serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(question_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'GET'])
def questions_detail(request, questionId):
    try:
        questions = Question.objects.get(id=questionId)
    except Question.DoesNotExist:
        return JsonResponse({'message': 'The question does not exist'}, status=status.HTTP_404_NOT_FOUND)
    if request.method == 'PUT':
        question_data = JSONParser().parse(request)
        question_serializer = QuestionSerializer(questions, data=question_data)
        if question_serializer.is_valid():
            question_serializer.save()
            return JsonResponse(question_serializer.data, status=status.HTTP_200_OK)
    elif request.method == 'GET':
        target = Question.objects.all().filter(id=questionId)
        question = QuestionSerializer(data=target)
        return JsonResponse({'message': '{} Question were returned successfully!'.format(question)}, status=status.HTTP_200_OK)

@api_view(['GET', 'DELETE'])
def questions_quiz_detail(request, quizId):
    try:
        questions = Question.objects.filter(quiz_id=quizId)
    except Question.DoesNotExist:
        return JsonResponse({'message': 'The question does not exist'}, status=status.HTTP_404_NOT_FOUND)
    if request.method == 'GET':
        questions_list = QuestionSerializer(data=questions)
        return JsonResponse({'message': '{} Questions were returned successfully!'.format(questions_list)}, status=status.HTTP_200_OK)
    elif request.method == 'DELETE':
        target = Question.objects.all().filter(quiz_id=quizId).delete()
        return JsonResponse({'message': '{} Questions were deleted successfully!'.format(target[0])}, status=status.HTTP_204_NO_CONTENT)
