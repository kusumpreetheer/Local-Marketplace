from django.contrib import admin
from .models import Student, Faculty, Department, Program, Term, Course, Instructor, Lecture, Grade, Enrollment

# Register your models here.

# How to register a model in the admin panel:

# Way 1:
admin.site.register(Student)

# Way 2:
# @admin.register(Student)
# class StudentModel(admin.ModelAdmin):
#     # this way you can see the FILTER section on the admin page
#     list_filter = ('title', 'description')

#     # this will add the description field to the admin page
#     list_display = ('title', 'description')

admin.site.register(Faculty)
admin.site.register(Department)
admin.site.register(Program)
admin.site.register(Term)
admin.site.register(Course)
admin.site.register(Instructor)
admin.site.register(Lecture)
admin.site.register(Grade)
admin.site.register(Enrollment)

