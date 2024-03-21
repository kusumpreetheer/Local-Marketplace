<template>
  <div class="flex flex-col w-96 bg-white-100 z-20 rounded-lg shadow-md fixed inset-0 h-screen p-8"> <!-- Added shadow effect -->
    <img src="@/assets/unilogo.png" alt="University Logo" class="h-24 my-4 self-center">
    
    <div class="flex flex-col mt-4 space-y-4"> <!-- Increased vertical spacing -->
      <!-- Updated class name to nav-link -->
      <router-link to="/dashboard" class="group flex flex-row items-center p-4 
      border border-white-300 shadow-md mt-4 rounded-xl text-black-100 hover:bg-grey-100" v-bind:class="{'bg-red-100 text-white-100 hover:bg-red-100' : selected === 'dashboard'}">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 mx-8" v-bind:class="{'fill-white-100' : selected === 'dashboard'}" viewBox="0 -960 960 960">
          <path d="M160-120v-480l320-240 320 240v480H560v-280H400v280H160Z"/>
        </svg>
        <span class="text-2xl">Dashboard</span>
      </router-link>
      
      <router-link to="/academics" class="group flex flex-row items-center p-4 
      border border-white-300 shadow-md mt-4 rounded-xl hover:bg-grey-100" v-bind:class="{'bg-red-100 text-white-100 hover:bg-red-100'  : selected === 'academics'}">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 mx-8" v-bind:class="{'fill-white-100' : selected === 'academics'}" viewBox="0 -960 960 960">
          <path d="M840-280v-276L480-360 40-600l440-240 440 240v320h-80ZM480-120 200-272v-200l280 152 280-152v200L480-120Z"/>
        </svg>
        <span class="text-2xl group-hover:text-white focus:text-white">Academics</span>
      </router-link>
      
      <router-link to="/application" class="group flex flex-row items-center p-4 border border-white-300 shadow-md mt-4 rounded-xl hover:bg-grey-100"
      v-bind:class="{'bg-red-100 text-white-100 hover:bg-red-100' : selected === 'application'}">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 mx-8" v-bind:class="{'fill-white-100' : selected === 'application'}" viewBox="0 -960 960 960">
          <path d="M400-400h160v-80H400v80Zm0-120h320v-80H400v80Zm0-120h320v-80H400v80Zm-80 400q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320ZM160-80q-33 0-56.5-23.5T80-160v-560h80v560h560v80H160Z"/>
        </svg>
        <span class="text-2xl group-hover:text-white focus:text-white">Applications</span>
      </router-link>
      
      <router-link to="/misc" class="group flex flex-row items-center p-4 border border-white-300 shadow-md mt-4 rounded-xl hover:bg-grey-100"
      v-bind:class="{'bg-red-100 text-white-100 hover:bg-red-100' : selected === 'misc'}">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 mx-8" v-bind:class="{'fill-white-100' : selected === 'misc'}" viewBox="0 -960 960 960">
          <path d="M200-280v-280h80v280h-80Zm240 0v-280h80v280h-80ZM80-120v-80h800v80H80Zm600-160v-280h80v280h-80ZM80-640v-80l400-200 400 200v80H80Z"/>
        </svg>
        <span class="text-2xl group-hover:text-white focus:text-white">Around U</span>
      </router-link>
    </div>
    
    <div class="mt-auto flex justify-between w-full p-10"> 
      <router-link to="/aboutus">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 fill-grey-200" viewBox="0 -960 960 960">
          <path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
        </svg>
      </router-link>
      
      <router-link to="/profile" class="">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 fill-grey-200" viewBox="0 -960 960 960">
          <path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm112-260q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Z"/>
        </svg>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppNavbar',
  props: ['selected'],
  computed  : {
    selectedLink(link){
      return this.selected === link
    }
  }
}
</script>

<style scoped>
/* Added nav-link style class */
.nav-link {
  width: 80%; /* Adjusted width to 80% of navbar width */
  margin-left: auto; /* Right align to center it */
  margin-right: auto; /* Left align to center it */
  border-radius: 20px; /* Made border more rounded */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.nav-link:hover {
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}
</style>
