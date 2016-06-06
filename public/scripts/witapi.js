const Wit = require('node-wit').Wit;

// Triggers upon submit button click. 
$('#ask').on('click', function(e) {
		// Find text field by id. 
		var textInput = document.getElementById("answer");
		// Test that it's found. 
		console.log(textInput.value);
});