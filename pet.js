var shop = [
    {
      title: 'Ella',
      image: './img/flouffy-unsplash.jpg',
      price: '$850-$1000',
      description: '',
    },
    {
      title: 'Otis',
      image: './img/Otis-unsplash.jpg',
      price: '$850-$1000',
      description: '',
    },
    {
      title: 'Simone',
      image: './img/smallDog-unsplash.jpg',
      price: '$850-$1000',
      description: '',
    }
    
  
    
    ]
    
    var postHTML = " "
  
  

  
  
  
    for (var i=0; i < shop.length; i++){
        var heading = '<div class="product ' + '"><span><h5>' + shop[i].title + '</h5>'
        var image = '<img id="sameSize" src="' + shop[i].image + '"/'
        var price = '<p> $' + shop[i].price + '</p></span>'
        var description = '<div class=""><p>'+ shop[i].description + '</p><button type="button" class="btn btn-warning"> add to cart</button></div></div>'
        var concatThis = heading + image + price + description;
        postHTML = postHTML + concatThis
    }
    document.getElementById('market').innerHTML = postHTML