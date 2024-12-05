<!-- Please remove this file from your project -->
<template lang="pug">
  v-row(v-if="textBox.title")
    v-col
      v-card.textBox(flat)
        v-card-text.pa-0
          p.textBoxTitle(v-html="textBox.title")
          p.textBoxText(v-html="textBox.text")
</template>

<script>
export default {
  props: ['textBox'],
}
</script>

<style lang="sass" scoped>
.textBox

  background-color: transparent // Removed background
  border: none // Removed border
    max-width: 700px
     margin: 0 auto
   
  


</style>
