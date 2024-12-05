<!-- Please remove this file from your project -->
<template>
  <div>
    
  
  </div>
</template>

<script>
export default {
  name: 'Logo',
  props: {
    color: {
      type: String,
      default: '#FFFFFF'
    }
  },
  computed: {
    is_agency() {
      return process.env.IS_AGENCY
    }
  }
}
</script>

<style scoped lang="sass">
path
  transition: fill 1s ease-in-out
</style>
