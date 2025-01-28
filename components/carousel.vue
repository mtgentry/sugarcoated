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
          // Provide your images array with width and height explicitly defined:
          images: [
            {
              src: 'carousel_1.jpg',
              alt: 'Carousel Image 1',
              width: 924,
              height: 1100
            },
            {
              src: 'carousel_2.jpg',
              alt: 'Carousel Image 2',
              width: 1510,
              height: 1100
            },
            {
              src: 'carousel_3.jpg',
              alt: 'Carousel Image 3',
              width: 1038,
              height: 1100
            },
            {
              src: 'carousel_4.jpg',
              alt: 'Carousel Image 4',
              width: 1572,
              height: 1100
            },
            {
              src: 'carousel_5.jpg',
              alt: 'Carousel Image 5',
              width: 1294,
              height: 1100
            },
            {
              src: 'carousel_6.jpg',
              alt: 'Carousel Image 6',
              width: 1296,
              height: 1100
            }
          ],
          backgroundColor: '#222533',
          spacing: 16
        }
      })
    },
    speed: {
      type: Number, // Speed in pixels per second
      default: 100  // Adjust as needed for desired scrolling speed
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
      // No specific animation here; it's handled in startScrolling()
      return {}
    },
    carouselContentStyle() {
      // Two sets of images side by side
      return {
        display: 'flex',
        width: '200%'
      }
    }
  },
  mounted() {
    this.initializeCarousel()
    window.addEventListener('resize', this.handleResize)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize)
    cancelAnimationFrame(this.animationFrameId)
  },
  methods: {
    initializeCarousel() {
      const baseImages = this.section.carousel.images
      if (!baseImages.length) {
        console.warn('No images provided for the carousel.')
        return
      }

      // Duplicate images for a seamless loop; add '?dup=1' to ensure @load triggers
      const duplicateImages = baseImages.map(img => ({
        ...img,
        src: img.src + '?dup=1'
      }))

      this.displayedImages = [...baseImages, ...duplicateImages]
      console.log('Displayed Images:', this.displayedImages)

      // Reset counters
      this.imagesLoaded = 0
      this.uniqueImagesCount = baseImages.length

      // Once the DOM is ready:
      this.$nextTick(() => {
        if (this.$refs.content) {
          // Calculate the width of a single set
          this.singleSetWidth = this.calculateSetWidth(baseImages)
          console.log('Single Set Width:', this.singleSetWidth)
          // Begin the scrolling animation
          this.startScrolling()
        }
      })
    },
    calculateSetWidth(images) {
      // Sum up each image’s width plus spacing
      const totalWidth = images.reduce((acc, img) => {
        const width = img.width ? img.width : 0
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
        flexShrink: 0
      }
    },
    handleResize() {
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
        // Determine elapsed time since last frame
        const deltaTime = (timestamp - this.lastFrameTime) / 1000
        this.lastFrameTime = timestamp

        // Move left (subtract X)
        this.currentPosition -= this.speed * deltaTime

        // If we've scrolled a full set's width, reset
        if (Math.abs(this.currentPosition) >= this.singleSetWidth) {
          console.log('Scrolled past one set. Resetting position.')
          this.currentPosition += this.singleSetWidth
        }

        // Apply the transform
        this.$refs.content.style.transform = `translateX(${this.currentPosition}px)`

        // Request next frame
        this.animationFrameId = requestAnimationFrame(scroll)
      }

      // Kick off the scroll loop
      this.animationFrameId = requestAnimationFrame(scroll)
      console.log('Started scrolling animation.')
    },
    handleImageLoad(src) {
      console.log(`Image loaded: ${src}`)
      // Only count unique images from the original set
      if (this.section.carousel.images.some(img => img.src === src)) {
        this.imagesLoaded += 1
        console.log(`Images loaded: ${this.imagesLoaded}/${this.uniqueImagesCount}`)

        // Optional: if you want to start the animation only after all unique images are loaded
        // you could call `startScrolling()` here instead of in `initializeCarousel`.
        if (this.imagesLoaded >= this.uniqueImagesCount) {
          console.log('All unique images loaded.')
          // startScrolling() could be called here if preferred.
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

.carousel-content
  display: flex
  flex-wrap: nowrap
  will-change: transform // Hint the browser for smoother animation

.image-wrapper
  border-radius: 0.5rem
  overflow: hidden
  display: inline-block
  flex-shrink: 0
  position: relative

.carousel-image
  display: block
  width: 100%
  height: 100%
  object-fit: cover
  transition: transform 0.3s ease
  backface-visibility: hidden

  &:hover
    transform: scale(1.05) translateZ(0)

@media (max-width: 768px)
  .carousel-content
    flex-wrap: nowrap

@media (min-width: 769px) and (max-width: 1200px)
  .carousel-content
    flex-wrap: nowrap

@media (min-width: 1201px)
  .carousel-content
    flex-wrap: nowrap
</style>
