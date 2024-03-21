<template>
    <div class = "fixed w-screen h-screen z-30 bg-black-100 inset-0 opacity-50">
       
    </div>
    <div class = "fixed w-2/6 h-96 px-12 -translate-y-2/4 -translate-x-2/4 left-1/2 top-1/2 bg-white-100 z-50 opacity-100 rounded-2xl">
        <img src = "../assets/unilogo.png" class = "w-64 -ml-5 mt-7"/> 
        <div class = "mt-5 mb-5 text-left font-extrabold italic text-3xl">You Have Been Logged Out</div>
        <div class = "text-left  font-medium text-lg">Due to inactivity you have been logged out. Please sign in again to resume session.</div>
        <router-link to = "/login" class = "w-32 border-2 border-red-100 rounded-md text-red-100 hover:bg-red-100 hover hover:text-white-100 drop-shadow-sm absolute bottom-12 right-12" @click="savePage()">Login</router-link>
    </div>
</template>

<script>
    export default{
        name : 'LogoutOverlay',
        methods: {
            savePage() {
                this.$cookies.set('lastPage', this.$route.path)
            }
        }
    }
</script>