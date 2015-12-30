/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * 
 * https://github.com/sathomas/responsive-tabs#2-dependencies
 */
     



   function getTablaPosicion()
   {
        
       
         var varonilPJson='[{"nombre":"Almagro","img":"equipos/1A/ALMAGRO.jpg"},\n\
                        {"nombre":"Cabra","img":"equipos/1A/CABRA.jpg"},\n\
                        {"nombre":"Corrales de Balbuena","img":"equipos/1A/CORRALES DE BALBUENA.jpg"},\n\
                        {"nombre":"Gerona","img":"equipos/1A/GERONA.jpg"},\n\
                        {"nombre":"Guernika","img":"equipos/1A/GUERNIKA.jpg"},\n\
                        {"nombre":"La Rioja","img":"equipos/1A/NOPHOTO.jpg"},\n\
                        {"nombre":"Lerida","img":"equipos/1A/LERIDA.jpg"},\n\
                        {"nombre":"Matalascañas","img":"equipos/1A/MATALASCANAS.jpg"},\n\
                        {"nombre":"Mixcoac","img":"equipos/1A/MIXCOAC.jpg"},\n\
                        {"nombre":"Murcia","img":"equipos/1A/MURCIA.jpg"},\n\
                        {"nombre":"Palma","img":"equipos/1A/NOPHOTO.jpg"},\n\
                        {"nombre":"Sahara","img":"equipos/1A/SAHARA.jpg"},\n\
                        {"nombre":"San Lorenzo","img":"equipos/1A/SAN_LORENZO.jpg"},\n\
                        {"nombre":"Toledo","img":"equipos/1A/TOLEDO.jpg"},\n\
                        {"nombre":"Vallekas","img":"equipos/1A/VALLEKAS.jpg"},\n\
                        {"nombre":"Villareal","img":"equipos/1A/VILLARREAL.jpg"}]';
       
        var equipos=JSON.parse(varonilPJson);
        
        var jugados=15;
        
        for(var j=0;j<equipos.length;j++){
          
          var ganados=randomIntFromInterval(10,4);
          var empatados,perdidos,pts;
          
           if(j>0)
          {
            
            if(j%2==0)
            {
              empatados=15-ganados;
              perdidos=0;
            }
            else
            {
              perdidos=15-ganados;
              empatados=0;
            }

           
         }
         else{
             ganados=12;
             empatados=3;
             perdidos=0;
             
         }
          pts=(ganados*3)+empatados;
           var columna=  '<tr><td data-title="Equipo" class="col-md-4">'+  
                            '<div  class="media">'+
                            '<div class="media-left">'+
                                '<img class="media-object img-rounded" src="'+equipos[j].img+' "alt=""/>'+
                            '</div>'+
                            '<div class="media-body">'+
                                '<span class="media-heading">'+equipos[j].nombre+'</span>'+                  
                            '</div>'+
                          '</div>'+
                          '</td>'+
                          '<td data-title="Jugados"  class="col-md-2"><p class="flow-text">15</p></td>'+
                          '<td data-title="Ganados"   class="col-md-2"><p class="flow-text">'+ganados+'</p></td>'+
                          '<td data-title="Perdiso"   class="col-md-2"><p class="flow-text">'+empatados+'</p></td>'+
                          '<td data-title="Empatados"   class="col-md-2"><p class="flow-text">'+perdidos+'</p></td> \n\
                          <td  data-title="Puntos" class="col-md-2"><p class="flow-text">'+pts+'</p></td></tr>';
               
       
              console.log(columna);
                       
              $("#posiciones tbody").append(columna);     
                    
                
        }
        
        
                         
       
   }
   
   function randomIntFromInterval(min,max)
   {
        return Math.floor(Math.random()*(max-min+1)+min);
   }
   

              
 
/*      var produtosJson='[{"nombre":"Incensario","precioEn":"27.3","precio": "450","descripcionEn":"Craft made of stone balustrade","descripcion": "Artesania hecha de piedra de abalaustrÃ³", "imagen":"articulos/Sexto.png"},\n\
                         {"nombre": "Mascara de Abulon","precioEn":"27.3","precio": "450","descripcionEn":"Venturina obsidian","descripcion": "obsidiana con incrustaciones de venturina concha de abulÃ³n y cuarzos", "imagen":"articulos/Quinto.png"},\n\
                         {"nombre": "Mascara de Abulon","precioEn":"21.2","precio": "350","descripcionEn":"Craft made of stone balustrade", "descripcion": "Artesania hecha de concha de AbulÃ³n y concha nacar", "imagen":"articulos/Cuarto.png"},\n\
                         {"nombre": "Mascara de la Dualidad","precioEn":"39.2","precio": "650","descripcionEn":"Craft made of stone balustrade","descripcion": "Obsidiana con incrustaciones de citrino y turquesa", "imagen":"articulos/Tercero.png"},\n\
                         {"nombre": "Mascara de jaguar","precioEn":"30.2","precio": "500","descripcion": "Artesania hecha de piedras de mosaico","descripcionEn":"Craft made of stone balustrade", "imagen":"articulos/Segundo.png"},\n\
                         {"nombre": "Mascara de la vida","precioEn":"42.2","precio": "695","descripcion": "Artesania hecha de obsidiana y concha nÃ¡car","descripcionEn":"Craft made of stone balustrade", "imagen":"articulos/Primer.png"}]';*/