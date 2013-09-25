(function (){
    $('.content').filter(':nth-child(n+2)').addClass('hide');

    $('.header').on('mouseenter', function (){
        $(this)
            .next()
                .slideDown(300)
                .siblings('.content')
                    .slideUp(300);
            
    }); 
})();