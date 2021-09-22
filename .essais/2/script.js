$(document).ready(function(){
  $('#play').click(function(){
    $('#bloc1').animate({
      left: '+=550px',
      opacity: 0.25,
      width: '150px',
      height: '150px'
    },600);
  });
  $('#stop').click(function(){
    $('#bloc1').animate({
      left: '-=550px',
      opacity:1,
      width: '100px',
      height: '100px'
    },600);
  });
})
