<template>

    <div class = "bg-primary">
        <div class = "text-secondary-100">This is the Application Homepage Component</div>     
        <div class = "text-secondary-100">I setup some custom colors I defined in tailwind config.js</div>
    </div>
</template>

<script>

    export default{
        name : 'ApplicationHomepage',
        components:{
            
        },
        created(){
            this.$emit('show-navbar')
            this.$emit('toggle-selected', 'application')
        }
    }
</script>