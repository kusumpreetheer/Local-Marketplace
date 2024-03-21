<!-- This is the SchedBuilder component that toggles when the route is set to schedule -->
<template>
    <div class = "component">
        This is the Sched Builder Component
        Theres probably ALOTTT of stuff that needs to go here :)
        <router-link to ="/dashboard" class = "btn">
            Let's go back to the dashboard
        </router-link>
    </div>
</template>

<script>
    export default{
        name : 'SchedBuilder',
        created(){
            this.$emit('hide-navbar')
        }
    }
</script>