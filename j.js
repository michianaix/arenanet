$(function(){



	var points = [
		{ "eventType":"location" , "title":"1.5 Mbits/sec" , "date":"Public, Free" }, 
		{ "eventType":"location" , "title":"3.0 Mbits/sec" , "date":"$10/month" }, 
		{ "eventType":"location" , "title": "6.0 Mbits/sec" , "date":"$15/month" },
		{ "eventType":"occupation" , "title":"3.0 Mbits/sec" , "date":"$10/month"},
		{ "eventType":"occupation" , "title":"3.0 Mbits/sec" , "date":"$10/month"},
		{ "eventType":"occupation" , "title":"9 Mbits/sec" , "date":"$30/month"},
		{ "eventType":"occupation" , "title":"Free WiFi Users!" , "date":"x12"},
	];


	$(window).bind('mousemove', function(e){

	    $('.floater').css({
	       top:   e.pageY - 65,
	       left: e.pageX - 100
	    });
	    
	});
	
	$('.points circle').live({
	
		mouseover: function() {
	    
			$('.floater').toggleClass('show');
			
			var index 	= $(this).index();
			
			var title 	= points[index].title;
			var date 	= points[index].date;
			
			$('.tooltip .title').text(title);
			$('.tooltip .date').text(date);    
		    
    	},
    	
    	mouseout: function() {
    	
			$('.floater').toggleClass('show');    	
    	
   		}

	});
	

});