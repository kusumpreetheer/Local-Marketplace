<template>
    <div class="bg-gray-200 min-h-screen px-4 py-3">
      <div class="container mx-auto">
        <div class="flex flex-wrap -mx-2">
          <div class="w-full lg:w-1/3 px-2 mb-4" style="height: 600px;">
            <div class="inline-flex flex-col justify-center items-center rounded-lg shadow p-8 text-center" style="background-color: #FFFFFF; flex-grow: 1; display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                <!-- Cumulative GPA -->
                <div style="font-weight: bold; font-size: 20px;">Cumulative GPA</div>
                <div class="mx-auto rounded-full w-60 h-60 flex items-center justify-center mb-6 mt-4 flex-col relative" style="border: 12px solid #47A67C; background-color: #08482C;">
                  <span class="text-white text-6xl font-bold" style="color: #47A67C;">3.71</span>
                  <span class="text-white text-3xl font-bold" style="color: #47A67C;">A-</span>
                </div>
              </div>
              <div>
                <!-- Links -->
                <p class="mb-4">Request Official Transcript</p>
                <p class="mb-4">View Unofficial Transcript</p>
              </div>
            </div>
            <div class="rounded-lg shadow p-4 mt-4 text-sm text-gray-800" style="background-color: #FFFFFF; height: 200px;">
              <!-- Details -->
              <p class="font-bold mb-7 text-base leading-relaxed text-left">Expected Graduation Date: 2024</p>
              <p class="text-base leading-normal mb-4 text-left">Deferred Examination Request</p>
              <p class="text-base leading-normal mb-4 text-left">Confirmation of Enrollment</p>
              <p class="text-base leading-normal mb-4 text-left">View Degree Requirements</p>
            </div>
          </div>
          <div class="w-full lg:w-2/3 px-2 flex-grow" style="background-color: #FFFFFF;">
            <div class="bg-white rounded-lg shadow p-4" style="padding-top: 20px; padding-bottom: 20px;">
              <div class="text-right mb-4">
                <!-- Semester Selection -->
                <select v-model="selectedSemester" class="rounded border-2 border-gray-500 focus:border-indigo-500 py-2 px-4">
                  <option v-for="semester in semesters" :key="semester" :value="semester">{{ semester }}</option>
                </select>
              </div>
  
              <div class="flex flex-wrap justify-between">
                <div class="flex flex-col items-center mr-6 ml-4" style="margin-top: -3.60rem;">
                  <!-- Semester GPA -->
                  <div style="font-weight: bold; font-size: 20px; margin-bottom: 35px; margin-top:15px;">Semester GPA</div>
                  <div class="rounded-full w-40 h-40 flex items-center justify-center flex-col" style="border: 8px solid #FFCD00; background-color: #9D8830;">
                    <span class="text-white text-4xl font-bold" style="color: #FFCD00;">{{ semesterGPA }}</span>
                    <span class="text-white text-4xl font-bold" style="color: #FFCD00;">B+</span>
                  </div>
                </div>
              </div>
              <div class="pl-56" style="margin-top: -10.00rem;">
                <div v-for="course in selectedCourses" :key="course.id" class="flex items-center py-2 justify-between">
                  <div class="flex items-center">
                    <div class="text-lg font-medium ml-8">{{ course.name }}</div>
                    <div :class="`h-6 rounded-full ${course.barColor} relative ml-8`" :style="{ width: calculateBarWidth(course.grade) }">
                      <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div class="text-lg font-medium">{{ course.grade }}%</div>
                      </div>
                    </div>
                  </div>
                  <div class="text-left text-black w-12">
                    <span>{{ course.letter }}</span>
                  </div>
                </div>
              </div>
              <div style="font-size: 14px; margin-top: 20px;">
                <!-- Semester Details -->
                <p style="text-align: left;">Winter 2024</p>
                <p style="text-align: left;">Units Enrolled: 12</p>
                <p style="text-align: left;">Program: Schulich Sch of EN Bachelor</p>
                <p style="text-align: left;">Level: Year 4</p>
                <p style="text-align: left;">Plan: Bachelor of Science, Internship Program, Software Engineering</p>
              </div>
            </div>
            <div class="bg-white rounded-lg shadow p-4" style="padding-top: 20px; padding-bottom: 20px;">
              <div class="flex flex-wrap justify-between">
                <div class="flex flex-col items-center mr-16 ml-4">
                  <div class="rounded-full w-40 h-40 flex items-center justify-center flex-col" style="border: 8px solid #FFCD00; background-color: #9D8830;">
                    <span class="text-white text-3xl font-bold" style="color: #FFCD00;">{{ semesterGPA }}</span>
                    <span class="text-white text-3xl font-bold" style="color: #FFCD00;">B+</span>
                  </div>
                </div>
              </div>
              <div class="pl-56" style="margin-top: -10.00rem;">
                <div v-for="course in selectedCourses" :key="course.id" class="flex items-center py-2 justify-between">
                  <div class="flex items-center">
                    <div class="text-lg font-medium ml-8">{{ course.name }}</div>
                    <div :class="`h-6 rounded-full ${course.barColor} relative ml-8`" :style="{ width: calculateBarWidth(course.grade) }">
                      <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div class="text-lg font-medium">{{ course.grade }}%</div>
                      </div>
                    </div>
                  </div>
                  <div class="text-left text-black w-12">
                    <span>{{ course.letter }}</span>
                  </div>
                </div>
              </div>
              <div style="font-size: 14px; margin-top: 20px;">
                <!-- Semester Details -->
                <p style="text-align: left;">Winter 2024</p>
                <p style="text-align: left;">Units Enrolled: 12</p>
                <p style="text-align: left;">Program: Schulich Sch of EN Bachelor</p>
                <p style="text-align: left;">Level: Year 4</p>
                <p style="text-align: left;">Plan: Bachelor of Science, Internship Program, Software Engineering</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'GradeBreakdown',
    data() {
      return {
        selectedSemester: 'Winter 2023',
        semesters: ['Winter 2023', 'Fall 2023', 'Spring 2024'],
        courses: {
          'Winter 2023': [
            { id: 1, name: 'SENG 401', grade: 96, letter: 'A+', barColor: 'bg-green-500', gradeColor: 'text-green-700' },
            { id: 2, name: 'SENG 438', grade: 73, letter: 'B-', barColor: 'bg-yellow-500', gradeColor: 'text-yellow-700' },
            { id: 3, name: 'SENG 533', grade: 87, letter: 'A-', barColor: 'bg-green-500', gradeColor: 'text-green-700' },
            { id: 4, name: 'SENG 471', grade: 61, letter: 'C', barColor: 'bg-red-500', gradeColor: 'text-red-700' },
            { id: 5, name: 'SENG 550', grade: 54, letter: 'D+', barColor: 'bg-red-500', gradeColor: 'text-red-700' },
          ],
          'Fall 2023': [
            {'id': 1, 'name': 'SENG 601', 'grade': 92, 'letter': 'A', 'barColor': 'bg-green-500', 'gradeColor': 'text-green-700'},
            {'id': 2, 'name': 'SENG 602', 'grade': 85, 'letter': 'B+', 'barColor': 'bg-green-500', 'gradeColor': 'text-green-700'},
            {'id': 3, 'name': 'SENG 603', 'grade': 78, 'letter': 'C+', 'barColor': 'bg-yellow-500', 'gradeColor': 'text-yellow-700'},
            {'id': 4, 'name': 'SENG 604', 'grade': 67, 'letter': 'D', 'barColor': 'bg-red-500', 'gradeColor': 'text-red-700'},
            {'id': 5, 'name': 'SENG 605', 'grade': 89, 'letter': 'B+', 'barColor': 'bg-green-500', 'gradeColor': 'text-green-700'}
          ],
          'Spring 2024': [
            {'id': 1, 'name': 'SENG 701', 'grade': 94, 'letter': 'A', 'barColor': 'bg-green-500', 'gradeColor': 'text-green-700'},
            {'id': 2, 'name': 'SENG 702', 'grade': 88, 'letter': 'B+', 'barColor': 'bg-green-500', 'gradeColor': 'text-green-700'},
            {'id': 3, 'name': 'SENG 703', 'grade': 81, 'letter': 'B-', 'barColor': 'bg-yellow-500', 'gradeColor': 'text-yellow-700'},
            {'id': 4, 'name': 'SENG 704', 'grade': 65, 'letter': 'D', 'barColor': 'bg-red-500', 'gradeColor': 'text-red-700'},
            {'id': 5, 'name': 'SENG 705', 'grade': 91, 'letter': 'A-', 'barColor': 'bg-green-500', 'gradeColor': 'text-green-700'}
          ],
        },
      };
    },
    computed: {
      selectedCourses() {
        return this.courses[this.selectedSemester] || [];
      },
      semesterGPA() {
        return '3.32'; // This should be computed based on actual courses and grades.
      },
    },
    methods: {
      calculateBarWidth(grade) {
        const maxGrade = Math.max(...this.selectedCourses.map(course => course.grade));
        const maxWidth = 200; // Maximum width
        const width = (grade / maxGrade) * maxWidth;
        return `${width}px`;
      },
  
      updateSelectedSemester(event) {
        this.selectedSemester = event.target.value;
        // You may need to add additional logic to update the courses and GPA based on the selected year.
      }
    },
  };
  </script>
  
  <style scoped>
  /* Global styles can be added here if needed */
  </style>
  