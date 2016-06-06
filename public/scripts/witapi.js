var wittyanswer = null;

// Triggers upon submit button click. 
$('#ask').on('click', function(e) {
		// Find text field by id. 
		var textInput = document.getElementById("answer");
		// Test that it's found. 
		console.log(textInput.value);
		// JSONP request. 
		$.ajax({
  			url: 'https://api.wit.ai/message',
  			data: {
    			'q': 'set an alarm in 10min',
    			'access_token' : 'OIMWEOE6BX6YJKLJRWZNZVWSVZJ6GERK'
  			},
  			dataType: 'jsonp',
        async: false,
  			method: 'GET',
  			success: function(response) {
      			console.log("success!", response);
            wittyanswer = response; 
 			  }
  	 });

});