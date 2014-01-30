//.btn-info is blue
//.btn-warning is oragne
//.btn-danger is red


var orangeFire = {
			class: 'btn btn-warning',
			'data-state': 'onfire'
		};

var redFire = {
			class: 'btn btn-danger',
			'data-state': 'burning'
		}



var wildfire = function() {

	if ($('.selected-power').data('power') === 'water') {
		$(this).attr('class','btn btn-info');
		$(this).attr('data-state','water');
		$(this).text('Water');
	}
	else {
		$(this).attr('class','btn btn-danger');
		$(this).attr('data-state','burning');
	};

};

var activePower = function () {
	$('.power').removeClass('selected-power');
	$(this).addClass('selected-power');
};

var checkOnFire = function() {

	$('[data-state="onfire"]').attr(redFire);


	$('[data-state="burning"]').each(function(){
		if (checkRedBlue($(this),'prev')===false) {
			$(this).closest('li').prev().find('.btn').attr(orangeFire);
		};

		if (checkRedBlue($(this),'next')===false) {
			$(this).closest('li').next().find('.btn').attr(orangeFire);
		};
	});


	$('[data-state="onfire"]').each(function(){
	

		if (checkRedBlue($(this),'prev')===false) {
			$(this).closest('li').prev().find('.btn').attr(orangeFire);
			// if (checkRedBlue($(this).prev())===false) {
			// 	$(this).closest('li').prev().prev().find('.btn').attr(orangeFire);
			// };
		};

		if (checkRedBlue($(this),'next')===false) {
			$(this).closest('li').next().find('.btn').attr(orangeFire);
			// if (checkRedBlue($(this).next(),'next')===false) {
			// 	$(this).closest('li').next().next().find('.btn').attr(orangeFire);
			// };
		};		
	});
};


var checkRedBlue = function(obj,direction) {
	var checksquare = direction === 'prev' ?
		obj.closest('li').prev().find('.btn') :
		obj.closest('li').next().find('.btn');

	var ret = (checksquare.data('state') === 'water' || 
		checksquare.data('state') === 'burning') ? 
		true : false;
	return ret;
};



$(document).on('click','.power',activePower)
$(document).on('click','#land .btn',wildfire)

var onfireTime = setInterval(function(){checkOnFire()},1000); 
