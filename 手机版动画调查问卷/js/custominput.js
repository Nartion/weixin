/**
 * --------------------------------------------------------------------
 * jQuery customInput plugin
 * Author: Maggie Costello Wachs maggie@filamentgroup.com, Scott Jehl, scott@filamentgroup.com
 * Copyright (c) 2009 Filament Group 
 * licensed under MIT (filamentgroup.com/examples/mit-license.txt)
 * --------------------------------------------------------------------
 */
jQuery.fn.customInput = function(){
	return $(this).each(function(){	
		if($(this).is('[type=checkbox],[type=radio]')){
			var input = $(this);
			
			// Ê¹ÓÃÊäÈëµÄIDµÃµ½Ïà¹ØµÄ±êÇ©
			var label = $('label[for='+input.attr('id')+']');
			
			// °ü¹üÔÚÒ»¸ödivÊäÈë+±êÇ©
			input.add(label).wrapAll('<div class="custom-'+ input.attr('type') +'"></div>');
			
			// ±ØÒªµÄä¯ÀÀÆ÷²»Ö§³Ö£ºhoverÎ±ÀàµÄ±êÇ©
			label.hover(
				function(){ $(this).addClass('hover'); },
				function(){ $(this).removeClass('hover'); }
			);
			
			//°ó¶¨×Ô¶¨ÒåÊÂ¼þ£¬´¥·¢Ëü£¬°ó¶¨µã»÷£¬½¹µã£¬Ä£ºýÊÂ¼þ				
			input.bind('updateState', function(){	
				input.is(':checked') ? label.addClass('checked') : label.removeClass('checked checkedHover checkedFocus'); 
			})
			.trigger('updateState')
			.click(function(){ 
		s		$('input[name='+ $(this).attr('name') +']').trigger('updateState'); 
			})
			.focus(function(){ 
				label.addClass('focus'); 
				if(input.is(':checked')){  $(this).addClass('checkedFocus'); } 
			})
			.blur(function(){ label.removeClass('focus checkedFocus'); });
		}
	});
};