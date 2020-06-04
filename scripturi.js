function openPicture(imageName,imageWidth,imageHeight,alt,posLeft,posTop) {  // v4.01
       newWindow= window.open("","newWindow","width="+imageWidth+",height="+imageHeight+",scrollbars=no,left="+posLeft+",top="+posTop);
       newWindow.document.open();
       newWindow.document.write('<html><title>' + alt + '</title><body background=\"'+imageName+'\" leftmargin="0" topmargin="0" marginheight="0" marginwidth="0" onBlur="self.close()">');
       imageHeight = imageHeight-25;
       newWindow.document.write('<div style=\"FONT-FAMILY:Arial; SIZE: 12pt; left: 30px; top: '+imageHeight+'; POSITION: relative;\">');
       newWindow.document.write('<font color="#444411">' + alt + '</font></div>');
       imageHeight = imageHeight-26;
       newWindow.document.write('<div style=\"FONT-FAMILY:Arial; SIZE: 12pt; left: 29px; top: '+imageHeight+'px; POSITION: relative;\">');
       newWindow.document.write('<font color="#eeeeaa">' + alt + '</font></div>');
       newWindow.document.write('</body></html>');
       newWindow.document.close();
       newWindow.focus();
}


function tur() {
	window.open ('tur_virtual/turul.html', 'noua', 'toolbar=no, scrollbars=no, menubar=no, resizable=no, width=480, height=360, left=250, top=150');
	}
function arata(elmnt){	document.getElementById(elmnt).style.display = 'block';	document.getElementById(elmnt).style.visibility = 'visible';	}	function ascunde(elmnt){	document.getElementById(elmnt).style.display = 'none';	document.getElementById(elmnt).style.visibility = 'hidden';	}



var mlurile = {
			em1_1: "hotelcorsa",
			em2_1: "ymail",
			em: "com",
			ema: "@",
			incarcare: function(e){
				if(e == 1){
					return "office" + "[a]" + this.em1_1 + "." + this.em;
				} else {
					return this.em1_1 + "[a]" + this.em2_1 + "." + this.em;
				}
			}, 		// am facut aici imbarligatura naibii ca sa nu se mai inteleaga care ce mail este.
			mousePeste: function(e){
				if(e == 1){
					return "office" + this.ema + this.em1_1 + "." + this.em;
				} else {
					return this.em1_1 + this.ema + this.em2_1 + "." + this.em;
				}
			},
			modificLaIncarcare: function(){
				document.getElementById("em01").innerHTML = this.incarcare(1);
				document.getElementById("em02").innerHTML = this.incarcare(2);
			},
			modificLaOver: function(){
				document.getElementById("em01").innerHTML = this.mousePeste(1);
				document.getElementById("em02").innerHTML = this.mousePeste(2);
			}
			
}		//mlurile