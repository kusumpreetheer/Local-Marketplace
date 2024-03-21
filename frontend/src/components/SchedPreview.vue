<template>    
    <table class="table-auto w-full">
      <thead>
        <tr class="text-sm font-bold text-center">
          <th class="py-2 px-4 border border-gray-200">Monday</th>
          <th class="py-2 px-4 border border-gray-200">Tuesday</th>
          <th class="py-2 px-4 border border-gray-200">Wednesday</th>
          <th class="py-2 px-4 border border-gray-200">Thursday</th>
          <th class="py-2 px-4 border border-gray-200">Friday</th>
        </tr>
      </thead>

    <tbody class="text-sm">
      <tr v-for="timeSlot in timeSlots" :key="timeSlot.time">
        <td class="py-2 px-4 border border-gray-200">{{ timeSlot.time }}</td>
        <td v-for="day in days" :key="day" class="py-2 px-4 border border-gray-200">
          <div v-for="course in timeSlot.courses[day]" :key="course.courseCode" :class="course.type">
            <span :class="{ 'lecture': course.type === 'lecture', 'tutorial': course.type === 'tutorial' }"
              :style="{ height: (course.durationInRows * 40) + 'px' }"> <!-- Assuming each row height is 40px -->
                {{ course.courseCode }} {{ course.sessionNumber }}
            </span>
          </div>
        </td>
      </tr>
    </tbody>
    </table>
</template>
  
<script>    
export default {
    name: 'SchedPreview',
    data() {
        const courses = [
        {
            "courseCode" : "CPSC 441",
            "courseTitle" : "Computer Networks",
            "Lecture" : {
                "days" : "MWF",
                "start" : 14,
                "end" : 15,
                "roomno": "ICT 121",
                "LectureNO" : "LEC 2"
            },
            "Tutorial":{
                "days" : "MW",
                "start" : 9,
                "end" : 10,
                "roomno": "ENA 201",
                "TutorialNO" : "TUT 5"
            }
            
        },
        {
            "courseCode" : "SENG 401",
            "courseTitle" : "Software Architecture",
            "Lecture" : {
                "days" : "TTH",
                "start" : 8,
                "end" : 9.25,
                "roomno": "SA 104",
                "LectureNO" : "LEC 1"
            },
            "Tutorial":{
                "days" : "W",
                "start" : 16,
                "end" : 18,
                "roomno": "ENA 305",
                "TutorialNO" : "LAB 3"
            }
        },
        {
            "courseCode" : "SENG 550",
            "courseTitle" : "Scalable Data Analytics",
            "Lecture" : {
                "days" : "MF",
                "start" : 14,
                "end" : 15.25,
                "roomno": "ST 132",
                "LectureNO" : "LEC 2"
            },
            "Tutorial":{
                "days" : "T",
                "start" : 14,
                "end" : 16,
                "roomno": "ENA 203",
                "TutorialNO" : "LAB 2"
            }
        },
        {
            "courseCode" : "CPSC 471",
            "courseTitle" : "Database Management Systems",
            "Lecture" : {
                "days" : "MW",
                "start" : 15.5,
                "end" : 16.75,
                "roomno": "KNB 132",
                "LectureNO" : "LEC 2"
            },
            "Tutorial":{
                "days" : "TTH",
                "start" : 10,
                "end" : 11,
                "roomno": "ST 59",
                "TutorialNO" : "TUT 4"
            }
        }
    ];
    
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    const timeSlots = this.generateTimeSlots(courses);
    
    return {
      days,
      timeSlots
    };
  },

  methods: {
    generateTimeSlots(courses) {
      let timeSlots = [];
      for (let hour = 8; hour <= 19; hour++) {
        let formattedHour = hour > 12 ? hour - 12 : hour;
        let amPm = hour >= 12 ? 'PM' : 'AM';
        let slot = { 
            time: `${formattedHour} ${amPm}`, 
            courses: { Monday: '', Tuesday: '', Wednesday: '', Thursday: '', Friday: '' }
        };
        courses.forEach(course => {
            this.fillCourseTimeSlot(course, 'Lecture', slot, hour);
            this.fillCourseTimeSlot(course, 'Tutorial', slot, hour);
        });
        timeSlots.push(slot);
    }
      return timeSlots;
    },
    fillCourseTimeSlot(course, sessionType, slot, hour) {
        const session = course[sessionType];
        if (hour >= session.start && hour < session.end) {
            session.days.match(/M|T(?!H)|W|TH|F/g).forEach(dayAbbrev => {
            const dayMap = { M: 'Monday', T: 'Tuesday', W: 'Wednesday', TH: 'Thursday', F: 'Friday' };
            const day = dayMap[dayAbbrev];
            if (!slot.courses[day]) {
                slot.courses[day] = [];
            }
            const durationInRows = this.calculateDurationInRows(session.start, 9.25);
            slot.courses[day].push({
                courseCode: course.courseCode,
                sessionNumber: sessionType === 'Lecture' ? session.LectureNO : session.TutorialNO,
                type: sessionType.toLowerCase(), // Will be 'lecture' or 'tutorial'
                durationInRows: durationInRows
            });
            });
        }
    },
    calculateDurationInRows(start, end) {
      const startHour = Math.floor(start);
      const startMinutes = Math.round((start - startHour) * 60);

      const endHour = Math.floor(end);
      const endMinutes = Math.round((end - endHour) * 60);

      // Convert start and end times to total minutes from the start of the day
      const startTimeInMinutes = startHour * 60 + startMinutes;
      const endTimeInMinutes = endHour * 60 + endMinutes;

      // Calculate the duration in minutes
      const durationInMinutes = endTimeInMinutes - startTimeInMinutes;

      // Assuming each row represents 15 minutes
      const durationInRows = durationInMinutes / 15;

      return durationInRows;
  }

  }
};
</script>

<style scoped>
.lecture {
  background-color: #7cb342; /* green background for lectures */
}
.tutorial {
  background-color: #42a5f5; /* blue background for tutorials */
}
</style>

  