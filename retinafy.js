//Retinafy
(function($){
	$.fn.retinafy = function(load){
		target = $(this);
			if (window.devicePixelRatio >= 2) {
				if (load !== null) {
					var retina = target.find('*').andSelf().filter(function(){
					    return $(this).is('img') || ($(this).css('backgroundImage') !== 'none');
					})
					
						for (i=0; i<retina.length; i++) {
							var img = retina[i];
							var srcImg = $(img).attr('src');
							var bgImg = $(img).css('background-image');
							
							function IsImageOk(img) {
							    if (!img.complete) {
							        return false;
							    }
							    if (typeof img.naturalWidth != "undefined" && img.naturalWidth == 0) {
							        return false;
							    }
							    return true;
							}
							
							function urlExists(url) {
									if (!(!url.match(/^https?\:/i) || url.match("//" + document.domain))) {
										return false;
									} else {
									    var http = new XMLHttpRequest();
									    	http.open('HEAD', url, false);
									    	http.send();
									    return http.status != 404;
									}
								}
							
							function doRetina() {
								var imgWidth = $(img).width();
								var imgHeight = $(img).height();
								
								if ($(img).is('img') && (srcImg.indexOf('@2x') == -1)) {
									
									var stry = srcImg.lastIndexOf('.');
									if (stry != -1) {
										srcImg = srcImg.substr(0, stry) + "@2x" + srcImg.substr(stry);
									}
									
									if (urlExists(srcImg)) {
										$(img).attr('src',srcImg);
										$(img).attr('width',imgWidth).height('height',imgHeight);
									}
								}
							}
							if (IsImageOk(img)) {
								doRetina()
							} else {
								if ($(img).is('img') && (srcImg.indexOf('@2x') == -1)) {
									img.onload = function(){
										doRetina();
									}
								} else {
									var imgWidth = $(img).width();
									var imgHeight = $(img).height();
									var strx = bgImg;
									var stry = strx.lastIndexOf('.');
									
									if (stry != -1) {
										strx = strx.substr(0, stry) + "@2x" + strx.substr(stry);
									}
									
									var bgImgUrl = strx;
									var bgImgUrl = bgImgUrl.substr(4);
									var bgImgUrl = bgImgUrl.substr(0,bgImgUrl.length-1);
									
									if (urlExists(bgImgUrl)) {
										$(img).css('background-image',strx);
										$(img).css('background-size',imgWidth + 'px ,' + imgHeight + 'px');
									};
								}
							}
						};
				};
				
			return true;
				
			} else {
				return false;
			}
			
	};
})(jQuery);