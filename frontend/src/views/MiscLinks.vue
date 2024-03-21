<template>
    <div class="ml-4">
      <div v-for="(groupKey, index) in sortedGroupKeys" :key="index" class="text-left text-red-500 mb-4">
        <h3 class="font-bold">{{ groupKey }}</h3>
        <a v-for="link in linkGroups[groupKey]" :key="link.name" :href="link.url" class="block hover:underline">{{ link.name }}</a>
      </div>
    </div>
  </template>  
  
  <script>
  export default {
    data() {
      return {
        links: [
          {name: 'Home', url: 'https://www.google.com'},
          {name: 'About Us', url: 'https://www.google.com'},
          {name: 'Admissions', url: 'https://www.google.com'},
          {name: 'Academic Programs', url: 'https://www.google.com'},
          {name: 'Faculty', url: 'https://www.google.com'},
          {name: 'Research', url: 'https://www.google.com'},
          {name: 'Student Life', url: 'https://www.google.com'},
          {name: 'Events', url: 'https://www.google.com'},
          {name: 'Alumni', url: 'https://www.google.com'},
          {name: 'Careers', url: 'https://www.google.com'},
          {name: 'Library', url: 'https://www.google.com'},
          {name: 'News', url: 'https://www.google.com'},
          {name: 'Support Services', url: 'https://www.google.com'},
          {name: 'Campus Store', url: 'https://www.google.com'},
          {name: 'Contact Us', url: 'https://www.google.com'},
          {name: 'FAQ', url: 'https://www.google.com'},
          {name: 'Financial Aid', url: 'https://www.google.com'},
          {name: 'International Students', url: 'https://www.google.com'},
        ],
        linkGroups: {}
      };
    },
    created() {
      this.$emit('show-navbar')
      this.$emit('show-search')
      this.$emit('show-profile')
      this.groupLinks();
    },
    computed: {
    sortedGroupKeys() {
      return Object.keys(this.linkGroups).sort();
    }
  },
  methods: {
    groupLinks() {
      this.links.forEach(link => {
        const firstLetter = link.name.charAt(0).toUpperCase();
        if (!this.linkGroups[firstLetter]) {
          this.linkGroups[firstLetter] = [];
        }
        this.linkGroups[firstLetter].push(link);
      });
    }
  }
};
</script>