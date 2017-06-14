$("#work01").animatedModal({
	modalTarget:'scletters-home',
	animatedIn:'slideInUp',
	animatedOut:'fadeOut',
	overflow: 'auto',
	color:'#transparent',
	// Callbacks
	beforeOpen: function() {
		console.log("The animation was called");
	},           
	afterOpen: function() {
		console.log("The animation is completed");
	}, 
	beforeClose: function() {
		console.log("The animation was called");
	}, 
	afterClose: function() {
		console.log("The animation is completed");
	}
});

$("#work02").animatedModal({
	modalTarget:'hungry-harvest-home',
	animatedIn:'slideInUp',
	animatedOut:'fadeOut',
	color:'#transparent',
	// Callbacks
	beforeOpen: function() {
		console.log("The animation was called");
	},           
	afterOpen: function() {
		console.log("The animation is completed");
	}, 
	beforeClose: function() {
		console.log("The animation was called");
	}, 
	afterClose: function() {
		console.log("The animation is completed");
	}
});

$("#work03").animatedModal({
	modalTarget:'paint',
	animatedIn:'slideInUp',
	animatedOut:'fadeOut',
	color:'#transparent',
	// Callbacks
	beforeOpen: function() {
		console.log("The animation was called");
	},           
	afterOpen: function() {
		console.log("The animation is completed");
	}, 
	beforeClose: function() {
		console.log("The animation was called");
	}, 
	afterClose: function() {
		console.log("The animation is completed");
	}
});
			
$("#work04").animatedModal({
	modalTarget:'alfred-todo',
	animatedIn:'slideInUp',
	animatedOut:'fadeOut',
	color:'#transparent',
	// Callbacks
	beforeOpen: function() {
		console.log("The animation was called");
	},           
	afterOpen: function() {
		console.log("The animation is completed");
	}, 
	beforeClose: function() {
		console.log("The animation was called");
	}, 
	afterClose: function() {
		console.log("The animation is completed");
	}
});

$("#work05").animatedModal({
	modalTarget:'react-timer-countdown',
	animatedIn:'slideInUp',
	animatedOut:'fadeOut',
	color:'#transparent',
	// Callbacks
	beforeOpen: function() {
		console.log("The animation was called");
	},           
	afterOpen: function() {
		console.log("The animation is completed");
	}, 
	beforeClose: function() {
		console.log("The animation was called");
	}, 
	afterClose: function() {
		console.log("The animation is completed");
	}
});
			
$('.work').click(function() {
   $('.full').addClass('hide')
  });
  
$('.close-full-screen').click(function() {
   $('.full').removeClass('hide')
  });
  
  
$(document).ready(function(){
	
	$('.tab-link').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('.tab-link').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

})