// Gallery constructor
var Gallery = function(data){
    this.url = data.url;
    this.alt = data.alt;
    this.index = 0;    
    this.total = data.url.length;   
    this.image = $('#galleryImage');    
    this.thumbnailsContainer = $('#galleryThumbnails');  
    this.galleryContainer = $('#galleryContainer');  
    this.currentImage = $('#currentImage');  
    this.totalImage = $('#totalImage');  
    this.btnClose = $('#btnClose');
}


// Gallery Prototype
Gallery.prototype = {
    Constructor: Gallery,
    init: function() {
        // Render the thumbnails
        this.composeThumbnails();

        // Inits the backward button
        this.backward();

        // Inits the forward button
        this.forward();

        // Inits the counter
        this.renderCounter();
    },
    renderGallery: function() {
        var _self = this;                  
        this.image.attr('src', this.url[this.index]);
        this.image.attr('alt', this.alt[this.index]);

        this.btnClose.on('click', function() {
            _self.thumbnailsContainer.removeClass('hidden');
            _self.galleryContainer.addClass('hidden');
        });
    },
    backward: function() {
        var btnPrevious = $('#btnPrevious');
        var _self = this;             
        btnPrevious.on('click', function() {
            if(_self.index <= 0) {
                _self.index = _self.total-1;
                _self.alt[_self.total-1];                
            }
            else{
                _self.index--; 
                _self.alt[_self.index];                                           
            };
            _self.image.attr('src',  _self.url[_self.index]);
            _self.image.attr('alt', _self.alt[_self.index]);
            _self.currentImage.html(_self.index+1)
            _self.totalImage.html(_self.total);
        })     
    },
    forward: function() {
        var btnFoward = $('#btnFoward');        
        var _self = this;          
        btnFoward.on('click', function() {
            if(_self.index >= _self.total-1) {
                _self.index = 0;
                _self.alt[0];
            }
            else {
                _self.index++; 
                _self.alt[_self.index];                          
            };
            _self.image.attr('src', _self.url[_self.index]);
            _self.image.attr('alt',  _self.alt[_self.index]);
            _self.currentImage.html(_self.index+1);
            _self.totalImage.html(_self.total);
        })  
    },
    renderCounter: function() {
        this.currentImage.html(this.index+1);
        this.totalImage.html(this.total);
    },
    composeThumbnails: function() {
        var _self = this;      
        for(var i = 0; i < this.total; i++) {
            var container = $('<div></div>');
            container.addClass('image-container');

            // var image = document.createElement('img');
            // image.src = this.url[i];
            // image.data = i;
            var image = $('<img></img>');
            image.attr('src', this.url[i]);
            image.data('img', i);
            
            image.on('click', function(e) {
                console.log();
                _self.thumbnailsContainer.addClass('hidden');
                _self.galleryContainer.removeClass('hidden');
                _self.index = $(this).data('img');
            
                _self.renderGallery();               
            });

            container.append(image);
            this.thumbnailsContainer.append(container);
        }
    }
}

// Gallery Init
var g1 = new Gallery({
    'url': ['../img/gallery/atropello.jpg','../img/gallery/colchon.jpg','../img/gallery/ducha_1.jpg','../img/gallery/ducha_2.jpg', '../img/gallery/ducha_3.jpg', '../img/gallery/enfrentamiento_1.jpg', '../img/gallery/enfrentamiento_2.jpg','../img/gallery/espejo.jpg','../img/gallery/fiesta_1.jpg','../img/gallery/fiesta_2.jpg','../img/gallery/fiesta_3.jpg','../img/gallery/fiesta_4.jpg','../img/gallery/fiesta_5.jpg','../img/gallery/novio.jpg','../img/gallery/parque.jpg','../img/gallery/parto.jpg','../img/gallery/rugby_1.jpg','../img/gallery/rugby_2.jpg','../img/gallery/rugby_3.jpg','../img/gallery/sangre.jpg'],
    'alt': ['Atropello','Colchon.jpg','Foto en ducha','Foto en ducha', 'Foto en ducha', 'Enfrentamiento Interno', 'Enfrentamiento Interno','Mujer frente a espejo','Foto en la fiesta','Foto en la fiesta','Foto en la fiesta','../img/gallery/fiesta_4.jpg','Foto en la fiesta','Novio de la protagonista','Mujer en el parque','Mujer teniendo aborto','Mujer jugando Rugby','Mujer jugando Rugby','Mujer jugando Rugby','Sangre en el suelo']
});

g1.init();