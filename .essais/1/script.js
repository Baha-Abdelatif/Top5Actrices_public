$(document).ready(function(){
  $('#play').click(function(){
    $('#p5').fadeOut(50, function(){
      $('#p4').fadeOut(40, function(){
        $('#p3').fadeOut(30, function(){
          $('#p2').fadeOut(20, function(){
            $("#stop").click(function(){
              $('#p2').fadeIn(20, function(){
                $('#p3').fadeIn(30, function(){
                  $('#p4').fadeIn(40, function(){
                    $('#p5').fadeIn(50);
                  });
                });
              });
            });
          });
        });
      });
    });
  });
})
