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

function jsonSuccess(data) {
    var castObj = data.cast;
    castObj.forEach(function(element) {
        var h2 = $('<h2></h2>');
        h2.text(element.name);
        h2.click(function(){
            castBio.html(element.bio);
        })
        castMember.append(h2);
    });
    data;
}

function jsonError() {
    castBio.html('Lo sentimos pero la página no cargó correctamente, inténtelo más tarde');    
}