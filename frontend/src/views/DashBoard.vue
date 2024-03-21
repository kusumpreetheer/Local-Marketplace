<!-- This is the primary dashboard component that is active when the route is dashboard -->
<template>
    <div class="flex flex-wrap gap-4 mt-3 mx-3">
        <div class="flex-3 w-2/3 bg-gray-100 rounded-lg shadow-md p-4">
            <SchedPreview />
        </div>
        <div class="flex-1 w-1/3 bg-gray-100 rounded-lg shadow-md p-4">
            <CalendarPreview />
        </div>
    </div>

    <div class="flex flex-wrap gap-4 mt-3 mx-3">
        <div class="flex-1 w-1-3 bg-gray-100 rounded-lg shadow-md p-4">
            <FinancePieChart />
        </div>
        <div class="flex-3 w-2/3 bg-gray-100 rounded-lg shadow-md p-4 overflow-auto">
            <div class="flex w-full">
            <router-link to="grades" class="block">
                <GradePreview
                :term="GradePreview.term"
                :average="GradePreview.TermGPA"
                :letter="GradePreview.TermLetterGrade"
                :courses="GradePreview.courses"
                :year="GradePreview.Level"
                :unitsEnrolled="GradePreview.UnitsEnrolled"
                :plan="GradePreview.Plan"
                :program="GradePreview.Program"
                />
            </router-link>
            </div>
        </div>
    </div>

</template>
  

<script>
import CalendarPreview from '../components/CalendarPreview'
import GradePreview from '../components/GradePreview'
import FinancePieChart from '../components/FinancePieChart'
import SchedPreview from '../components/SchedPreview'
    export default{
        name: 'DashBoard',
        components: {
            CalendarPreview,
            GradePreview,
            FinancePieChart,
            SchedPreview
        },
        data: () =>{
            return{
                GradePreview : {
                    term: "Fall 2023",
                    
                      UnitsEnrolled: 15,
                      Program: "Schulich Sch of EN Bachelor",
                      Level: 4,
                      Plan: "Bachelor of Science, Internship Program, Software Engineering",
                      TermGPA: 3.6,
                      TermLetterGrade: "A-",
                      courses : [
                          {
                              "name" : "SENG 550",
                              "letter": "A"
                          },
                          {
                              "name" : "SENG 513",
                              "letter" : "A"
                          },
                          {
                              "name" : "CPSC 481",
                              "letter": "A-"
                          },
                          {
                              "name" : "CPSC 411",
                              "letter": "B"
                          },
                          {
                              "name" : "ECON 341",
                              "letter": "B+"
                          }
                      ]
                  },
                
            }
        },
        created(){
            this.$emit('show-navbar')
            this.$emit('toggle-selected', 'dashboard')
        }
    }
</script>