var castSingle = (function ($) {

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
            var castObj = data.cast.en;
            castObj.forEach(function(element, index) {
                var h3 = $('<h3></h3>');
                h3.html(element.name);
                h3.on('click', function(){
                    var childArray = castMember.children();  
                    castBio.html(element.bio); 
                    for(var i = 0; i < childArray.length; i++) {
                        childArray[i].classList.remove('text-selected');                                                
                        childArray[index].classList.add('text-selected');
                    }
                })
                castMember.append(h3);
            });
            data;
        }

        // Triggered if the JSON fails
        function jsonError() {
            castBio.html("Sorry, the page didn't load properly, try again later");    
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
