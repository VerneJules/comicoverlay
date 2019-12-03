function loadTrans(zimg){
	//remove margin
	zimg.style.marginBottom = "-7px";
	//add translation block
	zimg.insertAdjacentHTML('beforebegin','<img src="'+
		zimg.getAttribute('data-trans')+'" '+
		'class="ztransl" '+
		'width="'+zimg.offsetWidth+'" '+
		'height="'+zimg.offsetHeight+'" '+
		'style="position:absolute;'+
		'" />');
	//add transparent block for protection
	let transp = "https://drive.google.com/uc?export=view&id=1RVNO_NA6yNhAuZJXTTVBav7rMTStTbjX";	//transparent gif
	zimg.insertAdjacentHTML('beforebegin','<img src="'+transp+'" '+
		'class="ztransp" '+
		'width="'+zimg.offsetWidth+'" '+
		'height="'+zimg.offsetHeight+'" '+
		'style="position:absolute;'+
		'" />');
}
winResize = function(){
	let transps = document.getElementsByClassName("ztransp");
	let transls = document.getElementsByClassName("ztransl");
	for(let i = 0; i < transps.length; i++){
		transps[i].width = transps[i].nextSibling.offsetWidth;
		transps[i].height = transps[i].nextSibling.offsetHeight;
		transls[i].width = transls[i].nextSibling.offsetWidth;
		transls[i].height = transls[i].nextSibling.offsetHeight;
	}
}
if (window.addEventListener) {
	window.addEventListener('resize', winResize);
} else if (window.attachEvent) {
	window.attachEvent('resize', winResize);
}
