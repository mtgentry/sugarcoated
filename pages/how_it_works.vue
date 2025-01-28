<template lang="pug">
  v-row#main.flex-column.justify-center.align-center
    v-col(cols="12" class="content-column")
      .copy-container
        .intro_big How it Works
        .intro_text Your brand deserves visuals that not only capture attention but also reflect its unique identity. That’s why we’ve designed a clear, collaborative process to transform your ideas into photorealistic 3D models that elevate your product presentation. In five streamlined steps, we’ll work together to craft visuals that resonate with your audience and align seamlessly with your vision.
        
        hr
        h5 Step 1: Understanding Your Brand
        p Everything we create begins with a deep understanding of your brand. We’ll ask questions to uncover the essence of your identity—your colors, values, and aesthetic preferences—to ensure the final visuals feel unmistakably yours.



        ul.brand-list
          li.brand-item What defines your brand’s visual identity?
          li.brand-item Are there brands whose imagery inspires you?
          li.brand-item What colors, textures, or styles best represent your product?

       
        h5 Step 2: Sharing Your Assets
        p With your brand’s vision in mind, we’ll gather the technical details to bring it to life. Logos, packaging files, label designs, container colors, and dimensions—these are the building blocks of precision and consistency in every model.

        h4 Logos
        p If your container has a logo, symbol, or mark, please send them. .svg files are best, but .eps and .ai work too.

          p Below are two images in the same setting with tweaks made to match the brand.
        .image-container
          .image-with-caption
            img(src="/images/packaging.jpg" alt="Packaging" class="mason-image")
            .image-caption Packaging files
        h4 Labels
        p If you have labels for your containers, share those as well.
        h4 Container Colors
        p What colors are your bottles? If you know a Pantone code (like PQ-1863C), great. Hex codes from a brand book also work.
        h4 Bottle Dimensions
        p
          | To create a 3D model, we need your bottle's exact size. Height and width are a good start. More details help. You might have this info from your manufacturer in a 
          a(href="/spec_sheet" target="_blank" rel="noopener") spec sheet
          | , technical drawing, or mechanical. If not, you can 
          a(href="/measure_with_ruler" target="_blank" rel="noopener") measure it by hand.
        h4 Bottles
        p If you use a standard bottle bought from a manufacturer, just tell us its name or where you got it.

        h5 Step 3: Building Your 3D Model
        p We’ll use your assets and specifications to create a detailed, photorealistic 3D model of your container. Every element is carefully rendered to ensure accuracy and consistency with your design.

        p Below is a slider to compare two images. Drag the handle left or right.
        .image-comparison
          .comparison-container
            .comparison-bottom
              img(src="/images/before.jpg" alt="Before" class="comparison-image")
            .comparison-top
              img(src="/images/after.jpg" alt="After" class="comparison-image")
            .handle
              .circle
          .image-caption Drag to reveal 

      
        h5 Step 4: Placing Your Model in an Environment
        p Next we'll place your 3D bottle in a pre-designed environment. Your feedback helps us select and adjust scenes that work best for your product.


        h5 Step 5: Customization

        p We adjust the scenes based on your answers from Step 1. The environments will be similar but still feel unique to your brand. We call this process "semi-bespoke."


     
        .images-container.full-width
          .image-with-caption
            img(src="/images/final.jpg" alt="Jar measurement 1" class="double")
            .image-caption The final bottle

      
        hr 
        p Our five-step process is designed to be seamless and collaborative, ensuring every detail aligns with your brand’s vision. No more expensive photoshoots, coordinating schedules, or scrambling to stay ahead of trends. With 3D imagery, you have a scalable solution that saves you time, slashes costs, and delivers premium visuals without the stress. 

        p Focus on your vision—we’ll take care of the rest.
    

      
        
</template>

<script>
export default {
  mounted() {
    const container = this.$el.querySelector('.comparison-container');
    if (!container) return;

    const handle = container.querySelector('.handle');
    const topImageContainer = container.querySelector('.comparison-top');

    if (!handle || !topImageContainer) return;

    // Drags the handle, updating the mask width for the top image
    const moveHandle = (e) => {
      const rect = container.getBoundingClientRect();
      let offsetX = e.clientX - rect.left;
      // Clamp so it doesn't exceed container boundaries
      offsetX = Math.max(0, Math.min(offsetX, rect.width));

      // Move the vertical line (handle)
      handle.style.left = `${offsetX}px`;

      // Mask the top image by changing the parent container's width
      topImageContainer.style.width = `${offsetX}px`;
    };

    const onMouseDown = () => {
      document.addEventListener('mousemove', moveHandle);
      document.addEventListener('mouseup', onMouseUp);
    };

    const onMouseUp = () => {
      document.removeEventListener('mousemove', moveHandle);
      document.removeEventListener('mouseup', onMouseUp);
    };

    handle.addEventListener('mousedown', onMouseDown);
  },
};
</script>

