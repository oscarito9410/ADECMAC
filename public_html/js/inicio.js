$(document).ready(function(){
	$("#demo3").bootstrapNews({
            newsPerPage: 3,
            autoplay: true
        });
       $(".responsive-calendar").responsiveCalendar({
        time: '2016-01',
        events: {
          "2016-01-30": {"number": 5, "badgeClass": "badge-warning", "url": "http://w3widgets.com/responsive-calendar","partidos":[{"dia":"perro"}]},
          "2016-01-26": {"number": 1, "badgeClass": "badge-warning", "url": "http://w3widgets.com"}, 
          "2016-01-03": {"number": 1, "badgeClass": "badge-error"}, 
          "2016-01-12": {}},
      
        onActiveDayClick: function(events) {
                
            var thisDayEvent, key;
            key = $(this).data('year')+'-'+addLeadingZero($(this).data('month') )+'-'+addLeadingZero( $(this).data('day') );
            thisDayEvent = events[key];
            alert(thisDayEvent.partidos.dia);
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
        $(".dropdown-menu a").on("click",function(){
            
                    $("#btnDropdown").html($(this).html() + '<span class="caret"></span>');
            
        });
        $("#btnDropdown");
        getTablaPosicion();
        
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