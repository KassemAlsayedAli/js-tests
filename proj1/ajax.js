function getContacts () {

     jQuery.ajax({
         type: "GET",
         url: "http://www.flickr.com/services/feeds/photos_public.gne?tags=soccer&format=json&jsoncallback=?",
         contentType: "application/json; charset=utf-8",
         dataType: "json",
         success: function (data, status, jqXHR) {
            var text = '{ "employees" : [' +
                        '{ "firstName":"John" , "lastName":"Doe" },' +
                        '{ "firstName":"Anna" , "lastName":"Smith" },' +
                        '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

            var json = JSON.parse(text);
            $('#outputDiv').html(json.employees[1].firstName + " " + json.employees[1].lastName);

            alert('data: '+ JSON.stringify(data));
         },

         error: function (jqXHR, status) {
             alert('Error: '+ JSON.stringify(jqXHR));
         }
    });
}
     