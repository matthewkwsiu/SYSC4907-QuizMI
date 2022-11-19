from django.db import models

# Create your models here.

class Instructor(models.Model):
    instructor_name = models.CharField(max_length=200)

class Student(models.Model):
    student_name = models.CharField(max_length=200)

class Quiz(models.Model):
    instructor = models.ForeignKey(
        'Instructor',
        on_delete=models.CASCADE,
    )
    quiz_name = models.CharField(max_length=200)
    course_name = models.CharField(max_length=200)
    active_status = models.IntegerField(default=0)
    feedback_status = models.CharField(max_length=200)

class Question(models.Model):
    quiz = models.ForeignKey(
        'Quiz',
        on_delete=models.CASCADE,
    )
    question_data = models.IntegerField(default=0)
    question_text = models.CharField(max_length=200)
    question_total_marks = models.IntegerField(default=1)

class Response(models.Model):
    student = models.ForeignKey(
        'Student',
        on_delete=models.CASCADE,
    )
    attempt_number = models.IntegerField()
    response_data = models.CharField(max_length=200)
    grade_acheived = models.IntegerField()

