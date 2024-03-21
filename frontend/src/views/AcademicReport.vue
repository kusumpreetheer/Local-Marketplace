<template>
    <div class="academic-report bg-gray-100 p-4 ">
      <div class="program-information bg-white shadow-md rounded-lg p-6 mb-6 bg-white-100 w-2/5 text-start">
        <h1 class="text-xl font-semibold mb-4">Program Information</h1>
        <p><strong>Degree Stream:</strong> {{ programInfo.degree }}</p>
        <p><strong>Major:</strong> {{ programInfo.major }}</p>
        <p><strong>Minor:</strong> {{ programInfo.minor }}</p>
        <p><strong>Concentration:</strong> {{ programInfo.concentrartion }}</p>
        <p><strong>Year of Program:</strong> {{ programInfo.Year }}</p>
        <p><strong>Academic Load:</strong> {{ programInfo.academicLoad }}</p>
      </div>
  
      
      <!-- Academic Report Details -->
      <div class="academic-report-details bg-white shadow-md rounded-lg p-6 mb-6 bg-white-100 overflow-x-hidden" :class="{ 'overflow-hidden': !expandedReport, 'overflow-auto h-96': expandedReport }">
        <h2 class="text-xl font-semibold mb-4">Academic Report</h2>
      
        <!-- Major Field -->
        <div class="font-semibold col-span-full">Major Field</div>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          <template v-for="(course, index) in incompleteMajorField" :key="`major-${index}`">
            <div class="course-item relative group" 
              @mouseenter="course.hovered = true" 
              @mouseleave="course.hovered = false">
              <!-- Course box -->
              <div :class="{
                'bg-green-200': course.status === 'completed',
                'bg-yellow-200': course.status === 'in progress',
                'bg-white-100': course.status === 'incomplete',
                'p-2': true,
                'rounded': true,
                'shadow': true,
                'text-center': true
              }" class="hover:-translate-y-1 transition-transform duration-300">
                {{ course.code }}
              </div>
              <!-- Tooltip -->
              <div v-if="course.hovered" class="tooltip absolute bottom-full mb-2 -translate-x-1/2 left-1/2 text-black p-2 border border-gray-500 bg-white-100 rounded shadow-lg whitespace-nowrap max-w-screen overflow-x-auto z-10">
                <div><strong>Description:</strong> {{ course.description }}</div>
                <div><strong>Units:</strong> {{ course.units }}</div>
                <div><strong>Semester:</strong> {{ course.semester }}</div>
                <div><strong>Grade:</strong> {{ course.grade }}</div>
              </div>
            </div>
          </template>
        </div>

        <!-- Required Options -->
        <div class="flex flex-col my-4 gap-y-4">
            <div v-for="(option, index) in requiredOptions" :key="index">
              <h3 class="font-semibold">{{ option.name }}</h3>
              <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <template v-for="(course, index) in option.courses" :key="`major-${index}`">
                  <div class="course-item relative group" 
                    @mouseenter="course.hovered = true" 
                    @mouseleave="course.hovered = false">
                    <!-- Course box -->
                    <div :class="{
                      'bg-green-200': course.status === 'completed',
                      'bg-yellow-200': course.status === 'in progress',
                      'bg-white-100': course.status === 'incomplete',
                      'p-2': true,
                      'rounded': true,
                      'shadow': true,
                      'text-center': true
                    }" class="hover:-translate-y-1 transition-transform duration-300">
                      {{ course.code }}
                    </div>
                    <!-- Tooltip -->
                    <div v-if="course.hovered" class="tooltip absolute bottom-full mb-2 -translate-x-1/2 left-1/2 text-black p-2 border border-gray-500 bg-white-100 rounded shadow-lg whitespace-nowrap max-w-screen overflow-x-auto z-10">
                      <div><strong>Description:</strong> {{ course.description }}</div>
                      <div><strong>Units:</strong> {{ course.units }}</div>
                      <div><strong>Semester:</strong> {{ course.semester }}</div>
                      <div><strong>Grade:</strong> {{ course.grade }}</div>
                    </div>
                  </div>
                </template>
              </div>
            </div>
        </div>

      </div>

      <div class="flex justify-center mt-4">
          <button class="btn bg-gray-100 py-2 px-4 rounded transition-colors flex items-center justify-center gap-2" @click="toggleExpandedReport">
            <span v-if="expandedReport" class="text-lg transform rotate-[-90deg] text-black-100">&#8250;</span>
            <span v-else class="text-lg transform rotate-[90deg] text-black-100">&#8250;</span>
          </button>
        </div>
    </div>
  </template>
  
  
