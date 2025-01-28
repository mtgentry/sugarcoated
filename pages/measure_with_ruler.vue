<template lang="pug">
v-row#main.flex-column(justify="center" align="center")
  v-col(cols="12")
    .images-container
      img(src="/images/measure_1.jpg" alt="Jar measurement 1" class="jar-image")
      img(src="/images/measure_2.jpg" alt="Jar measurement 2" class="jar-image")
</template>

<script>
export default {}
</script>

<style lang="sass" scoped>
#main
  padding: 51px 0 100px 0

.images-container
  display: flex
  gap: 20px
  justify-content: center
  flex-wrap: wrap
  width: calc(100% - 40px)
  margin: 0 auto
  padding: 0 20px

.jar-image
  width: 100%
  max-width: 600px
  height: auto

@media (min-width: 1240px)
  .jar-image
    width: calc(50% - 10px)  // Accounts for the 20px gap between images

@media (max-width: 1239px)
  .images-container
    flex-direction: column
    align-items: center
</style>