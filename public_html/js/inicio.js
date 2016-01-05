$(document).ready(function(){
    
      wow = new WOW(
                      {
                      boxClass:     'wow',      // default
                      animateClass: 'animated', // default
                      offset:       0,          // default
                      mobile:       true,       // default
                      live:         true        // default
                    }
                    );
                    wow.init();
        
        if(isMobile.any())
        {
            $("#noticiasContenedor").addClass("wow fadeInLeftBig");
            $("#opcionesBarra").addClass("wow fadeInLeftBig");
        }
        
       $('.responsive-tabs').responsiveTabs({
            accordionOn: ['xs', 'sm']
          });
        $("#noticiasBarra").bootstrapNews({
            newsPerPage: 3,
            autoplay: true
        });
       $(".responsive-calendar").responsiveCalendar({
        time: '2016-01',
        events: {
          "2016-01-14": {"number": 1, "badgeClass": "label-warning","noticia":[{"mensaje":"PRÓXIMO PAGO DE FICHA VARONILES $12,500"}]},  
          "2016-01-07": {"number": 1, "badgeClass": "label-warning","noticia":[{"mensaje":"PRÓXIMO PAGO TORNEO 2016"}]},  
          "2016-01-14": {"number": 1, "badgeClass": "label-warning","noticia":[{"mensaje":"PRÓXIMA JORNADA SABATINA"}]},},
      
        onActiveDayClick: function(events) {
                
            var thisDayEvent, key;
            key = $(this).data('year')+'-'+addLeadingZero($(this).data('month') )+'-'+addLeadingZero( $(this).data('day') );
            thisDayEvent = events[key];
            //alert(thisDayEvent.noticia[0].mensaje);
            var a=$(this).parent().find("a")
            a.attr("data-toggle","tooltip");
            a.attr("title",thisDayEvent.noticia[0].mensaje);
            a.tooltip("show");
            
         },
      
        translateMonths:[
            "Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre" 
        ]
    });
    
     function addLeadingZero(num) {
        if (num < 10) {
          return "0" + num;
        } else {
          return "" + num;
        }
      }
  
    
        $('.carousel').carousel();
        $(".dropdown-menu a").on("click",function(e){
            
                    e.preventDefault();
                    $("#btnDropdown").html($(this).html() + '<span class="caret"></span>');
                    
                    if($(this).attr("id")=="1a"){
                         getTablaPosicion(varonilPJson);
                    }
                    else if($(this).attr("id")=="2a"){
                        
                        getTablaPosicion(varonialSJSON);
                    }
                    else
                    {
                        alert($(this).attr("id"));
                    }
            
                    
                    
        });
        $("#btnDropdown");
        getTablaPosicion(varonilPJson);

 });
 
 var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};