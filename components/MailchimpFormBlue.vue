<template>
  <div>
    <link href="//cdn-images.mailchimp.com/embedcode/classic-071822.css" rel="stylesheet" type="text/css">
    <div id="mc_embed_signup">
      <form action="" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
        <div id="mc_embed_signup_scroll">
          <div class="mc-field-group">
            <label for="mce-FNAME">First Name</label>
            <input type="text" placeholder="Sam" name="FNAME" class="" id="mce-FNAME">
          </div>
          <div class="mc-field-group">
            <label for="mce-EMAIL">Work Email <span class="asterisk">*</span></label>
            <input type="email" placeholder="sam@acme.com" name="EMAIL" class="required email" id="mce-EMAIL" required>
          </div>
          <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button">
        </div>
        <div id="mce-responses" class="clear foot">
          <div class="response" id="mce-error-response"></div>
          <div class="response" id="mce-success-response"></div>
        </div>
        <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_2cd292e690e7ae11a5b45811f_4be237f1c1" tabindex="-1" value=""></div>
        <!--
        <div class="brandingLogo"><a href="http://eepurl.com/irBcos" title="Mailchimp - email marketing made easy and fun"><img src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg"></a></div>
        -->
      </form>
    </div>
    <script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='BIRTHDAY';ftypes[5]='birthday';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
    <!--End mc_embed_signup-->
  </div>
</template>

<style scoped>
#mc_embed_signup form {
  margin: 0;
}

#mc_embed_signup {

  margin-top: 0;
  z-index: 0;
 

}


#mc_embed_signup_scroll {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  height: 101px;
}




#mc_embed_signup .mc-field-group input {
  padding: 8px;
  border:1px solid #fff;
  color: #fff;
  transition: border-color 0.3s ease;
}

#mc_embed_signup .mc-field-group input:focus {
  padding: 8px;
  border:1px solid #fff;
  outline: none;
  color: #fff;
}

#mc_embed_signup .mc-field-group input::placeholder {
  color: #878EE9;
}




#mc_embed_signup .button{
  background-color: white;
  color: #2805FF;
  border-radius: 30px;
  height: 60px;
  max-width: 173px;
  font-weight: 400;
  font-size: 23px;
  transition: all 0.01s ease-in-out 0s;
  margin: 0;


}

#mc_embed_signup .button:hover{
  background-color: #E7E8F9;



}

.mc-field-group label {
  text-transform: uppercase;
  font-size: 12px;
  display: block;
  padding-bottom: 3px;
  color: #fff;
  letter-spacing: .5px;



}

#mc_embed_signup .asterisk {
  font-size: unset;
  position: unset;
}

.mc-field-group input {
  height: 60px;
  padding-left: 20px;
  font-size: 21px;
  color: #535251;

}


#mc_embed_signup #mce-success-response {

  color: #fff;
  font-size: 24px;
font-weight: normal;
}


#mce-error-response {

  color: #ff0000;

}



#mce-FNAME {

  color: #535251;
}

#mce-EMAIL {

  color: #535251;
}


#mc_embed_signup #mc-embedded-subscribe-form input.mce_inline_error {

  border: 2px solid #ff0000;

}
.mce_inline_error {


}

.brandingLogo {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top:100px;
}





@media (max-width: 600px) {
  #mc_embed_signup form {
    height: 400px;
  }

  #mc_embed_signup_scroll {
    flex-direction: column;
    height: auto;
    margin: 0;
  }

  .mc-field-group,
  #mc_embed_signup .button {
    width: 100%;
    box-sizing: border-box;
  }

  .mc-field-group label {
    margin-left: 0;
  }

  
#mc_embed_signup {

 margin-top:-15px;
 width: 100%;
}

#mc_embed_signup form {
  width: 100%;
}


.mc-field-group input {
 width: 100%;
}



#mc_embed_signup .button{
margin-left: -49px;
width:322px; 
}



}




</style>
<script setup>
</script>
