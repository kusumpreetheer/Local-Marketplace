from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.authtoken.views import Token
from .models import Student, Faculty, Department, Program, Course, Instructor, Lecture, Grade, Enrollment


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'password']
        # to hide the password from the response
        extra_kwargs = {'password': {'write_only': True, 'required': True}}

    # for creating a new user and hashing the password
    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        Token.objects.create(user=user) # to create a token for new users
        return user


class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = '__all__'



class PersonalInfoSerializer(serializers.ModelSerializer):
    personal_info = serializers.SerializerMethodField()
    citizenship = serializers.SerializerMethodField()
    address = serializers.SerializerMethodField()
    phone_numbers = serializers.SerializerMethodField()
    email = serializers.SerializerMethodField()
    emergency_contact = serializers.SerializerMethodField()

    class Meta:
        model = Student
        fields = ('personal_info', 'citizenship', 'address', 'phone_numbers', 'email', 'emergency_contact')

    def get_personal_info(self, obj):
        return {
            "firstname": obj.student_first_name,
            "lastname": obj.student_last_name,
            "UCID": obj.student_id,
            "date of birth": obj.date_of_birth
        }

    def get_citizenship(self, obj):
        return {
            "country": obj.country,
            "status": obj.citizenship_status
        }

    def get_address(self, obj):
        return {
            "street address": obj.street_address,
            "postal code": obj.postal_code,
            "city": obj.city,
            "province/state": obj.province
        }

    def get_phone_numbers(self, obj):
        return {
            "home": obj.home_phone_number if obj.home_phone_number else None,
            "mobile": obj.mobile_phone_number if obj.mobile_phone_number else None,
            "other": obj.other_phone_number if obj.other_phone_number else None,
            "preferred": obj.preferred_phone
        }

    def get_email(self, obj):
        return {
            "personal": obj.personal_email,
            "school": obj.school_email, 
            "preferred": obj.preferred_email
        }

    def get_emergency_contact(self, obj):
        return {
            "name1": obj.emergency_contact1_name,
            "phone1": obj.emergency_contact1_phone,
            "relation1": obj.emergency_contact1_relationship,
            "name2": obj.emergency_contact2_name if obj.emergency_contact2_name else None,
            "phone2": obj.emergency_contact2_phone if obj.emergency_contact2_phone else None,
            "relation2": obj.emergency_contact2_relationship if obj.emergency_contact2_relationship else None,
            "name3": obj.emergency_contact3_name if obj.emergency_contact3_name else None,
            "phone3": obj.emergency_contact3_phone if obj.emergency_contact3_phone else None,
            "relation3": obj.emergency_contact3_relationship if obj.emergency_contact3_relationship else None,
            "preferred": obj.preferred_emergency_contact
        }

class FacultySerializer(serializers.ModelSerializer):
    class Meta:
        model = Faculty
        fields = '__all__'

class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = '__all__'

class ProgramSerializer(serializers.ModelSerializer):
    class Meta:
        model = Program
        fields = '__all__'

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = '__all__'

class InstructorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Instructor
        fields = '__all__'

class LectureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lecture
        fields = '__all__'

class GradeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Grade
        fields = '__all__'

class EnrollmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Enrollment
        fields = '__all__'


