<template>
    <!-- <div class="bg-gray-100 min-h-screen p-4 md:p-4">
      <div class="w-full mx-auto mb-4 relative h-128 w-64">
        <div class="flex justify-between items-center mb-8">
          <span class="text-2xl font-bold text-gray-800 hover:text-blue-500 transition-colors duration-300">
            Finances
          </span>
        </div>
        <div class="flex flex-wrap bg-white" style="background-color: #FFFFFF;">
          <div class="w-full lg:w-1/2 px-2 mb-8 h-112"> 
            <div class="rounded-lg shadow bg-white h-full flex flex-col justify-center">
              <div class="text-left px-4 pt-4 mt-[-0.1rem]">
                <span class="text-lg font-semibold">Winter 2024</span>
              </div>
              <div class="w-full mx-auto mb-4 relative mt-[-12rem] pt-28">
                <div class="aspect-square rounded-full overflow-hidden pie-chart-scale" :style="pieChartStyle">
                </div>
            </div>
  
              <div class="flex justify-center items-center space-x-4 py-4 mt-[-6rem]">
                <div class="flex items-center">
                  <span class="inline-block w-3 h-3 bg-red-500 mr-1"></span><span class="text-red-500">Due</span>
                </div>
                <div class="flex items-center">
                  <span class="inline-block w-3 h-3 bg-green-500 mr-1"></span><span class="text-green-500">Paid</span>
                </div>
                <div class="flex items-center">
                  <span class="inline-block w-3 h-3 bg-yellow-500 mr-1"></span><span class="text-yellow-500">Awards</span>
                </div>
              </div>
            </div>
          </div>
  
  
          <div class="w-full lg:w-1/2 px-6 mb-8">
            <div class="bg-white rounded-lg shadow-lg p-11">
              <div class="grid grid-cols-2 gap-y-8 gap-x-6 text-left">
                <a href="#"
                  class="text-black font-bold hover:text-indigo-800 transition duration-150 ease-in-out my-3">UPass
                  Opt-in</a>
                <a href="#"
                  class="text-black font-bold hover:text-indigo-800 transition duration-150 ease-in-out my-3">Payment
                  Plans</a>
                <a href="#"
                  class="text-black font-bold hover:text-indigo-800 transition duration-150 ease-in-out my-3">Student
                  Donation Opt-out</a>
                <a href="#"
                  class="text-black font-bold hover:text-indigo-800 transition duration-150 ease-in-out my-3">Account
                  Inquiry</a>
                <a href="#"
                  class="text-black font-bold hover:text-indigo-800 transition duration-150 ease-in-out my-3">Health &
                  Dental Opt-out</a>
                <a href="#"
                  class="text-black font-bold hover:text-indigo-800 transition duration-150 ease-in-out my-3">Payments</a>
                <a href="#"
                  class="text-black font-bold hover:text-indigo-800 transition duration-150 ease-in-out my-3">Donation
                  Receipt</a>
                <a href="#"
                  class="text-black font-bold hover:text-indigo-800 transition duration-150 ease-in-out my-3">Receipts</a>
                <a href="#"
                  class="text-black font-bold hover:text-indigo-800 transition duration-150 ease-in-out my-3">Refunds</a>
                <a href="#" class="text-black font-bold hover:text-indigo-800 transition duration-150 ease-in-out my-3">Fees
                  Calendar</a>
                <div class="col-span-2">
                  <a href="#"
                    class="text-black font-bold hover:text-indigo-800 transition duration-150 ease-in-out my-3">T2202</a>
                </div>
              </div>
            </div>
          </div>
  
  
  
  
          <div class="flex-grow px-2 mb-8">
            <div class="bg-white rounded-xl shadow-xl p-6 overflow-hidden">
              <div class="border-t-8 border-black pt-10"></div>
              <div class="flex justify-between items-center border-b border-gray-300 pb-4 mb-6">
                <span class="text-lg font-bold text-gray-800">Fees Overview</span>
                <div class="relative inline-block">
                  <select v-model="selectedYear"
                    class="rounded-lg border-4 border-red-300 shadow-lg hover:border-red-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-red transition duration-200 ease-in-out appearance-none bg-white py-2 px-14 text-red-700">
                    <option value="2023">Winter 2023</option>
                    <option value="2024">Winter 2024</option>
                  </select>
  
                  <div class="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                    <svg class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </div>
  
              </div>
              <div class="flex justify-center space-x-4 mb-6">
                <button
                  :class="{ 'bg-red-500 text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50 transition duration-150 ease-in-out': activeTab === 'fees', 'bg-white text-gray-700 shadow-lg hover:shadow-red-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50 transition duration-150 ease-in-out': activeTab !== 'fees' }"
                  @click="activeTab = 'fees'" class="rounded-lg py-2 px-4"><span class="font-bold">Fees</span></button>
                <button
                  :class="{ 'bg-red-500 text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50 transition duration-150 ease-in-out': activeTab === 'studentAid', 'bg-white text-gray-700 shadow-lg hover:shadow-red-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50 transition duration-150 ease-in-out': activeTab !== 'studentAid' }"
                  @click="activeTab = 'studentAid'" class="rounded-lg py-2 px-4"><span class="font-bold">Student
                    Aid</span></button>
                <button
                  :class="{ 'bg-red-500 text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50 transition duration-150 ease-in-out': activeTab === 'awards', 'bg-white text-gray-700 shadow-lg hover:shadow-red-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50 transition duration-150 ease-in-out': activeTab !== 'awards' }"
                  @click="activeTab = 'awards'" class="rounded-lg py-2 px-4"><span
                    class="font-bold">Awards/Scholarships</span></button>
                <button
                  :class="{ 'bg-red-500 text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50 transition duration-150 ease-in-out': activeTab === 'myPay', 'bg-white text-gray-700 shadow-lg hover:shadow-red-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50 transition duration-150 ease-in-out': activeTab !== 'myPay' }"
                  @click="activeTab = 'myPay'" class="rounded-lg py-2 px-4"><span class="font-bold">My Pay</span></button>
              </div>
  
  
  
  
              <div class="overflow-x-auto max-h-[500px] overflow-y-auto">
                <table v-if="activeTab === 'fees'"
                  class="min-w-full text-sm text-left text-gray-500 border border-gray-200 rounded-lg">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                      <th class="px-6 py-3 rounded-tl-lg">Item</th>
                      <th class="px-6 py-3">Type</th>
                      <th class="px-6 py-3">Posted Date</th>
                      <th class="px-6 py-3">Charge</th>
                      <th class="px-6 py-3">Payment</th>
                      <th class="px-6 py-3 rounded-tr-lg">Refund</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in activeTabData" :key="index"
                      class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <td class="px-6 py-4">{{ item.item }}</td>
                      <td class="px-6 py-4">{{ item.type }}</td>
                      <td class="px-6 py-4">{{ item.postedDate }}</td>
                      <td class="px-6 py-4 ">{{ item.charge }}</td>
                      <td class="px-6 py-4 ">{{ item.payment }}</td>
                      <td class="px-6 py-4 ">{{ item.refund }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div v-if="activeTab === 'studentAid'" class="overflow-x-auto max-h-[500px] overflow-y-auto">
                <table
                  class="min-w-full text-sm text-left text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <thead class="text-xs text-gray-700 dark:text-gray-400 uppercase bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th class="px-6 py-3 rounded-tl-lg">Item</th>
                      <th class="px-6 py-3">Type</th>
                      <th class="px-6 py-3">Posted Date</th>
                      <th class="px-6 py-3">Charge</th>
                      <th class="px-6 py-3">Payment</th>
                      <th class="px-6 py-3 rounded-tr-lg">Refund</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in activeTabData" :key="index"
                      class="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
                      <td class="px-6 py-4">{{ item.item }}</td>
                      <td class="px-6 py-4">{{ item.type }}</td>
                      <td class="px-6 py-4">{{ item.postedDate }}</td>
                      <td class="px-6 py-4 ">{{ item.charge }}</td>
                      <td class="px-6 py-4 ">{{ item.payment }}</td>
                      <td class="px-6 py-4 ">{{ item.refund }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div v-if="activeTab === 'awards'" class="overflow-x-auto max-h-[500px] overflow-y-auto">
                <table
                  class="min-w-full text-sm text-left text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <thead class="text-xs text-gray-700 dark:text-gray-400 uppercase bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th class="px-6 py-3 rounded-tl-lg">Item</th>
                      <th class="px-6 py-3">Type</th>
                      <th class="px-6 py-3">Posted Date</th>
                      <th class="px-6 py-3">Charge</th>
                      <th class="px-6 py-3">Payment</th>
                      <th class="px-6 py-3 rounded-tr-lg">Refund</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in activeTabData" :key="index"
                      class="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
                      <td class="px-6 py-4">{{ item.item }}</td>
                      <td class="px-6 py-4">{{ item.type }}</td>
                      <td class="px-6 py-4">{{ item.postedDate }}</td>
                      <td class="px-6 py-4 ">{{ item.charge }}</td>
                      <td class="px-6 py-4 ">{{ item.payment }}</td>
                      <td class="px-6 py-4 ">{{ item.refund }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
  
              <div v-if="activeTab === 'myPay'" class="overflow-x-auto max-h-[500px] overflow-y-auto">
                <table
                  class="min-w-full text-sm text-left text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <thead class="text-xs text-gray-700 dark:text-gray-400 uppercase bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th class="px-6 py-3 rounded-tl-lg">Item</th>
                      <th class="px-6 py-3">Type</th>
                      <th class="px-6 py-3">Posted Date</th>
                      <th class="px-6 py-3">Charge</th>
                      <th class="px-6 py-3">Payment</th>
                      <th class="px-6 py-3 rounded-tr-lg">Refund</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in activeTabData" :key="index"
                      class="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
                      <td class="px-6 py-4">{{ item.item }}</td>
                      <td class="px-6 py-4">{{ item.type }}</td>
                      <td class="px-6 py-4">{{ item.postedDate }}</td>
                      <td class="px-6 py-4 ">{{ item.charge }}</td>
                      <td class="px-6 py-4 ">{{ item.payment }}</td>
                      <td class="px-6 py-4 ">{{ item.refund }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
  
  
  
            </div>
          </div>
        </div>
      </div>
    </div> -->
    <div class = "bg-grey-100 flex flex-col px-5 w-full">
        <div class="flex items-center justify-start text-2xl my-4">
          <span class="inline-block transform rotate-180 text-4xl">&#8250;</span>
          <span class="ml-2">Finances</span>
        </div>
        <div class = "flex flex-row gap-x-4">
            <div class = "flex flex-col gap-y-4"> 
                <div class = "bg-white-100 p-10 rounded-xl shadow-lg"> 
                   <div class = "text-lg mb-8"> {{ currentTerm }} </div>
                   <div class = "rounded-full w-64 h-64 mx-8" :style="pieChartStyle"></div>
                   <div class = "flex flex-row mt-8 justify-center">
                          <div class = "flex items-center mx-4">
                            <span class="inline-block w-3 h-3 bg-red-500 mr-1"></span><span class="text-red-500">Due</span>
                          </div>
                          <div class = "flex items-center mx-2">
                            <span class="inline-block w-3 h-3 bg-green-500 mr-1"></span><span class="text-green-500">Paid</span>
                          </div>
                          <div class = "flex items-center mx-4">
                            <span class="inline-block w-3 h-3 bg-yellow-500 mr-1"></span><span class="text-yellow-500">Awards</span>
                          </div>
                   </div>
                </div>
                <div class = "bg-white-100  flex flex-col p-5 rounded-xl shadow-lg h-80"> 
                    <div class = "flex flex-col flex-wrap h-64">
                    <a href="#" class="text-center text-black font-bold hover:text-indigo-800 transition duration-150 ease-in-out my-3">
                        UPass Opt-in 
                    </a>
                    <a href="#" class="text-center text-black font-bold hover:text-indigo-800 transition duration-150 ease-in-out my-3">
                        Payment Plans
                    </a>
                    <a href="#" class="text-center text-black font-bold hover:text-indigo-800 transition duration-150 ease-in-out my-3">
                        Student Donation Opt-out
                    </a>
                    <a href="#" class="text-center text-black font-bold hover:text-indigo-800 transition duration-150 ease-in-out my-3">
                        Account Inquiry
                    </a>
                    <a href="#" class="text-center text-black font-bold hover:text-indigo-800 transition duration-150 ease-in-out my-3">
                        Health & Dental Opt-out
                    </a>
                    <a href="#" class="text-center text-black font-bold hover:text-indigo-800 transition duration-150 ease-in-out my-3">
                        Payments
                    </a>
                    <a href="#" class="text-center text-black font-bold hover:text-indigo-800 transition duration-150 ease-in-out my-3">
                        Donation Receipt
                    </a>
                    <a href="#" class="text-center text-black font-bold hover:text-indigo-800 transition duration-150 ease-in-out my-3">
                        Receipts
                    </a>
                    <a href="#" class="text-center text-black font-bold hover:text-indigo-800 transition duration-150 ease-in-out my-3">
                        Refunds
                    </a>
                    <a href="#" class="text-center text-black font-bold hover:text-indigo-800 transition duration-150 ease-in-out my-3">
                        Fees Calendar
                    </a>
                    </div>
                    <a href="#" class="text-center text-black font-bold hover:text-indigo-800 transition duration-150 ease-in-out my-3">
                        T2202
                    </a>
                </div>
            </div>
            <div class = " bg-white-100 p-5 rounded-xl shadow-lg"> 
              <div class="relative flex justify-end mr-4 mb-8">
                  <select v-model="selectedTerm"
                      class="rounded-lg border-2 focus:outline-none 
                      focus:ring-2 focus:ring-gray-600 focus:border-red transition duration-200 ease-in-out appearance-none bg-white py-2 w-48 pr-10 pl-2 text-left">
                      <option v-for="(value,key) in terms" :value="key" :key="key" class="mb-2">
                          {{ key }}
                      </option>
                  </select>
                  <svg class="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 pointer-events-none text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
              </div>


                  <div class = "grid grid-cols-5">
                    <div class = " text-center rounded-t-2xl p-4 bg-white-100 border border-gray-300" v-bind:class = "{'bg-gray-300' : activeTab =='all'}" @click = "activeTab = 'all' "> All</div>
                    <div class = " text-center rounded-t-2xl p-4 bg-white-100 border border-gray-300" v-bind:class = "{'bg-gray-300' : activeTab =='fee'}" @click = "activeTab = 'fee' "> Fees</div>
                    <div class = " text-center rounded-t-2xl p-4 bg-white-100 border border-gray-300" v-bind:class = "{'bg-gray-300' : activeTab =='scholarship'}" @click = " activeTab = 'scholarship'"> Scholarships </div>
                    <div class = " text-center rounded-t-2xl p-4 bg-white-100 border border-gray-300" v-bind:class = "{'bg-gray-300' : activeTab =='award'}" @click = "activeTab = 'award'"> Awards </div>
                    <div class = " text-center rounded-t-2xl p-4 bg-white-100 border border-gray-300" v-bind:class =  "{'bg-gray-300' : activeTab =='payment'}" @click = "activeTab = 'payment'"> My Pay </div>
                  </div>
                  <div class = "flex flex-col rounded-lg shadow-md border border-gray-300 rounded-tl-none">
                    <div class = "flex flex-row">
                        <div class = "p-4 text-left w-64"> Item </div>
                        <div class = "p-4 text-left w-36"> Type </div>
                        <div class = "p-4 text-left w-36"> Posted Date </div>
                        <div class = "p-4 text-left w-36"> Charge </div>
                        <div class = "p-4 text-left w-36"> Payment </div>
                        <div class = "p-4 text-left w-36"> Refund </div>
                    </div>
                    <div v-for= '(item, index) in terms[selectedTerm]' :key="index">
                        <div v-if="item.type == activeTab || activeTab == 'all'" class = "flex flex-row border-t-2 border-gray-200">
                            <div class = "p-4 text-left w-64"> {{ item.name }} </div>
                            <div class = "p-4 text-left w-36"> {{ item.type }} </div>
                            <div class = "p-4 text-left w-36"> {{ item.date }} </div>
                            <div class = "p-4 text-left w-36"> {{ paymentType(item.type) == 'charge' ? item.amount : 0}} </div>
                            <div class = "p-4 text-left w-36"> {{ paymentType(item.type) == 'payment' ? item.amount  : 0 }} </div>
                            <div class = "p-4 text-left w-36"> {{ paymentType(item.type) == 'refund' ? item.amount  : 0 }} </div>
                        </div>
                    </div>
                  </div>

            </div>
        </div>
    </div>"
  </template>
  
  <script>
  export default {
    name: 'FinanceBreakdown',
    data() {
      return {
        payed: 5000,
        due: 5000,
        awards: 5000,
        currentTerm: 'Winter 2024',
        selectedTerm: 'Winter 2024',
        activeTab: 'all',
        terms:{
            "Winter 2024": [
                {
                    "name" : "CIBC Stdnt Pay Tuition & General Fees",
                    "date" : "2020-01-01",
                    "amount" : 5000,
                    "type": "payment"
                },
                {
                    "name" : "Tutution Fees",
                    "date" : "2020-01-03",
                    "amount" : 5000,
                    "type": "fee"
                }
            ],
            "Winter 2023": [
                {
                    "name" : "CIBC Stdnt Pay Tuition & General Fees",
                    "date" : "2020-01-01",
                    "amount" : 5000,
                    "type": "payment"
                },
                {
                    "name" : "Tutution Fees",
                    "date" : "2020-01-03",
                    "amount" : 5000,
                    "type": "fee"
                }
            ],
            "Fall 2023": [
                {
                    "name" : "Brilliant student award",
                    "date" : "2020-07-01",
                    "amount" : 5000,
                    "type": "award"
                },
                {
                    "name" : "Tutution Fees",
                    "date" : "2020-08-03",
                    "amount" : 5000,
                    "type": "fee"
                }
            ],
        },
        pieChartColors: {
          due: 'red',
          paid: 'green',
          awards: 'yellow',
        },
        pieChartSegments: {
          due: { start: '0%', end: '60%' },
          paid: { start: '60%', end: '80%' },
          awards: { start: '80%', end: '100%' },
        },
      };
    },
    methods: {
      paymentType(type){
            if(type === 'scholarship'){
                return 'payment'
            }
            if(type === 'award'){
                return 'payment'
            }
            if (type === 'payment'){
                return 'payment'
            }
            if(type === 'fee'){
                return 'charge'
            }
            else{
                return 'refund'
            }
      }
    },
    computed: {
      pieChartStyle() {
        let gradient = 'conic-gradient(';
        for (const [key, segment] of Object.entries(this.pieChartSegments)) {
          const color = this.pieChartColors[key];
          gradient += `${color} ${segment.start}, ${color} ${segment.end}, `;
        }
        gradient = gradient.slice(0, -2) + ')';
        return { background: gradient };
      }
    },
    created(){
      this.$emit('show-navbar')
      this.$emit('show-search')
      this.$emit('show-profile')
    }
  };
  
  </script>
  
  
  <!-- <style scoped>.pie-chart-scale {
    @apply scale-50;
  }
  
  
  .transform-scale {
    @apply scale-50;
  }</style> -->