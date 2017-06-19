app.controller("wCtrl", function($scope) {

	$(function() {
		$("#submit_btn").click(function() {

		    var values = $('#choice').serialize();
		   
		    //form validation
		    function validateEmail(email) {
		    	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		    	return re.test(email);
		    }
		    $("#valid_test").text("");
		    var name = $("#name").val();
			if(name=="")
			{
				$("#valid_test").html("<p>Name field cannot be blank</p>");
				$("#valid_test").css("color", "white");
				$("#name").css("borderWidth", "3px");
				$("#name").css("borderColor", "#a94141");
				return false;
			}else{
				$("#name").css("border","1px solid #ccc");
			}
		    var email = $("#email").val();
		    if (validateEmail(email)==false) {
				$("#valid_test").html("<p>Please enter valid email address</p>");
				$("#valid_test").css("color", "white");
				$("#email").css("borderWidth", "3px");
				$("#email").css("borderColor", "#a94141");
				return false;
			}else{
				$("#email").css("border","1px solid #ccc");
			}

			$("#result").fadeIn("slow");

		    $.ajax({
		    	url: "submit.php",
		    	type: "POST",		    	
		    	data: values,
		    	success: function() {
		    		$('#choice_form').html("<div id='message'></div>");
		    		$('#message').html("<h1>Response Submitted!</h1>")
		    		$('#message').append("<img src='img/success.png' height='300' width='300' />");
		    		$('#message').append("<p><br></p><p>Click on button below to see stats.</p>");
		    	}
		    });
		    
		    setTimeout(function(){ 
		    	$.ajax({
			    	url: "copy.php",
			    	type: "POST"
			    });

		    	$.getJSON('data.json', function(data) {
		    		
		    		var chrome=firefox=explorer=safari=opera=konqueror=lynx=0;
		    		for(var key in data){
		    			if (data[key].browser=="chrome")
		    				chrome++;
		    			else if (data[key].browser=="explorer")
		    				explorer++;
		    			else if (data[key].browser=="firefox")
		    				firefox++;
		    			else if (data[key].browser=="safari")
		    				safari++;
		    			else if (data[key].browser=="opera")
		    				opera++;
		    			else if (data[key].browser=="konqueror")
		    				konqueror++;
		    			else if(data[key].browser=="lynx")
		    				lynx++;
		    			console.log(data[key].browser);
		    		}
		    		var tot = chrome+explorer+firefox+safari+opera+konqueror+lynx;
		    		var $chrome = (((1.0*chrome)/tot)*100).toFixed(1);
		    		var $firefox = (((1.0*firefox)/tot)*100).toFixed(1);
		    		var $explorer = (((1.0*explorer)/tot)*100).toFixed(1);
		    		var $opera = (((1.0*opera)/tot)*100).toFixed(1);
		    		var $safari = (((1.0*safari)/tot)*100).toFixed(1);
		    		var $konqueror = (((1.0*konqueror)/tot)*100).toFixed(1);
		    		var $lynx = (((1.0*lynx)/tot)*100).toFixed(1);

		    		console.log(tot);
		    		console.log($chrome);
		    		console.log(safari);
		    		console.log($safari);
		    		
		    		$(".chrome").html($chrome+'%');
		    		$(".chrome").css("width", $chrome+'%');
		    		$(".firefox").html($firefox+'%');
		    		$(".firefox").css("width", $firefox+'%');
		    		$(".explorer").html($explorer+'%');
		    		$(".explorer").css("width", $explorer+'%');
		    		$(".opera").html($opera+'%');
		    		$(".opera").css("width", $opera+'%');
		    		$(".safari").html($safari+'%');
		    		$(".safari").css("width", $safari+'%');
		    		$(".konqueror").html($konqueror+'%');
		    		$(".konqueror").css("width", $konqueror+'%');
		    		$(".lynx").html($lynx+'%');
		    		$(".lynx").css("width", $lynx+'%');	    		
		    		
				});

		    }, 1500);

		});
	});

});