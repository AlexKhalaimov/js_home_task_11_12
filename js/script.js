$(function () {
    function myCarousel() {
        var leftBtn = $('.prev-move');
        var rightBtn = $('.next-move');
        var elList = $('.carousel-list');
        var imgMove = 225;
        var currentLeftPos = 0;
        var elementsCount = elList.find('li').length;
        var minimumMove = - ((elementsCount - 3) * imgMove);
        var maximumMove = 0;

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
    }

    function htmlTemplate() {
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

    }

    myCarousel();
    htmlTemplate();
});
