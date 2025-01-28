<template lang="pug">
v-row#main.flex-column(justify="center" align="center")
  v-col(cols="12")
    .image-container
      .image-with-caption
        img(src="/images/specs_file.jpg" alt="Double Image" class="mason-image")
        .image-caption This is a sample spec sheet
</template>

<script>
export default {
  // Empty since we don't need any data or methods for a static image
}
</script>

<style lang="sass" scoped>
#main
  padding: 51px 0 100px 0

.image-container
  width: calc(100% - 40px)
  max-width: 1200px
  margin: 0 auto
  padding: 0 20px

.mason-image
  width: 100%
  height: auto
  display: block
  margin-bottom: 20px

.image-caption
  text-align: center
  margin-bottom: 30px
  font-size: 18px
  font-family: 'Lora', serif
  font-style: italic
  letter-spacing: .5px
  color: white
</style>