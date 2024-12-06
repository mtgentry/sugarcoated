<template lang="pug">
  v-row(justify="center" align="center" v-if="project")
    v-col(cols="12")
      Top(:text="project.header")
    v-col(cols="12")
      Section(v-for="section in project.layout" :section="section" :key="section.name")
    Footer
</template>

<script>
import Top from '~/components/project/Top.vue'
import Section from "@/components/project/Section.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Section,
    Top,
    Footer
  },
  fetchOnServer: true,
  transition: 'fade',
  
  async asyncData({ store, params, $axios, error }) {
    try {
      let project = store.state.projects ? store.state.projects[params.project] : null;
      
      if (!project) {
        const response = await $axios.get(`/domains/agency/work/${params.project}/layout.json`);
        project = response.data;
      }
      
      if (!project) {
        return error({ statusCode: 404, message: 'Project not found' });
      }

      store.commit('updateState', {
        field: 'backgroundColor', 
        value: project.backgroundColor
      });
      store.commit('updateState', {
        field: 'textColor', 
        value: project.textColor
      });
      store.commit('updateState', {
        field: 'project', 
        value: project
      });

      return { project };
    } catch (e) {
      return error({ statusCode: 404, message: 'Project not found' });
    }
  },

  head() {
    if (!this.project) return {};
    
    return {
      title: this.project.cover.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.project.seo_description
        }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
.col
  display: flex
  align-items: center
  flex-direction: column
</style>