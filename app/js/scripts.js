$('.mobile-menu-toggle').click(function() {
	var $mobileMenu = $('.mobile-menu');
	var $menuToggle = ('.menuButton i');
	if($mobileMenu.hasClass('inactive')) {
	   $mobileMenu.removeClass('inactive').addClass('active');
		
		if($menuToggle.hasClass('ion-navicon-round')){
	   $menuToggle.removeClass('ion-navicon-round').addClass('ion-close-round');
	   }
		else {
			console.log('eat-shit');
		}
	}
	else {
		 $mobileMenu.removeClass('active').addClass('inactive');		 
		}
							   
	
});