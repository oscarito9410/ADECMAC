$(document).ready(function(){
    
        $('.responsive-tabs').responsiveTabs({
            accordionOn: ['xs', 'sm']
          });
          $("#demo3").bootstrapNews({
            newsPerPage: 3,
            autoplay: true
        });
       $(".responsive-calendar").responsiveCalendar({
        time: '2016-01',
        events: {
          "2016-01-14": {"number": 1, "badgeClass": "label-warning","noticia":[{"mensaje":"PRÓXIMO PAGO DE FICHA VARONILES $12,500"}]},  
          "2016-01-07": {"number": 1, "badgeClass": "label-warning","noticia":[{"mensaje":"PRÓXIMO PAGO TORNEO 2016"}]},  
          "2016-01-14": {"number": 1, "badgeClass": "label-warning","noticia":[{"mensaje":"PRÓXIMA JORNADA SABATINA"}]},  
          "2016-01-26": {"number": 1, "badgeClass": "badge-warning", "url": "http://w3widgets.com"}, 
          "2016-01-03": {"number": 1, "badgeClass": "badge-error"}, 
          "2016-01-12": {}},
      
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
  
        wow = new WOW(
                      {
                      boxClass:     'wow',      // default
                      animateClass: 'animated', // default
                      offset:       0,          // default
                      mobile:       true,       // default
                      live:         true        // default
                    }
                    )
                    wow.init();
         
        $('.carousel').carousel();
        $(".dropdown-menu a").on("click",function(e){
            
                    $("#btnDropdown").html($(this).html() + '<span class="caret"></span>');
                    getTablaPosicion(varonialSJSON);
                    e.preventDefault();
        });
        $("#btnDropdown");
        getTablaPosicion(varonilPJson)
        
/*
         $("#amistosos").each(function(i){
                        
                        var list=$(this).find("li.list-group-item");
                        $((list).get().reverse()).each(function(){
                               var t=$(this);
                                       
                                   setTimeout(function(){ 
                                    
                                    t.addClass("animated fadeInUpBig");
                                    },(i+1) * 5000);
                            
                        });
        
                    
        $("li.opciones").click(function(){
                    
                   
                        
                        
                    });
            
        })
  */     
 });