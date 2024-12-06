<template lang="pug">
 v-row#extra(justify="center" align="center" v-if="project" class="agency")
   v-col(cols="12")
     Section(v-for="(section, i) in project.layout" slim_padding
       :section="section" :key="i" :style="{color: textColor}")
   Footer
</template>

<script>
import Section from "@/components/project/Section.vue";
import Footer from "@/components/Footer.vue";
import {mapState} from "vuex";
import MailchimpForm from "@/components/MailchimpForm.vue";

export default {
 components: {
   Section,
   Footer,
   MailchimpForm
 },
 fetchOnServer: false,
 transition: 'fade',
 data() {
   return {
     project: {
       layout: [],
       seo_description: ''
     },
     page_name: null
   }
 },
 async created() {
   try {
     const pageName = this.page_name || this.$route.name;
     console.log('Fetching data for page:', pageName);
     const baseUrl = process.client ? window.location.origin : process.env.BASE_URL;
     
     // Add path logic
     const path = pageName === 'unlimited_design' 
       ? `${baseUrl}/domains/agency/pages/${pageName}/layout.json`
       : `${baseUrl}/domains/agency/${pageName}/layout.json`;

     const response = await this.$axios.get(path);
     console.log('Fetched data:', response.data);
     this.project = response.data;
   } catch (e) {
     console.error('Error fetching data:', e);
     console.error('Current BASE_URL:', process.env.BASE_URL);
     console.error('Full requested URL:', `${baseUrl}/domains/agency/${this.page_name}/layout.json`);
   }
 },
 head() {
   return {
     meta: [
       {
         hid: 'description',
         name: 'description',
         content: this.project?.seo_description || ''
       }
     ]
   };
 },
 computed: {
   ...mapState(['textColor'])
 }
}
</script>

<style lang="sass" scoped>
#extra
 padding-top: 100px

p
 font-size: 30px

.col
 display: flex
 align-items: center
 flex-direction: column
</style>