<script>
  export default {
    name: 'AcademicReport',
    data() {
      return {

        expandedReport: false,

        programInfo: {
          degree: "Bachelor of Science",
          major: "Computer Science",
          minor: "None",
          concentrartion: 'None',
          Year: 4,
          academicLoad: "Full-Time"
        },
           
        requiredCourses: {
            status: 'incomplete',
            courses: [
              { code: 'CPSC 231', status: 'completed', description: 'Introduction to Computer Science', units: 3, semester: 'Fall 2020', grade: 'A+', hovered: false, type: 'majorReq' },
              { code: 'CPSC 233', status: 'completed', description: 'Principles of Software Design', units: 3, semester: 'Winter 2021', grade: 'A', hovered: false, type: 'majorReq' },
              { code: 'CPSC 331', status: 'completed', description: 'Data Structures, Algorithms, and Their Analysis', units: 3, semester: 'Spring 2021', grade: 'B+', hovered: false, type: 'majorReq' },
              { code: 'CPSC 313', status: 'completed', description: 'Computer Hardware and Operating Systems', units: 3, semester: 'Fall 2021', grade: 'B', hovered: false, type: 'majorReq' },
              { code: 'CPSC 449', status: 'in progress', description: 'Advanced Programming Techniques', units: 3, semester: 'Winter 2022', grade: 'In Progress', hovered: false, type: 'majorReq' },
              { code: 'CPSC 457', status: 'in progress', description: 'Principles of Operating Systems', units: 3, semester: 'Winter 2022', grade: 'In Progress', hovered: false, type: 'majorReq' },
              { code: 'CPSC 471', status: 'incomplete', description: 'Database Systems', units: 3, semester: 'To Be Taken', grade: 'N/A', hovered: false, type: 'majorReq' },
              { code: 'CPSC 481', status: 'incomplete', description: 'Human-Computer Interaction I', units: 3, semester: 'To Be Taken', grade: 'N/A', hovered: false, type: 'majorReq' },
            ]
        },

        requiredOptions: [
          {
            name: '500+ level',
            status: 'in progress',
            courses: [
            { code: 'CPSC 533', status: 'completed' },
            { code: 'CPSC 535', status: 'completed' },
            { code: 'CPSC 537', status: 'in progress' },
            ]
          },
          {
            name: '400+ level',
            status: 'incomplete',
            courses: [
            { code: 'CPSC 541', status: 'in progress' },
            { code: 'CPSC 453', status: 'completed' },
            { code: 'CPSC 457', status: 'completed' },
            { code: 'CPSC 471', status: 'in progress' },
            ]
          },
          {
            name: '300+ level',
            status: 'completed',
            courses: [
            { code: 'CPSC 319', status: 'in progress' },
            { code: 'CPSC 355', status: 'completed' },
            ]
          },
        ],
      }
    },
    computed: {
        incompleteMajorField() {
            if (this.expandedReport) {
                return this.requiredCourses.courses.filter(course => course.status === 'incomplete' || course.status === 'in progress' || course.status === 'completed');
                
            } else {
                return this.requiredCourses.courses.filter(course => course.status === 'incomplete');
            }
        },

        incompleteOptions() {
            if (this.expandedReport) {
                return this.requiredOptions.map(option => ({...option,
                courses: option.courses.filter(course => course.status === 'incomplete' || course.status === 'in progress' || course.status === 'completed')}));
            } else {
                return this.requiredOptions.map(option => ({...option,
                courses: option.courses.filter(course => course.status === 'incomplete')}));
            }
        },
    
      canApplyForGraduation() {
        // Logic to determine if the student can apply for graduation
        return this.academicReport.programs.some(program => {
          return program.unitsNeeded === 0;
        });
      },
      completedCoursesReport() {
        return this.academicReport.programs.map(program => {
        const updatedProgram = { ...program };
        updatedProgram.courseCategory = program.courseCategory.map(category => {
            const updatedCategory = { ...category };
            updatedCategory.courseField = category.courseField.map(field => {
            const updatedField = { ...field };
            updatedField.courses = field.courses.filter(course => course.status === 'complete');
            return updatedField;
            });
            return updatedCategory;
        });
        return updatedProgram;
        });
      },
      programUnits() {
        // Check if `academicReport` and `programs` are defined and if they are arrays.
        if (!this.academicReport || !Array.isArray(this.academicReport.programs)) {
        return []; // Return an empty array if not defined or not an array
        }

        return this.academicReport.programs.map(program => {
        // Start with zero units taken and then sum up based on course status
        let unitsTaken = 0;

        // Check if `courseCategory` exists and is an array before iterating over it
        if (Array.isArray(program.courseCategory)) {
            program.courseCategory.forEach(category => {
            // Check if `courseField` exists and is an array before iterating over it
            if (Array.isArray(category.courseField)) {
                category.courseField.forEach(field => {
                field.courses.forEach(course => {
                    if (course.status === 'complete' || course.status === 'incomplete') {
                    unitsTaken = unitsTaken + 3; // Assuming each course is worth one unit
                    }
                });
                });
            }
            });
        }

        // Calculate units needed based on the units taken
        const unitsNeeded = Math.max(program.unitsRequired - unitsTaken, 0); // Ensure it doesn't go below zero

        // Return an object with the computed units information for the program
        return {
            ...program,
            unitsTaken,
            unitsNeeded
        };
        });
    }
    },
    methods: {
        toggleExpandedReport() {
            this.expandedReport = !this.expandedReport;
        },
        toggleReportDetails(index) {
            const program = this.academicReport.programs[index];
            // Ensure program exists and has courseCategory defined
            if (program && Array.isArray(program.courseCategory)) {
            program.isExpanded = !program.isExpanded;
            if (!program.isExpanded) {
                // Store full course list if not done already
                if (!program.fullCourseList) {
                program.fullCourseList = program.courseCategory.map(category => ({
                    ...category, 
                    courseField: category.courseField.map(field => ({ ...field }))
                }));
                }
                // Filter out completed and inProgress courses
                program.courseCategory.forEach(category => {
                category.courseField.forEach(field => {
                    field.courses = field.courses.filter(course => course.status === 'incomplete');
                });
                });
            } else {
                // Restore the full course list if it has been stored
                if (program.fullCourseList) {
                program.courseCategory = program.fullCourseList.map(category => ({
                    ...category, 
                    courseField: category.courseField.map(field => ({ ...field }))
                }));
                }
            }
            } else {
            console.error('Program or courseCategory is undefined.');
            }
        },
        toggleAllReports() {
            this.areAllReportsExpanded = !this.areAllReportsExpanded;
            this.academicReport.programs.forEach((program, index) => {
            // Toggle the expanded state for each program
            this.toggleReportDetails(index);
            });

        }
    },
    created() {
      this.$emit('show-navbar')
      this.$emit('show-search')
      this.$emit('show-profile')
      this.$emit('set-title','Academic Report')
      // Preset data should not be modified here, it should be set in data() or computed
    }
  }
</script>
    