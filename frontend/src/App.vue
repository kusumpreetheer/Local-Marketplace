<template>
  <div class="flex flex-row w-screen h-screen overflow-hidden bg-grey-100" v-bind:class="{'pl-96':navbarVisible}">
    <AppNavbar v-if="navbarVisible" :selected="selected" />
    <div class="w-full">
      <div class="flex items-center justify-start py-4 px-4 bg-gray-200">
        <div class="flex items-center space-x-2 bg-white-100 rounded-lg shadow-md p-2 w-2/5 ml-5 h-11">
          <input type="text" v-if="navbarVisible" class="flex-grow outline-none rounded-l-full px-4 py-2" placeholder="Search" v-model="searchTerm" />
          <button v-if="navbarVisible" class="bg-transparent p-2 rounded-full text-gray-100 hover:text-gray-700 focus:outline-none" @click="showSearchResults">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 50 50" fill="#4a5568">
            <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
          </svg>
          </button>
        </div>
        <ProfilePreview v-if="navbarVisible" class="ml-auto mr-5" />
      </div>

      <router-view
        class="w-full"
        @show-navbar="showNavbar"
        @hide-navbar="hideNavbar"
        @logout-possible="logoutPossible = true"
        @logout-not-possible="logoutPossible = false"
        @toggle-selected="toggleSelected"
      />
      <LogoutOverlay v-if="logout" />
    </div>
  </div>
</template>

<script>
import AppNavbar from './components/AppNavbar'
import ProfilePreview from './components/ProfilePreview.vue'
import LogoutOverlay from './components/LogoutOverlay.vue'
export default {
  name: 'App',
  components: {
    AppNavbar,
    ProfilePreview,
    LogoutOverlay
},
  data: () => {
    return{
      navbarVisible : false,
      selected: "",
      logoutPossible: true,
      noCookie : false,
      searchTerm: "",
    }
  },
  computed: {
    logout(){
      return this.logoutPossible && this.noCookie
    }
  },
  methods: {
      showNavbar(){
        this.navbarVisible = true
      },
      hideNavbar(){
        this.navbarVisible = false
        this.searchTerm = ""
      },
      showSearchResults(){
        console.log("Searching for " + this.searchTerm)
      },
      toggleSelected(selected){
        if(selected === "grades"){
          this.selected = 'dashboard'
        }
        else if(selected === "finances"){
          this.selected = 'dashboard'
        }
        else if(selected === "profile"){
          this.selected = 'dashboard'
        }
        else{
          this.selected = selected
        }
      },
      resetAuth(){
        const token = this.$cookies.get('auth-token')
        if(token){
          this.$cookies.set('auth-token', token)
          return true;
        }
        else{
          return false;
        }
      },
      eventHandler(){
        if(!this.resetAuth()){
          this.noCookie = true
        }
        else{
          this.noCookie = false
        }
        //console.log(this.noCookie && this.logoutPossible)
      }
  },
  created(){
    
  },
  mounted(){
    document.addEventListener('click', this.eventHandler)
    document.addEventListener('keydown', this.eventHandler)
    document.addEventListener('mousemove', this.eventHandler)
  },
  beforeUnmount(){
    document.removeEventListener('click', this.eventHandler)
    document.removeEventListener('keydown', this.eventHandler)
    document.removeEventListener('mousemove', this.eventHandler)
  }
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
