
 
 $(document).ready
 (function(){
   $("#displaylabtests").click(function(){
      $("#labtestsData").animate({
         width:"toggle"
      });
   });
 });
 
 $(document).ready
 (function(){
   $("#displayappts").click(function(){
      $("#appointmentT").animate({
         width:"toggle"
      });
   });
 });
 
 $(document).ready(
    
    function(){
       $("#addt").click(
    
          function(){
     
             $("#addtest").animate({
        
                 width:"toggle"
             });
          });
       });