$( document ).ready(function() {
  $('.flip-container').click(function() {
    $(this).toggleClass( 'flip' );
    $(this).toggleClass('center');
    $(this).find('.back').toggleClass('expand');
    flipper = $(this).find('.flipper');
    flipper.toggleClass('top-expand');
    flipper.toggleClass('shadow');
  });


















});
