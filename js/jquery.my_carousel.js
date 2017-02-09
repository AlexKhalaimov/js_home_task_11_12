

(function( $ ) {
  $.fn.myCarousel = function( options ) {

      var leftBtn = $('.prev-move');
      var rightBtn = $('.next-move');
      var elList = $('.carousel-list');
      var imgMove = 225;
      var currentLeftPos = 0;
      var elementsCount = elList.find('li').length;
      var minimumMove = - ((elementsCount - 3) * imgMove);
      var maximumMove = 0;
      var settings = $.extend(defaults, options);
      var defaults = {
          fontSize : '16px',
          textColor : 'black'
      };
      var imgDescription = $('.carousel-item p');

      imgDescription.css({
          'font-size' : settings.fontSize,
          'color' : settings.textColor
      });

      leftBtn.click(function () {
          if (currentLeftPos != maximumMove) {
              currentLeftPos += 225;
              elList.animate({
                  left : currentLeftPos + 'px'
              }, 500);
          }
      });

      rightBtn.click(function () {
          if (currentLeftPos != minimumMove) {
              currentLeftPos -= 225;
              elList.animate({
                  left : currentLeftPos + 'px'
              }, 500);
          }
      });
      return this;
  };
})(jQuery);
