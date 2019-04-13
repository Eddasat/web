// 第一种方法
// $('.dropdown').hover(function(){
// 	var $dropdown=$(this);
// 	$dropdown.find('.dropdown-toggle').css({
// 		'background-color':'#fff',
// 		'border-color':'#cdd0d4'
// 	});
// 	$dropdown.find('.dropdown-arrow').css({
// 		'background-image':'url(img/dropdown-arrow-active.png)'
// 	});
// 	$dropdown.find('.dropdown-layer').show();
// },function(){
//     var $dropdown=$(this);
// 	$dropdown.find('.dropdown-toggle').css({
// 		'background-color':'',
// 		'border-color':'#f3f5f7'
// 	});
// 	$dropdown.find('.dropdown-arrow').css({
// 		'background-image':'url(img/dropdown-arrow-active.png)'
// 	});
// 	$dropdown.find('.dropdown-layer').hide();
// });


// 第二种方法
// $('.dropdown').hover(function(){
// 	$(this).addClass('dropdown-active');
// },function(){
//     $(this).removeClass('dropdown-active');
// });

// 第三种方法，不使用js, 直接使用css中的hover实现