$(document).ready(function() {

	$('#solution-container').height($('#solution-container').width());

	//make the chart
	var s = Snap('#solution-chart');
	s.attr ({ viewBox: "0 0 800 800" });

	var inner_circle, outer_circle;
	var circle_blue, circle_green, circle_purple, circle_orange, circle_pink;
	var reveal_blue, reveal_green, reveal_purple, reveal_orange, reveal_pink, reveals;

	var outRingAnim = 40000;
	var smallCircleAnim = 4000;
	var revealAnim = 200;

	Snap.load("images/solution-chart.svg", function (f) {
		inner_circle = f.select("#base-ring-inner");
		outer_circle = f.select("#base-ring-outer");

		blue = f.select("#blue");
		green = f.select("#green");
		purple = f.select("#purple");
		orange = f.select("#orange");
		pink = f.select("#pink");

		blue2 = f.select("#blue2");
		green2 = f.select("#green2");
		purple2 = f.select("#purple2");
		orange2 = f.select("#orange2");
		pink2 = f.select("#pink2");

		circle_blue = f.select("#circle-blue");
		circle_green = f.select("#circle-green");
		circle_purple = f.select("#circle-purple");
		circle_orange = f.select("#circle-orange");
		circle_pink = f.select("#circle-pink");

		reveal_blue = f.select("#reveal-blue");
		reveal_green = f.select("#reveal-green");
		reveal_purple = f.select("#reveal-purple");
		reveal_orange = f.select("#reveal-orange");
		reveal_pink = f.select("#reveal-pink");

		reveal_blue.transform('s0.001,401,398.5');
		reveal_green.transform('s0.001,401,639.5');
		reveal_purple.transform('s0.001,160,398.5');
		reveal_orange.transform('s0.001,401,160.5');
		reveal_pink.transform('s0.001,638,398.5');

		reveals = [reveal_blue, reveal_green, reveal_purple, reveal_orange, reveal_pink]

		animateBigCircle();
		animateSmallCircle();

		/*if(is.ie()){

			blue.click(function(){onClick(reveal_blue)});
			green.click(function(){onClick(reveal_green)});
			purple.click(function(){onClick(reveal_purple)});
			orange.click(function(){onClick(reveal_orange)});
			pink.click(function(){onClick(reveal_pink)});

		}else{*/
			/*blue.hover(function(){onMouseover(reveal_blue,401,398.5)}, function(){onMouseout(reveal_blue,401,398.5)});
			green.hover(function(){onMouseover(reveal_green,401,639.5)}, function(){onMouseout(reveal_green, 382, 620)});
			purple.hover(function(){onMouseover(reveal_purple,160,398.5)}, function(){onMouseout(reveal_purple,160,398.5)});
			orange.hover(function(){onMouseover(reveal_orange,401,160.5)}, function(){onMouseout(reveal_orange,401,160.5)});
			pink.hover(function(){onMouseover(reveal_pink,638,398.5)}, function(){onMouseout(reveal_pink,638,398.5)});*/

		if(!jQuery.browser.mobile){
			var uagent = navigator.userAgent.toLowerCase();
			if(/safari/.test(uagent) && !/chrome/.test(uagent))
			{
			    setupClickFunction();
			    $('#helper-text').html("<b>Click on the circles for more details</b>");
			}else{
				blue.hover(function(){onMouseover(reveal_blue,401,398.5)}, function(){});
				green.hover(function(){onMouseover(reveal_green,401,639.5)}, function(){});
				purple.hover(function(){onMouseover(reveal_purple,160,398.5)}, function(){});
				orange.hover(function(){onMouseover(reveal_orange,401,160.5)}, function(){});
				pink.hover(function(){onMouseover(reveal_pink,638,398.5)}, function(){});

				blue2.hover(function(){}, function(){onMouseout(reveal_blue,401,398.5)});
				green2.hover(function(){}, function(){onMouseout(reveal_green, 382, 620)});
				purple2.hover(function(){}, function(){onMouseout(reveal_purple,160,398.5)});
				orange2.hover(function(){}, function(){onMouseout(reveal_orange,401,160.5)});
				pink2.hover(function(){}, function(){onMouseout(reveal_pink,638,398.5)});
				$('#helper-text').hide();
			}
		}else{

			
		}

		s.append(f);

	});

	function setupClickFunction(){

		blue.click(function(){
			onMouseover(reveal_blue,401,398.5)
		});
		green.click(function(){
			onMouseover(reveal_green,401,639.5)
		});
		purple.click(function(){
			onMouseover(reveal_purple,160,398.5)
		});
		orange.click(function(){
			onMouseover(reveal_orange,401,160.5)
		});
		pink.click(function(){
			onMouseover(reveal_pink,638,398.5)
		});

		blue2.click(function(){
			onMouseover(reveal_blue,401,398.5)
		});
		green2.click(function(){
			onMouseover(reveal_green,401,639.5)
		});
		purple2.click(function(){
			onMouseover(reveal_purple,160,398.5)
		});
		orange2.click(function(){
			onMouseover(reveal_orange,401,160.5)
		});
		pink2.click(function(){
			onMouseover(reveal_pink,638,398.5)
		});

		$('#helper-text').show();
	}
	//Loop the animation
	function animateBigCircle(){
		outer_circle.transform('');
		inner_circle.transform('');
		outer_circle.animate({ transform: 'rotate(r-360 383 378)' }, outRingAnim, mina.linear );
		inner_circle.animate({ transform: 'rotate(r360 383 378)' }, outRingAnim, mina.linear );
		setTimeout(function(){animateBigCircle()}, outRingAnim);
	}

	function animateSmallCircle(){
		circle_blue.transform('');
		circle_green.transform('');
		circle_purple.transform('');
		circle_orange.transform('');
		circle_pink.transform('');

		circle_blue.animate({ transform: 'r-360, 401.8, 407.4' }, smallCircleAnim, mina.linear);
		circle_green.animate({ transform: 'r-360, 401, 648.5' }, smallCircleAnim, mina.linear );
		circle_purple.animate({ transform: 'r-360, 160, 407.4' }, smallCircleAnim, mina.linear );
		circle_orange.animate({ transform: 'r-360, 401, 169.5' }, smallCircleAnim, mina.linear );
		circle_pink.animate({ transform: 'r-360, 638.9, 408.2' }, smallCircleAnim, mina.linear );

		setTimeout(function(){animateSmallCircle()}, smallCircleAnim);
	}

	function onClick(obj){
		console.log('is ie');
		for(var i = 0; i< reveals.length; i++){
			if(reveals[i]==obj){
				reveals[i].animate({ transform: 's1' }, revealAnim, mina.easeinout);
			}else{
				reveals[i].animate({ transform: 's0.001' }, revealAnim, mina.easein);
			}
		}		
	}

	function onMouseover(obj, x, y){
		
		for(var i = 0; i< reveals.length; i++){
			if(reveals[i]==obj){
				reveals[i].animate({ transform: 's1' }, revealAnim, mina.easeinout);
			}else{
				reveals[i].animate({ transform: 's0.001' }, revealAnim, mina.easein);
			}
		}		
	}

	function onMouseout(obj, x, y){
		obj.animate({ transform: 's0.001' }, revealAnim, mina.easein);
	}
});

$(window).resize(function(){
	$('#solution-container').height($('#solution-container').width());
})