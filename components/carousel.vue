<template lang="pug">
  .carousel-wrapper.relative.w-screen.overflow-hidden(:style="wrapperStyle")
    .carousel.flex(:style="carouselStyle")
      .carousel-content.flex(:style="carouselContentStyle" ref="content")
        .image-wrapper.rounded-lg.overflow-hidden(
          v-for="(image, index) in displayedImages"
          :key="`${image.src}-${index}`"
          :style="getContainerStyle(image)"
        )
          img.carousel-image.object-cover(
            :src="image.src",
            :alt="image.alt",
            loading="lazy",
            class="transition-transform duration-300",
            @load="handleImageLoad(image.src)",
            @error="handleImageError(image.src)"
          )
</template>

<script>
export default {
  name: 'Carousel',
  props: {
    section: {
      type: Object,
      required: true,
      default: () => ({
        carousel: {
          images: [],
          backgroundColor: '#222533',
          spacing: 16
        }
      })
    },
    speed: {
      type: Number, // Speed in pixels per second
      default: 100 // Adjust as needed for desired scrolling speed
    }
  },
  data() {
    return {
      displayedImages: [],
      singleSetWidth: 0,
      resizeTimeout: null,
      currentPosition: 0, // For JavaScript-controlled scrolling
      animationFrameId: null, // To manage requestAnimationFrame
      lastFrameTime: null, // To track time between frames
      imagesLoaded: 0, // Track the number of loaded images
      uniqueImagesCount: 0 // Number of unique images
    }
  },
  computed: {
    wrapperStyle() {
      return {
        backgroundColor: this.section.carousel.backgroundColor || ''
      }
    },
    carouselStyle() {
      return {
        // No animation applied here; animation is handled in carousel-content
      }
    },
    carouselContentStyle() {
      return {
        display: 'flex',
        width: '200%', // Two sets of images
        // Removed the animation property to prevent conflicts
      }
    }
  },
  mounted() {
    this.initializeCarousel()
    window.addEventListener('resize', this.handleResize)
    // Start scrolling only after all unique images are loaded
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize)
    cancelAnimationFrame(this.animationFrameId) // Clean up animation frame
  },
  methods: {
    initializeCarousel() {
      const baseImages = this.section.carousel.images
      if (!baseImages.length) {
        console.warn('No images provided for the carousel.')
        return
      }

      // Duplicate images once for seamless scrolling (total two sets)
      // Append a unique query parameter to duplicated images to ensure @load fires
      const duplicateImages = baseImages.map(img => ({
        ...img,
        src: img.src + '?dup=1' // Modify as needed to ensure uniqueness
      }))
      this.displayedImages = [...baseImages, ...duplicateImages]
      console.log('Displayed Images:', this.displayedImages)

      // Reset imagesLoaded counter
      this.imagesLoaded = 0

      // Set unique images count
      this.uniqueImagesCount = baseImages.length

      this.$nextTick(() => {
        if (this.$refs.content) {
          // Calculate the width of a single set of images
          this.singleSetWidth = this.calculateSetWidth(baseImages)
          console.log('Single Set Width:', this.singleSetWidth)

          // Start scrolling after calculating dimensions
          this.startScrolling()
        }
      })
    },
    calculateSetWidth(images) {
      const totalWidth = images.reduce((acc, img) => {
        const width = img.width ? img.width : 0 // Use 0 if width is not specified
        return acc + width + this.section.carousel.spacing
      }, 0)
      console.log('Calculated Set Width:', totalWidth)
      return totalWidth
    },
    getContainerStyle(image) {
      return {
        width: `${image.width}px`,
        height: `${image.height}px`,
        marginRight: `${this.section.carousel.spacing}px`,
        flexShrink: 0 // Prevent flex items from shrinking
      }
    },
    handleResize() {
      // Debounce resize handling to improve performance
      clearTimeout(this.resizeTimeout)
      this.resizeTimeout = setTimeout(() => {
        console.log('Window resized. Reinitializing carousel...')
        this.initializeCarousel()
      }, 300)
    },
    startScrolling() {
      const scroll = (timestamp) => {
        if (!this.lastFrameTime) {
          this.lastFrameTime = timestamp
        }
        const deltaTime = (timestamp - this.lastFrameTime) / 1000 // Convert to seconds
        this.lastFrameTime = timestamp

        // Update current position based on speed and elapsed time
        this.currentPosition -= this.speed * deltaTime

        // Reset position to 0 when scrolled past one set
        if (Math.abs(this.currentPosition) >= this.singleSetWidth) {
          console.log('Scrolled past one set. Resetting position.')
          this.currentPosition += this.singleSetWidth
        }

        // Apply the transform using translateX for better compatibility
        this.$refs.content.style.transform = `translateX(${this.currentPosition}px)`

        // Request the next frame
        this.animationFrameId = requestAnimationFrame(scroll)
      }
      // Start the animation
      this.animationFrameId = requestAnimationFrame(scroll)
      console.log('Started scrolling animation.')
    },
    handleImageLoad(src) {
      console.log(`Image loaded: ${src}`)
      // Only count unique images
      if (this.section.carousel.images.some(img => img.src === src)) {
        this.imagesLoaded += 1
        console.log(`Images loaded: ${this.imagesLoaded}/${this.uniqueImagesCount}`)
        if (this.imagesLoaded >= this.uniqueImagesCount) {
          console.log('All unique images loaded. Starting scrolling animation.')
          // Scroll was already started in initializeCarousel after nextTick
          // If you prefer to start here, you can adjust the logic accordingly
        }
      }
    },
    handleImageError(src) {
      console.error(`Failed to load image: ${src}`)
    }
  }
}
</script>

<style lang="sass" scoped>
.carousel-wrapper
  position: relative
  width: 100vw
  margin-left: 50%
  transform: translateX(-50%)
  overflow: hidden
  background-color: inherit
  margin-bottom: 75px

.carousel
  display: flex
  width: 100%
  /* No animation here */

.carousel-content
  display: flex
  flex-wrap: nowrap
  will-change: transform // Hint the browser for optimization

.image-wrapper
  border-radius: 0.5rem // Matches `rounded-lg`
  overflow: hidden
  display: inline-block
  flex-shrink: 0 // Prevent shrinking
  position: relative // Establish a new positioning context

.carousel-image
  display: block
  width: 100%
  height: 100%
  object-fit: cover
  transition: transform 0.3s ease
  backface-visibility: hidden // Improve rendering in Safari

  &:hover
    transform: scale(1.05) translateZ(0) // Force hardware acceleration

@media (max-width: 768px)
  .carousel-content
    flex-wrap: nowrap

  .image-wrapper
    border-radius: 0.5rem

@media (min-width: 769px) and (max-width: 1200px)
  .carousel-content
    flex-wrap: nowrap

  .image-wrapper
    border-radius: 0.5rem

@media (min-width: 1201px)
  .carousel-content
    flex-wrap: nowrap

  .image-wrapper
    border-radius: 0.5rem
</style>
