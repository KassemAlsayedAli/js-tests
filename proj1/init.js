function _init() 
{
       try 
       {
              bridge.init();
              var query = window.location.search.substring(1);
              if(query == null)
                     return; 
              
              var params = query.split('&');
              
              for(var i = 0; i < params.length; i++)
              {
                     var subArr = params[i].split("=");
                     var name = subArr[0].toUpperCase();
                     var value = subArr[1];
                     
                     if(name == "LOCALE")
                           bridge.setLanguage(value);
                     else if(name == "MAILINGID")
                           bridge.setMailingId(value);
              }
       } 
       catch (err) 
       {
              //on initial call this may cause an error due to Flex not fully
              //initialized. No negative effects.
       }
}
