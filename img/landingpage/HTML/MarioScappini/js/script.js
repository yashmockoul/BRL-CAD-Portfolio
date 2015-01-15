$(document).ready(function(){
    $(".unecs").hide();
    $("#respnav").hide();
     $("#l").hide();
    $("#logo").addClass("slideDown");
        	
    $("#title").addClass("slideDown");
        	
    $("#desc").addClass("slideDown");
            if ($(window).width() <= 400){	
                $("#normnav").hide();
                $("#respnav").show();
                $(".respon").css("display","inline");
                $(".respon").hide();
                $(".respnav").css("paddingLeft","50px");
                $("#respnav").css("listStyle","none");
                $(".ugyl").css("float","right");
                $(".ugyl").css("position","absolute");
                $(".ugyl").css("marginTop","10px");
                $(".ugyl").css("right","30px");
                $(".pgyl").css("float","right");
                $(".pgyl").css("position","absolute");
                $(".pgyl").css("marginTop","70px");
                $(".pgyl").css("right","30px");
                $("#logo").css("width","300px");
                $("#logo").css("height","300px");
                $("#sites").css("paddingLeft","0px");
                $(".modim").css("width","250px");
                $(".modim").css("height","200px");
                $(".modim").css("left","0px");
                $("#old").css("widht","200px");
                $("#old").css("height","200px");
                   $("#old").css("display","block");
                   $("#old").css("margin","auto");
                  $("#grid-gallery").css("paddingRight","70px");
	   $("#respnav").click(function(){
   
      
   
        
if($("#gre").hasClass("active")){
     $(".respon").hide();
 
       $("#gre").removeClass("active");
                $("#gre").addClass("glyphicon-chevron-down");
                $("#gre").removeClass("glyphicon-chevron-up");
    }else{
      $(".respon").show();
        
        $("#gre").addClass("active");
    }
    });
                

            }
   
 
         $("#sbtn").click(function(){
         $("#logn").text("Sign In");
        $("#s").hide();
              $("#l").show();
         });
     $("#lbtn").click(function(){
         $("#logn").text("Log In");
        $("#l").hide();
              $("#s").show();
         });
           $("#more").click(function(){
       $("#glyp").removeClass("glyphicon-chevron-down");
        $("#glyp").addClass("glyphicon-chevron-up");
        $("#les").text("Less Options");
       
               if($("#more").hasClass("active")){
          
                $(".unecs").slideUp();
                $("#more").removeClass("active");
                $("#glyp").addClass("glyphicon-chevron-down");
                $("#glyp").removeClass("glyphicon-chevron-up"); 
                 $("#les").text("More Options");
                   
        }else{
        $(".unecs").slideDown();
        $("#more").addClass("active");
        
        }
       
           });
});