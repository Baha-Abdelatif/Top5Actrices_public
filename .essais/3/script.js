$(document).ready(function(){
  $('#play').click(function(){
    $('#bloc1').slideUp(360).slideDown(360).animate({
      left: '575px',
      opacity: 0.25,
      width: '150px',
      height: '150px'
    },3600);
  });
  $('#stop').click(function(){
    $('#bloc1').stop(true).animate({
      left: '25px',
      top: '145px',
      opacity:1,
      width: '100px',
      height: '100px'
    },600);;
  });
})
