// Gallery constructor
var Gallery = function(data){
    this.url = data.url;
    this.alt = data.alt;
    this.index = 0;    
    this.total = data.url.length;   
    this.image = document.getElementById('galleryImage');    
    this.thumbnailsContainer = document.getElementById('galleryThumbnails');  
    this.galleryContainer = document.getElementById('galleryContainer');  
    this.currentImage = document.getElementById('currentImage');  
    this.totalImage = document.getElementById('totalImage');  
    this.btnClose = document.getElementById('btnClose');
}


// Gallery Prototype
Gallery.prototype = {
    Constructor: Gallery,
    init: function() {
        // Render the thumbnails
        this.composeThumbnails();

        // Inits the gallery
        //this.renderGallery();
       
        // Inits the backward button
        this.backward();

        // Inits the forward button
        this.forward();

        // Inits the counter
        this.renderCounter();
    },
    renderGallery: function() {
        var _self = this;                  
        this.image.src = this.url[this.index];
        this.image.alt = this.alt[this.index]; 

        this.btnClose.addEventListener('click', function() {
            _self.thumbnailsContainer.classList.remove('hidden');
            _self.galleryContainer.classList.add('hidden');
        });
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
    composeThumbnails: function() {
        var _self = this;      
        for(var i = 0; i < this.total; i++) {
            var container = document.createElement('div');
            container.classList.add('image-container');

            var image = document.createElement('img');
            image.src = this.url[i];
            image.data = i;
            counter = i;
            image.addEventListener('click', function() {
                _self.thumbnailsContainer.classList.add('hidden');
                _self.galleryContainer.classList.remove('hidden');
                _self.index = this.data;
            
                _self.renderGallery();               
            });

            container.appendChild(image);
            this.thumbnailsContainer.appendChild(container);
        }
    }
}

// Gallery Init
var g1 = new Gallery({
    'url': ['../img/1.jpg','../img/2.jpg','../img/3.jpg','../img/4.jpg'],
    'alt': ['Una mujer y un hombre en una fiesta','Mujer frente al espejo','Una mujer y un hombre en una fiesta','Mujer frente al espejo']
});

g1.init();