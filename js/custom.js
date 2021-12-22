$(document).ready(function() {
    //insert the header and footer
    $('#header').load('header.html', function() {
        //set the active state
        var $body = $('body');
        $('li.nav-item .nav').each(function () {
            var $this = $(this);
            $this.removeClass('blue-text');
            if ($this.data('title') === $body.attr('id')) {
                $this.addClass('blue-text');
            }
        });
        //$('#navbar ul.nav li[data-name="'+$('body').attr('id')+'"]').addClass('active');
        //$('ul.nav li').click(function(){
            //window.location.href = $(this).find('a').attr('href')
        //});
    });

    $('#footer').load('footer.html', function() {
        $('#return-to-top').click(function(){
            $('html,body').animate({ scrollTop: 0 }, 'slow');
            return false;
        });
    });

    changeMasthead();

    $('#masthead').on('slid.bs.carousel', function () {
        var index = $(this).find('.item.active').index();
        if (index == 0) {
            $('.left').addClass('active');
            $('.right').removeClass('active');
        } else {
            $('.right').addClass('active');
            $('.left').removeClass('active');
        }
    });

    //set the button height
    setTimeout(function(){resizeButtton(); }, 500);

    $('#scroll-down').on('click', function(){
        $('html, body').animate({
            scrollTop: $('.container-fluid').first().offset().top
        }, 1000);
    })

});

function closePopup() {
  $.magnificPopup.close();
  $.powerTip.hide();
}

$(window).resize(function() {
    changeMasthead();
    resizeButtton();
    $.powerTip.hide();
});

function changeMasthead(){
    $('#masthead .item').each( function() {
        var mastheadbg;
        if ($(window).width() < 480){
            mastheadbg = $(this).attr('data-bg-mobile')
        } else {
            mastheadbg = $(this).attr('data-bg-desktop')
        }
        $(this).css('background-image', 'url(' + mastheadbg + ')');
    })
}

function resizeButtton(){
    $('a.button').each(function(){
        /*var children = $(this).find('span').css('height', $(this).height());
        children[0].css('height', $(this).height())
        children[1].css('height', $(this).height())*/
        $(this).find('span:nth-child(2)').height($(this).find('span:first-child').height());
    })
    $('a.button-inline').each(function(){
        /*var children = $(this).find('span');
        children[0].css('height', $(this).height())
        children[1].css('height', $(this).height())*/
        $(this).find('span:nth-child(2)').height($(this).find('span:first-child').height());
    })
    //$('a.button span:nth-child(2)').height($('a.button span:first-child').height());
    //$('a.button-inline span:nth-child(2)').height($('a.button-inline span:first-child').height());
}

function map_initialize() {
    /*
    var styles = [{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"on"},{"lightness":33}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2e5d4"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#c5dac6"}]},{"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":20}]},{"featureType":"road","elementType":"all","stylers":[{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#c5c6c6"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#e4d7c6"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#fbfaf7"}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"on"},{"color":"#acbcc9"}]}];

    var styledMap = new google.maps.StyledMapType(styles, {name: "Styled Map"});

    var mapCanvas = document.getElementById('map-canvas');
    var mapOptions = {
      center: new google.maps.LatLng(3.127618, 101.643109),
      zoom: 20,
      mapTypeControlOptions: {
          mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
        }
    }
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(3.127618, 101.643109),
        map: map,
        icon: 'images/map-marker.png',
        title: 'QR Retail Automation (ASIA) Sdn. Bhd.'
    });
    */
    //Associate the styled map with the MapTypeId and set it to display.
      //map.mapTypes.set('map_style', styledMap);
      //map.setMapTypeId('map_style');
}