'use strict'
var startModule = (function(){
    // Переменные

    var $content = $(".page-content");
    var $downClick = $(".down-click__ico");
    var $wrapper = $(".wrapper");
    var $menu = $(".nav");
    var $sandwich = $(".sandwich");
    var scrollSpeed = 700;



    // Служеные функции

    var log = function(elem){
        return console.log(elem);
    }

    var getPositionTop = function(elem){
        return $(elem).offset().top;
    }

    var getPositionLeft = function(elem){
        return $(elem).offset().left;
    }

    var scrollTo = function(elem,speed){
        return $('body,html').animate({scrollTop: getPositionTop(elem)}, speed);
    }
    
    var cloneInsert = function(parent,element){
        return element.clone(true).prependTo(parent);
    }

    // Функции модуля


    var _addPopUpMenu = function(){
        cloneInsert($("body"),$menu).wrapAll('<div class="popUpMenu"></div>').addClass("popUpMenu__inner");
        var $popUpMenu = $(".popUpMenu");
    }


    // Прослушка

    var _setUpListner = function(){
        $downClick.on("click",function(){scrollTo($content,scrollSpeed)});
        $sandwich.on("click",function(){
            $(this).toggleClass("sandwich_on");
            $("body").toggleClass("no-scroll");
            $(".popUpMenu").toggleClass("popUpMenu_show");
        })
    }


    

    return {
        init: function(){
            // происходит сразу
            _addPopUpMenu();
            _setUpListner();
            
        }
    };

})();

$( document ).ready(function() {
    startModule.init();
})


$( document ).ready(function() {
    
	// TEST
	var $entery = $(".entry");


	$entery.on("click",function(){
		$(this).addClass("hide");
		$(".home-page .cover").addClass("flip");
	})

	$(".cover__content__form a").on("click",function(){
		$entery.removeClass("hide");
		$(".home-page .cover").removeClass("flip");
	})

// skill

function skillPercent(){
    var $skill = $(".skill");
    $skill.each(function(){
        var $this = $(this);
        var percent = $this.data("percent");
        var circle = $this.find(".skill__circle");
        circle.css({"stroke-dasharray": percent + " 100"});
    })
}
setTimeout(function(){
    skillPercent();
},2000)











})

// google map

function initMap() {
        // Create a map object and specify the DOM element for display.
        var position = {lat: 60.00863023, lng: 30.24842441};
        var markerPosition =  {lat: 60.017391, lng: 30.273618};
        var map = new google.maps.Map(document.getElementById('map'), {
        center: position,
        scrollwheel: false,
        zoom: 14,
        disableDefaultUI: true
        });
        var image = {
			  url: "./assets/img/map-marker.png",
			  size: new google.maps.Size(71, 71),
			  //origin: new google.maps.Point(0, 0),
			  anchor: new google.maps.Point(17, 40),
			  scaledSize: new google.maps.Size(40, 56)
			};
        var marker = new google.maps.Marker({
		    position: markerPosition,
		    map: map,
		    title: 'Hello World!',
		    icon: image,
  			});
        var styles = [
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#d6d6d6"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#86a77a"
            }
        ]
    }
]
        map.setOptions({styles: styles});
        }