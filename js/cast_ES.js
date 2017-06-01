var castEsSingle = (function ($) {

    // Instance stores a reference to the Singleton
    var instance;

    function init() {
        var castMember = $('#cast');
        var castBio = $('#castBio');

        var jqxhr = $.getJSON( "../js/json/cast_crew.json", function(data) {
            jsonSuccess(data);
        })
        .fail(function() {
            jsonError();
        })

        // Triggered if the JSON succeed
        function jsonSuccess(data) {
            var castObj = data.cast.es;
            castObj.forEach(function(element, index) {
                var h3 = $('<h3></h3>');
                var br = document.createElement('br');
                h3.html(element.name);
                h3.click(function(){
                    var h3Array = $(castMember)[0].getElementsByTagName('h3');
                    castBio.html(element.bio);        
                    for(var i = 0; i < h3Array.length; i++) {
                        h3Array[i].classList.remove('text-selected');
                        h3Array[index].classList.add('text-selected');
                    }
                    // for every h3 resets the class and only add the font size to the current h3
                })
                castMember.append(h3);
            });
            data;
        }

        // Triggered if the JSON fails
        function jsonError() {
            castBio.html('Lo sentimos pero la página no cargó correctamente, inténtelo de nuevo más tarde');    
        }
    };

    return {
        // Get the Singleton instance if one exists
        // or create one if it doesn't
        getInstance: function() {
            if( !instance ) {
                instance = init();
            }
            return instance;
        }
    };
})(jQuery);

castSingle.getInstance();
