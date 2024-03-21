<template>
  <div class="bg-white rounded-lg p-4">
    <h2 class="font-bold text-3xl mb-10 text-left">Important Dates</h2>
    <!-- Add color codes -->
    <ul class="space-y-2 overflow-y-auto max-h-96 pr-2">
    <li v-for="date in importantDates" :key="date.id" class="flex items-center bg-gray-100 border border-gray-200 rounded-lg py-2 shadow-lg relative">
        <span class="absolute left-0 top-0 bottom-0 w-2 bg-red-500 rounded-l-lg"></span>
        <div class="ml-4 flex flex-col justify-center">
        <p class="text-3xl font-bold text-gray-700">{{ date.month }}</p>
        <p class="text-3xl font-bold text-gray-800">{{ date.day }}</p>
        </div>
        <div class="mx-12">
        <p class="font-semibold text-gray-500 text-left">{{ date.event }}</p>
        </div>
    </li>
    </ul>
  </div>
</template>

<script>
export default {
name: 'CalendarPreview',
data() {
    return {
    importantDates: [
        { id: 1, month: 'JAN', day: '02', event: 'Start of Semester' },
        { id: 2, month: 'JAN', day: '08', event: 'Start of Classes' },
        { id: 3, month: 'JAN', day: '18', event: 'Last day to drop classes without financial penalty' },
        { id: 4, month: 'JAN', day: '25', event: 'Last day to add classes' },
        { id: 5, month: 'FEB', day: '01', event: 'Last day to drop classes without academic penalty' },
        { id: 6, month: 'FEB', day: '15', event: 'Reading Week' },
        { id: 7, month: 'MAR', day: '01', event: 'Last day to withdraw from classes' },
        { id: 8, month: 'APR', day: '10', event: 'Last day of classes' },
        { id: 9, month: 'APR', day: '15', event: 'Start of Final Exams' },
        { id: 10, month: 'APR', day: '30', event: 'End of Final Exams' }
    ]
    };
},
}
</script>
  