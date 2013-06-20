$(function(){
  var uri = window.location.pathname;
  $('a[href="'+uri+'"]').addClass('active');
});