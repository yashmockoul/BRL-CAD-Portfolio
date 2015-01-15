       $(document).ready(function(){
        $(".text").hide();
       
           
           $("#docs1").click(function(){
       
        
        if($("#docs1").hasClass("active")){
             $("#text1").slideUp();
                $("#docs1").removeClass("active");
          
        }else{
         $("#text1").slideDown();
                $("#docs1").addClass("active");
        }
       
           });
           
    
    $("#docs2").click(function(){
       
        
        if($("#docs2").hasClass("active")){
             $("#text2").slideUp();
                $("#docs2").removeClass("active");
          
        }else{
         $("#text2").slideDown();
                $("#docs2").addClass("active");
        }
       
           });
     
  
          $("#docs3").click(function(){
       
        
        if($("#docs3").hasClass("active")){
             $("#text3").slideUp();
                $("#docs3").removeClass("active");
          
        }else{
         $("#text3").slideDown();
                $("#docs3").addClass("active");
        }
       
           });
       
           
  $("#docs4").click(function(){
       
        
        if($("#docs4").hasClass("active")){
             $("#text4").slideUp();
                $("#docs4").removeClass("active");
          
        }else{
         $("#text4").slideDown();
                $("#docs4").addClass("active");
        }
       
           });
        
        });