<style lang="sass" scoped>
// --- Layout + Copy Styles ---
#main
  padding: 51px 20px 100px 20px

.content-column
  max-width: 635px
  width: 100%

.copy-container
  color: #F5F0E5
  font-family: 'Montserrat', sans-serif


  .intro_big
    margin-bottom: 16px
    text-align: center
    font-family: 'Montserrat', sans-serif
    font-size: 50px
    color: #F5F0E5
    font-weight: 700
    margin-top: 50px

  .intro_text
    font-size: 24px
    line-height: 1.5
    margin-bottom: 24px
    color: #F5F0E5
    font-family: 'Montserrat', sans-serif
    font-weight: 400




  h2
    margin-bottom: 16px
    text-align: left
    color: #F5F0E5

  h4
    font-size: 24px
    color: #F5F0E5
    padding-bottom: 7px
    margin-top: 20px

  h5

    color: #F5F0E5 
    line-height: 120%




  p
    margin-bottom: 16px
    text-align: left
    color: #F5F0E5


  hr
    margin: 24px 0
    height: 0.5px
    opacity: 40%
    margin-top: 50px
    color: #F5F0E5

  ul.brand-list
    margin-top: 15px
    list-style-type: disc
    padding-left: 30px
    margin-bottom: 16px

    li.brand-item
      font-size: 22px
      margin-bottom: 8px
      line-height: 1.4
      font-family: inherit
      font-weight: 400

  p a
    text-decoration: underline !important
    color: white
    &:hover
      color: #ff0

.image-container
  width: 100%
  max-width: 600px

.mason-image
  width: 100%
  height: auto
  display: block

.image-caption
  text-align: center
  margin-top: 10px
  font-size: 18px
  font-family: 'Lora', serif
  font-style: italic
  letter-spacing: .5px
  color: #F5F0E5

.images-container
  &.side-by-side
    width: calc(100vw - 120px)
    max-width: none
    margin: 40px auto
    padding: 20px 0
    position: relative
    left: 50%
    transform: translateX(-50%)
    display: flex
    gap: 4px
    
    .image-with-caption
      width: calc(50% - 2px)
      
      img
        width: 100%
        height: auto
      
    @media (max-width: 768px)
      flex-direction: column
      .image-with-caption
        width: 100%

  &.full-width
    width: calc(100vw - 120px)
    max-width: none
    margin: 40px auto
    padding: 20px 0
    position: relative
    left: 50%
    transform: translateX(-50%)

    .double
      width: 100%
      max-width: 100%
      height: auto
      display: block

    .jar-image, .env
      width: 100%
      max-width: none
      @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)
        max-width: 50vw  // For 2x images, display at half size

  &.standard
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
  .images-container.standard .jar-image
    width: calc(50% - 10px)

@media (max-width: 1239px)
  .images-container.standard
    flex-direction: column
    align-items: center

@media (max-width: 600px)
  .copy-container, .image-container
    padding: 0 10px

.image-with-caption
  display: block

// --- BEFORE/AFTER COMPARISON (FIXED WIDTH) ---
.image-comparison
  width: 600px
  margin: 40px auto
  position: relative
  overflow: hidden

.comparison-container
  position: relative
  width: 600px
  height: auto
  user-select: none
  -webkit-user-select: none

// Bottom image sets container's height
.comparison-bottom
  position: relative
  width: 100%
  img
    width: 600px
    height: auto
    display: block

// Top image is absolutely positioned, masked by changing .comparison-top width
.comparison-top
  position: absolute
  top: 0
  left: 0
  width: 300px  // start half covered
  height: 100%
  overflow: hidden

  img
    position: relative
    width: 600px
    height: auto
    display: block

// The vertical line (full height) + circle on top
.handle
  position: absolute
  top: 0
  left: 300px    // start at half
  width: 2px
  height: 100%
  background: #fff
  cursor: ew-resize

  // The circle is absolutely centered on the bar
  .circle
    position: absolute
    top: 50%
    left: 1px            // half of the bar's width is 2px
    transform: translate(-50%, -50%)
    width: 35px
    height: 35px
    border-radius: 50%
    background: #fff
    box-shadow: 0 0 4px rgba(0,0,0,0.3)
    z-index: 1

    // Two small vertical lines inside the circle, 
    // each 4px from the handle's center line
    &::before,
    &::after
      content: ""
      position: absolute
      top: 50%
      transform: translateY(-50%)
      width: 2px
      height: 12px
      background: #282725

    // Left line: 4px left of center
    &::before
      left: calc(50% - 3px)

    // Right line: 4px right of center
    &::after
      left: calc(50% + 1px)
</style>