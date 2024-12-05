<template lang="pug">
v-row.section(:class="{ slim: !section.media, 'slim-padding': slim_padding }")
  v-col(v-if="section.text || section.title" :data-aos="section.animation ? section.animation : 'fade-up'" cols="12")
    String(:texts="section.text" :size="section.size" :title="section.title" :align="section.align")
  
  v-col(v-if="section.textBox" :data-aos="section.animation ? section.animation : 'fade-up'" cols="12")
    TextBox(:textBox="section.textBox")
  
  v-col(v-if="section.column" :data-aos="section.animation ? section.animation : 'fade-up'" cols="12")
    Column(:items="section.column.items" :animation="section.animation")
  
  template(v-else-if="section.media")
    v-col(v-for="media in section.media" :key="media.name" :cols="media.cols || Math.floor(12 / section.media.length)" :data-aos="section.animation ? section.animation : 'fade-up'")
      Media(:media="media" :project_name="$route.params.project")
  
  v-col(v-if="section.line" cols="12")
    hr
  
  v-col(v-if="section.quote" cols="12" :data-aos="section.animation ? section.animation : 'fade-up'")
    Quote(:quote="section.quote")
  
  v-col.w-100(v-if="section.carousel" cols="12" 
    data-aos="fade-up"
    data-aos-duration="800"
    data-aos-offset="150")
    Carousel(:section="section")
  
  v-col.w-100(v-if="section.credits" cols="12" :data-aos="section.animation ? section.animation : 'fade-up'")
    Credits(:credits="section.credits")
  
  v-col.w-100(v-if="section.faq" cols="12" :data-aos="section.animation ? section.animation : 'fade-up'")
    Faq(:faqs="section.faq")
  
  v-col.w-100(v-if="section.button" cols="12" :data-aos="section.animation ? section.animation : 'fade-up'")
    Button(:button="section.button")
  
  v-col.w-100(v-if="section.form" cols="12" :data-aos="section.animation ? section.animation : 'fade-up'")
    MailchimpForm
  
  v-col.w-100(v-if="section.svgs" cols="12" :data-aos="section.animation ? section.animation : 'fade-up'")
    SVGs
  
  v-col.w-100(v-if="section.cta" cols="12" :data-aos="section.animation ? section.animation : 'fade-up'")
    CTA
  
  v-col.w-100(v-if="section.pricing" cols="12" :data-aos="section.animation ? section.animation : 'fade-up'")
    Pricing
  
  v-col.w-100(v-if="section.faq2" cols="12" :data-aos="section.animation ? section.animation : 'fade-up'")
    Faq2
  
  v-col.w-100(v-if="section.planscta" cols="12" :data-aos="section.animation ? section.animation : 'fade-up'")
    PlansCTA
  
  v-col.w-100(v-if="section.calendly" cols="12" :data-aos="section.animation ? section.animation : 'fade-up'")
    calendly
  
  v-col.w-100(v-if="section.audit" cols="12" :data-aos="section.animation ? section.animation : 'fade-up'")
    audit
  
  v-col.w-100(v-if="section.beforeafter" cols="12" :data-aos="section.animation ? section.animation : 'fade-up'")
    beforeafter
</template>

<script>
import Media from "@/components/Media.vue";
import Quote from "@/components/project/Quote.vue";
import Credits from "@/components/project/Credits.vue";
import Faq from "@/components/project/Faq.vue";
import Button from "@/components/project/Button.vue";
import String from "@/components/project/String.vue";
import SVGs from "@/components/SVGs.vue";
import CTA from "@/components/CTA.vue";
import Pricing from "@/components/Pricing.vue";
import Faq2 from "@/components/Faq2.vue";
import PlansCTA from "@/components/PlansCTA.vue";
import TextBox from "@/components/project/TextBox.vue";
import Carousel from "@/components/carousel.vue";
import Column from "@/components/project/Column.vue";

export default {
  props: {
    section: {
      type: Object,
      required: true
    },
    slim_padding: {
      type: Boolean,
      default: false
    }
  },
  components: {
    TextBox,
    String,
    Quote,
    Media,
    Credits,
    Faq,
    Button,
    SVGs,
    Pricing,
    CTA,
    Carousel,
    Faq2,
    PlansCTA,
    Column
  }
}
</script>

<style lang="sass" scoped>
.section
  padding: 20px 0
  width: 100%
  
  &.slim-padding
    padding: 20px 0

  p:last-child
    margin-bottom: 0

  @media (max-width: 768px)
    padding: 30px 0

.slim
  max-width: 659px
  margin: 0 auto

hr
  border-color: #83807C
  opacity: 0.5

.w-100
  width: 100%
</style>