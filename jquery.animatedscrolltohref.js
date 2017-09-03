(function ( $ ) {
    $.fn.animatedScrollToHref = function(selector,options) {

        var settings = $.extend({
            delay: 1300,
            addedHeight: 0,
            afterScroll : function(){},
        }, options );

        $('body').on('click.animatedScrollToHref touchstart.animatedScrollToHref', selector, function () {
            var id = false;

            var href = $(this).attr("href");

            var indexOfHash = href.indexOf('#');

            if (indexOfHash != - 1) {
                id = href.substring(indexOfHash);
            }

            if (id !== false && $(id).length !== 0) {

                var destination = $(id).offset().top - settings.addedHeight;

                $("body,html").animate({
                    scrollTop:destination
                }, {
                    duration:settings.delay,
                    complete : function () {
                        settings.afterScroll.call(this, id)
                    }
                });

                return false;
            }
        });


        return false;
    };
}( jQuery ));
