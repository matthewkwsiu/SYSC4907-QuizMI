# Generated by Django 4.1.6 on 2023-02-06 21:27

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('quizzes', '0004_instructor_password_instructor_username_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='instructor',
            old_name='password',
            new_name='instructor_password',
        ),
        migrations.RenameField(
            model_name='instructor',
            old_name='username',
            new_name='instructor_username',
        ),
        migrations.RenameField(
            model_name='student',
            old_name='password',
            new_name='student_password',
        ),
        migrations.RenameField(
            model_name='student',
            old_name='username',
            new_name='student_username',
        ),
    ]