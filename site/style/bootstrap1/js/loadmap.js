/**
* loadmap.js for loading Google map with locations KML
*/

function myFunction()
{
	alert("Hello World!");


    var myLatlng = new google.maps.LatLng(-34.397, 150.644);
    var myOptions = {
      zoom: 8,
      center: myLatlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

			    map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
	
	var ctaLayer = new google.maps.KmlLayer('https://maps.google.com/maps/ms?authuser=0&vps=2&ie=UTF8&msa=0&output=kml&msid=214538591805489379567.0004e390f8ffde3b93322');
  	ctaLayer.setMap(map);
	google.maps.event.trigger(map, 'resize');
	//alert("hello");

	
}