$(document).ready(function(){
	$("#demo3").bootstrapNews({
            newsPerPage: 3,
            autoplay: true,
        });
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