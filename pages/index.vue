<script>
import ExtraPage from "@/components/mixins/ExtraPage.vue";
import Carousel from "@/components/carousel.vue";


export default {
  extends: process.env.IS_AGENCY ? ExtraPage : Homepage,
  data() {
    return {
      page_name: process.env.IS_AGENCY ? 'unlimited_design' : 'home', // Adjust the 'home' value as necessary for the portfolio variation
    };
  },
};
</script>


<style lang="sass" >
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
