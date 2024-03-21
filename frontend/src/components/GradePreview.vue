<template>
    <div class="flex flex-row justify-between">
        <div class="flex flex-col items-center mx-10">
            <div class="text-2xl font-bold mb-4">Semester GPA</div>
            <div class="rounded-full w-32 h-32 flex items-center justify-center flex-col border-8" :class="[gpaColours(letter)]" >
                <span class="text-4xl font-bold" :class="[gpaText(letter)]">{{ average }}</span>
                <span class="text-4xl font-bold" :class="[gpaText(letter)]">{{ letter  }}</span>
            </div>
        </div>
        <div class="flex flex-col mx-2 justify-between">
            <div v-for="course in courses" :key="course.name"  class="flex flex-row py-1 justify-between">
                <div class="mx-3 text-base w-28 text-left"> {{ course.name }}</div>
                <div class="w-96 mx-0">
                    <div class="h-8 rounded-lg" :class="[barColor(course.letter),barWidth(course.letter)]"></div>
                </div>
                <div class = " mx-6 pr-2 text-lg w-12 text-left">{{ course.letter }}</div>
            </div> 
        </div>
    </div>
   <!-- <div class="p-2 text-left text-sm">
        <div>{{ term }}</div>
        <div> Level: {{ year }}</div>
        <div> Units Enrolled: {{ unitsEnrolled }}</div>
        <div> Plan: {{ plan }}</div>
        <div> Program: {{ program }}</div>
   </div> -->
</template>

<script>
    export default{
        name : 'GradePreview',
        props : {
            average :{
                type: Number,
                required: true
            },
            letter:{
                type: String,
                required: true
            },
            courses:{
                type: Array,
                required: true
            },
            term:{
                type: String,
                required: true
            },
            year:{
                type: Number,
                required: true
            },
            unitsEnrolled:{
                type: Number,
                required: true
            },
            plan:{
                type: String,
                required: true
            },
            program:{
                type: String,
                required: true
            }

        },
        methods:{
            barColor(grade){
                if(grade[0] === 'A'){
                    return 'bg-grade-A'
                }
                if(grade[0] === 'B'){
                    return 'bg-grade-B'
                }
                if(grade[0] === 'C'){
                    return 'bg-grade-C'
                }
                else {
                    return 'bg-grade-D'
                }

            },
            barWidth(grade) {
                if(grade[0] === 'A'){
                    return 'w-96'
                }
                if(grade[0] === 'B'){
                    return 'w-80'
                }
                if(grade[0] === 'C'){
                    return 'w-72'
                }
                if(grade[0] === 'D'){
                    return 'w-60'
                }
                else {
                    return 'w-48'
                }

            },
            circleColor(letter){
                if(letter[0] === 'A'){
                    return 'bg-green-500'
                }
                if(letter[0] === 'B'){
                    return 'bg-blue-500'
                }
                if(letter[0] === 'C'){
                    return 'bg-yellow-500'
                }
                if(letter[0] === 'D'){
                    return 'bg-red-500'
                }
            },
            circleBorder(letter){
                if(letter[0] === 'A'){
                    return 'border-green-200'
                }
                if(letter[0] === 'B'){
                    return 'border-blue-200'
                }
                if(letter[0] === 'C'){
                    return 'border-yellow-200'
                }
                if(letter[0] === 'D'){
                    return 'border-red-200'
                }
            },
            letterColor(letter){
                if(letter[0] === 'A'){
                    return 'text-green-200'
                }
                if(letter[0] === 'B'){
                    return 'text-blue-200'
                }
                if(letter[0] === 'C'){
                    return 'text-yellow-200'
                }
                if(letter[0] === 'D'){
                    return 'text-red-200'
                }
            },
            gpaColours(letterGrade) {
                if(letterGrade[0] == 'A') {
                    return "border-grade-A bg-grade-A-background"
                }
                if(letterGrade[0] == 'B') {
                    return "border-grade-B bg-grade-B-background"
                }
                if(letterGrade[0] == 'C') {
                    return "border-grade-C bg-grade-C-background"
                }
                else {
                    return "border-grade-D bg-grade-D-background"
                }
            },
            gpaText(letterGrade) {
            if(letterGrade[0] == 'A') {
                return "text-grade-A"
            }
            if(letterGrade[0] == 'B') {
                return "text-grade-B"
            }
            if(letterGrade[0] == 'C') {
                return "text-grade-C"
            }
            else {
                return "text-grade-D"
            }
            }
        },
        created(){
            console.log(this.courses)
        }

}
</script>