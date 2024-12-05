<script>
import ExtraPage from "@/components/mixins/ExtraPage.vue";

export default {
  extends: ExtraPage,
  data() {
    return {
      page_name: 'unlimited_design',
    };
  },
};
</script>

<style lang="sass">
.agency
  h1
    margin-bottom: -50px    // Reduced from default
    padding-bottom: 0      // Remove any padding
    font-weight: 100 !important
    
  h2
    margin-top: 0         // Remove top margin
    font-size: 18px
    line-height: 120%
    font-weight: 100 !important
    opacity: 0.8
    
  p
    margin: 0!important
    
  #button
    margin-bottom: 138px!important
  #video
    margin-bottom: 75px!important
  hr
    margin-bottom: 138px!important
</style>