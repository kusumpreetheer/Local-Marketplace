from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserViewSet, StudentViewSet, FacultyViewSet, DepartmentViewSet, ProgramViewSet, CourseViewSet, InstructorViewSet, LectureViewSet, GradeViewSet, PersonalInfoViewSet, EnrollmentViewSet, StudentGradeView

router = DefaultRouter()
router.register('users', UserViewSet)
router.register('students', StudentViewSet, basename='student')
router.register('personal-info', PersonalInfoViewSet, basename='personal-info')
router.register('faculties', FacultyViewSet, basename='faculty')
router.register('departments', DepartmentViewSet, basename='department')
router.register('programs', ProgramViewSet, basename='program')
router.register('courses', CourseViewSet, basename='course')
router.register('instructors', InstructorViewSet, basename='instructor')
router.register('lectures', LectureViewSet, basename='lecture')
router.register('grades', GradeViewSet, basename='grade')
router.register('enrollments', EnrollmentViewSet, basename='enrollment')

urlpatterns = [
    path('api/', include(router.urls)),
    path('api/student-grades/<str:student_id>/', StudentGradeView.as_view(), name='student-grade'),

]