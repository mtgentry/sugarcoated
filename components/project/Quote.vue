<template lang="pug">
  v-row(justify="center")
    v-col(v-if="quote.text" cols="12" data-aos="fade-up")
      .quote-container
        .quote-text(v-html="formattedQuote")
        p.quote-author(v-html="quote.author")
</template>

<script>
export default {
  props: ['quote'],
  computed: {
    formattedQuote() {
      const [firstLine, ...rest] = this.quote.text.split('\n')
      return `<span class="first-line">${firstLine}</span><span class="remaining-text">${rest.join('\n')}</span>`
    }
  }
}
</script>