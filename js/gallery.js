// Gallery constructor
var Gallery = function(data){
    this.url = data.url;
    this.alt = data.alt;
    this.index = 0;    
    this.total = data.url.length;   
    this.image = document.getElementById('galleryImage');    
    this.currentImage = document.getElementById('currentImage');  
    this.totalImage = document.getElementById('totalImage');  
}


// Gallery Prototype
Gallery.prototype = {
    Constructor: Gallery,
    init: function() {
        // Inits the gallery
        this.renderGallery();
       
        // Inits the backward button
        this.backward();

        // Inits the forward button
        this.forward();

        // Inits the counter
        this.renderCounter();
    },
    renderGallery: function() {
        this.image.url = this.url[this.index];
        this.image.alt = this.alt[this.index];    
    },
    backward: function() {
        var btnPrevious = document.getElementById('btnPrevious');
        var _self = this;             
        btnPrevious.addEventListener('click', function() {
            if(_self.index <= 0) {
                _self.index = _self.total-1;
                _self.alt[_self.total-1];                
            }
            else{
                _self.index--; 
                _self.alt[_self.index];                                           
            };
            _self.image.src = _self.url[_self.index];
            _self.image.alt = _self.alt[_self.index];
            _self.currentImage.innerHTML = _self.index+1;
            _self.totalImage.innerHTML = _self.total;
        })     
    },
    forward: function() {
        var btnFoward = document.getElementById('btnFoward');        
        var _self = this;          
        btnFoward.addEventListener('click', function() {
            if(_self.index >= _self.total-1) {
                _self.index = 0;
                _self.alt[0];
            }
            else {
                _self.index++; 
                _self.alt[_self.index];                          
            };
            console.log(_self.image)
            _self.image.src = _self.url[_self.index];
            _self.image.alt = _self.alt[_self.index];
            _self.currentImage.innerHTML = _self.index+1;
            _self.totalImage.innerHTML = _self.total;
        })  
    },
    renderCounter: function() {
        this.currentImage.innerHTML = this.index+1;
        this.totalImage.innerHTML = this.total;
    },
}

// Gallery Init
var g1 = new Gallery({
    'url': ['../img/1.jpg','../img/2.jpg','../img/3.jpg','../img/4.jpg'],
    'alt': ['Una mujer y un hombre en una fiesta','Mujer frente al espejo','Una mujer y un hombre en una fiesta','Mujer frente al espejo']
});

g1.init();