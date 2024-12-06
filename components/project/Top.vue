<!-- Please remove this file from your project -->
<template lang="pug">
  div.top(:style="{color: textColor}")
    div(v-html="text" )

</template>

<script>
import {mapState} from "vuex";

export default {
  props: ['text'],
  computed: {
    ...mapState(['textColor'])
  },
}
</script>

