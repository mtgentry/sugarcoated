$(document).ready(function() {
  var wrapperNavbar = $('.navbar');
  var wrapperMenu = $('.navbar-icon');
  var wrapperLogo = $('.navbar-logo');
  var wrapperList = $('.navbar li a');
  var wrapperIcon = $('.navicon');

  wrapperMenu.click(function(){
    wrapperMenu.toggleClass('open');
    wrapperNavbar.toggleClass('navbar-open');
    wrapperLogo.toggleClass('navbar-logo-hide');
    wrapperList.toggleClass('navbar-open li a');
    wrapperIcon.toggleClass('navicon-light');
  })
})
