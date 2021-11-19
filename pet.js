var shop = [
    {
      title: 'Indigo',
      image: './img/indigo.jpg',
      price: '$25',
      description: '',
    },
    {
      title: 'Orange',
      image: './img/satsuma.jpg',
      price: '$25',
      description: '',
    },
    {
      title: 'Navy',
      image: './img/navy.jpg',
      price: '$25',
      description: '',
    },
    {
      title: 'Rainbow',
      image: './img/rainbow.jpg',
      price: '$25',
      description: '',
    },
    {
      title: 'Chevron',
      image: './img/tfd-x.jpg',
      price: '$25',
      description: '',
    },
    {
      title: 'Peaches',
      image: './img/peaches.jpg',
      price: '$25',
      description: '',
    }
    
  
    
    ]
    
    var postHTML = " "

    for (var i=0; i < shop.length; i++) {
        // var heading = '<div class="product ' + '"><h5>' + shop[i].title + '</h5>'
        // var image = '<div class="proPrice"><img id="sameSize" src="' + shop[i].image + '"/'
        // var price = '<p> ' + shop[i].price + '</p></div>'
        // var description = '<div class=""><p>'+ shop[i].description + '</p><button type="button" class="btn btn-light"> add to cart</button></div></div>'
        // var concatThis = heading + image + price + description;
        // postHTML = postHTML + concatThis

        let heading = '<div class="product col-sm-6 col-md-4"><h5>' + shop[i].title + '</h5>';
        let image = '<img class="img-fluid mb-4" src="' + shop[i].image + '"/';
        let price = '<div><p>' + '<span class="price"> $' + shop[i].price + '</span>';
        let description = shop[i].description + '</p><a class="cart" href="#"><i class="fas fa-cart-plus"></i></a> <a class="view" href="#" target="_blank"> View Item</a></div></div>';
        let concatThis = heading + image + price + description;
        postHTML = postHTML + concatThis;
    }
    document.getElementById('market').innerHTML = postHTML