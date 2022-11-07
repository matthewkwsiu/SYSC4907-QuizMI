from django.db import models

# Create your models here.

class Question(models.Model):
    question_data = models.IntegerField(default=0)
    question_text = models.CharField(max_length=200)
    question_total_marks = models.IntegerField(default=1)

