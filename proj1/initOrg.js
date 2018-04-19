			function init() {
			                   try {
		
				bridge.init();
				                        var qsParm = new Array();
                        var query = window.location.search.substring(1);
                        var parms = query.split('&amp;');
                        var strparms = parms[0].toUpperCase();
                        var pos = strparms.indexOf('LOCALE');
                        if (pos >= 0) {
                           var pos = parms[0].indexOf('=');
                           key = parms[0].substring(0,pos);
                           var language = parms[0].substring(pos+1);
        			        bridge.setLanguage(language);
					}
						           } catch (err) {
					       //on initial call this may cause an error due to Flex not fully
					       //initialized. No negative effects.
				        }
                           
			
						
			}