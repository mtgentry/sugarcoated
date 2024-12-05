// Column.vue
<template lang="pug">
.column-wrapper
  v-row(:data-aos="animation")
    v-col(v-for="(item, index) in items" :key="index" cols="12")
      TextBox(:textBox="item.textBox")
</template>

<script>
import TextBox from "@/components/project/TextBox.vue";

export default {
  name: 'Column',
  components: {
    TextBox
  },
  props: {
    items: {
      type: Array,
      required: true
    },
    animation: {
      type: String,
      default: 'fade-up'
    }
  }
}
</script>

<style lang="sass" scoped>
.column-wrapper
  width: 100%
  max-width: 500px
  margin: 0 auto
  

  .col 

  
  .v-col
    padding: 14px 16px
    
    @media (max-width: 600px)
      padding: 16px
      
  .textBox
    height: 100%
    max-width: 700px
    margin: 0 auto
</style>

