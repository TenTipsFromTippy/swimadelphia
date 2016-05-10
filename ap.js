var map;

function initMap() {
    var kelly = {lat: 39.97910599999999, lng: -75.2079306};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: kelly
});

 var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading"><a href="kelly.html">Kelly Pool</a></h1>'+
      '<div id="bodyContent">'+
      '<p>4231 Lansdowne Dr, Philadelphia, PA 19131 </p>'+
      '<p>A beautiful pool nestled in Fairmount Park, surrounded by grass, '+
      'trees, and lovely visitors.</p>' +
      '<a href="https://www.facebook.com/John-B-Kelly-Pool-158562017548105/"><p>Facebook</p>'+
      '</div>'+
      '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  var marker = new google.maps.Marker({
    position: kelly,
    map: map,
    title: 'Kelly'
  });
  
          
    marker.addListener('click', function() {
       infowindow.open(map, marker); 
    });
          
}