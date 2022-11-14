from django.db import models

# Create your models here.

class Instructor(models.Model):
    # quizzes = models.Quiz()
    instructor_name = models.CharField(max_length=200)

class Student(models.Model):
    # quizzes_attempted = models.Quiz()
    student_name = models.CharField(max_length=200)

class Quiz(models.Model):
    quiz_name = models.CharField(max_length=200)
    course_name = models.CharField(max_length=200)
    # quiz_owner = models.Instructor()
    active_status = models.IntegerField(default=0)
    feedback_status = models.CharField(max_length=200)
    # questions = models.Question()

class Question(models.Model):
    question_data = models.IntegerField(default=0)
    question_text = models.CharField(max_length=200)
    question_total_marks = models.IntegerField(default=1)

class Response(models.Model):
    attempt_number = models.IntegerField()
    response_data = models.CharField(max_length=200)
    grade_acheived = models.IntegerField()
