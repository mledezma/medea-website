// // Global module
// var castModule = (function (jQuery) {
    

//     return{
//     };
 
// // Pull in jQuery
// })(jQuery);

// To do: Put it in a Design Pattern and add real info, also fix css
var castMember = $('#cast');
var castBio = $('#castBio');

var jqxhr = $.getJSON( "../js/json/cast.json", function(data) {
    jsonSuccess(data);
})
.fail(function() {
    jsonError();
})

// Extend sting prototype methods
String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

function jsonSuccess(data) {
    var castObj = data.cast;
    castObj.forEach(function(element, index) {
        var h3 = $('<h3></h3>');
        var br = document.createElement('br');
        h3.html(element.name);
        h3.click(function(){
            var h3Array = $(castMember)[0].getElementsByTagName('h3');
            castBio.html(element.bio.replaceAll('/n', '</br>' ));        
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

function jsonError() {
    castBio.html('Lo sentimos pero la página no cargó correctamente, inténtelo más tarde');    
}