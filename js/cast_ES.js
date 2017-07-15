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
            var childArray = [];
            castBio.html(castObj[0].bio);
            castObj.forEach(function(element, index) {
                var h3 = $('<h3></h3>');
                h3.html(element.name);
                h3.on('click', function(){
                    childArray = castMember.children();  
                    castBio.html(element.bio); 
                    for(var i = 0; i < childArray.length; i++) {
                        childArray[i].classList.remove('text-selected');                                                
                        childArray[index].classList.add('text-selected');
                    }
                })
                castMember.append(h3);
            });
            childArray = castMember.children();
            childArray[0].classList.add('text-selected');
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
