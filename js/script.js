jQuery(document).ready(function () {
     
   
    jQuery('.send-form').click( function() {
    	var form = jQuery(this).closest('form');
    	
    	if ( form.valid() ) {
    		form.css('opacity','.5');
    		var actUrl = form.attr('action');

    		jQuery.ajax({
    			url: actUrl,
    			type: 'post',
    			dataType: 'html',
    			data: form.serialize(),
    			success: function(data) {
    				form.html(data);
    				form.css('opacity','1');
                    //form.find('.status').html('форма отправлена успешно');
                    //$('#myModal').modal('show') // для бутстрапа
    			},
    			error:	 function() {
    			     form.find('.status').html('серверная ошибка');
    			}
    		});
    	}
    });


	jQuery(document).ready(function(){
		$('body').append('<div id="go-top" title="up"><div></div></div>');
	  });
	  
	  $(function() {
	   $.fn.scrollToTop = function() {
		$(this).hide().removeAttr("href");
		if ($(window).scrollTop() >= "250") $(this).fadeIn("slow")
		var scrollDiv = $(this);
		$(window).scroll(function() {
		 if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow")
		 else $(scrollDiv).fadeIn("slow")
		});
		$(this).click(function() {
		 $("html, body").animate({scrollTop: 0}, "slow")
		})
	   }
	  });
	  
	  $(function() {
	   $("#go-top").scrollToTop();
	  });
	  


});