(function( $ ) {
  $.fn.htmlTemplate = function(  ) {

      var html = $('#myHTML').html();
      var userData = [
          {
              userName : 'Халаімов Олександр',
              userPic : ' https://alexkhalaimov.github.io/Img/my_photo.jpg ',
              userJob : ' На даний момент навчаюсь на курсах GoIt ',
              userPhone : ' +380322223322 ',
              userSocial : ' https://alexkhalaimov.github.io/ ',
              userText  : 'Це цікаво. Давно мріяв цьому навчитись. Хочу дещо змінити у власному житті ',
          }

      ];

      var content = tmpl(html, {
          data : userData
      });

      $('.script-wrapper').append(content);
      return this;
  };
})(jQuery);
