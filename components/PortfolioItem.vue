<template lang="pug">
  div.item(:data-aos=`project.name === "francescas" ? "" : "fade-up"`)
    nuxt-link(:to="`/work/${project.name}`")
      Media(:project_name="project.name" :media="project.cover.media")
      div.pt-2.title(v-html="project.cover.title")
      div.categories(v-html="project.cover.categories")

</template>

<script>
import Media from "@/components/Media.vue";

export default {
  props: ['project'],
  components: {
    Media,
  }

}
</script>

<style lang="sass" scoped>





.categories


  font-size: 16px
  color: #948F8B


.item
  align-items: start

  @media (max-width: 768px)
    width: unset
    max-height: 400px

</style>
