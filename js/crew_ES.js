var crewSingle = (function ($) {

    // Instance stores a reference to the Singleton
    var instance;

    function init() {
        var crewMember = $('#crew');
        var crewBio = $('#crewBio');

        var jqxhr = $.getJSON( "../js/json/cast_crew.json", function(data) {
            jsonSuccess(data);
        })
        .fail(function() {
            jsonError();
        })

        // Triggered if the JSON succees
        function jsonSuccess(data) {
            var crewObj = data.crew.es;
            crewObj.forEach(function(element, index) {
                var h3 = $('<h3></h3>');
                h3.html(element.name);
                h3.on('click', function() {
                    var childArray = crewMember.children();  
                    crewBio.html(element.bio); 
                    for(var i = 0; i < childArray.length; i++) {
                        childArray[i].classList.remove('text-selected');                                                
                        childArray[index].classList.add('text-selected');
                    }
                    // for every h3 resets the class and only add the font size to the current h3
                })
                crewMember.append(h3);
            });
            data;
        }

        // Triggered if the JSON fails
        function jsonError() {
            crewBio.html('Lo sentimos pero la página no cargó correctamente, inténtelo de nuevo más tarde');    
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

crewSingle.getInstance();
