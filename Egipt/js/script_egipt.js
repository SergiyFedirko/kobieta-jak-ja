var i = 2;
var esukienkaMarginLeft = -240;
var esukienkaMarginTop = -72;

var eposochMarginLeft = 50;
var eposochMarginTop = 0;

var ebutyMarginLeft= -100;
var ebutyMarginTop= 100;

var ebransoletkiMarginLeft= -350;
var ebransoletkiMarginTop= 157.5;
var ebransoletkiWidth = 89;

var eobruczMarginTop= 150;
var eobruczMarginLeft= 100.5;
var eobruczWidth= 79;

var epasekMarginLeft= 350;
var epasekMarginTop= 140;

var epektoralMarginLeft= 250;
var epektoralMarginTop= -50;

var timecode = 3500;
var procenty = 0;
    
        
function wczytaj() {     
    /*brick1.onclick = function() {
        i++;
        /*$('#counter').html(+i);*/

        document.getElementById('counter').innerHTML = procenty;
	
		if (procenty >0 && procenty <=24) {
			timecode = 800;
            procenty=procenty-1;
            esukienka.style.marginTop = esukienkaMarginTop + procenty*3 + "px";
            esukienka.style.marginLeft  = esukienkaMarginLeft + 10*procenty + "px";
            
			}
		else if (procenty >24 && procenty <=34) {
			timecode = 600;
            procenty=procenty-1;
            eposoch.style.marginLeft  = eposochMarginLeft - 5*(procenty-24) + "px";
			}
		else if (procenty >34 && procenty <=44) {
			timecode = 650;
            procenty=procenty-1;
            ebuty.style.marginTop = ebutyMarginTop - 10*(procenty-34) + "px";
            ebuty.style.marginLeft  = ebutyMarginLeft + 10*(procenty-34) + "px";
				}
		else if (procenty >44  && procenty <=79) {
			timecode = 500;
            procenty=procenty-1;
            ebransoletki.style.marginTop = ebransoletkiMarginTop - 4.5*(procenty-44) + "px";
            ebransoletki.style.marginLeft  = ebransoletkiMarginLeft + 10*(procenty-44) + "px";
            ebransoletki.style.width  = ebransoletkiWidth - 1.4*(procenty-44) + "%";
				}
		else if (procenty >79  && procenty <=94) {
			timecode = 450;
            procenty=procenty-1;
            eobrucz.style.marginTop = eobruczMarginTop - 10*(procenty-79) + "px";
            eobrucz.style.marginLeft  = eobruczMarginLeft - 6.7*(procenty-79) + "px";
            eobrucz.style.width  = eobruczWidth - 2.6*(procenty-79) + "%";
				}
		else if (procenty >94  && procenty <=129) {
			timecode = 400;
            procenty=procenty-1;
            epasek.style.marginTop = epasekMarginTop - 4*(procenty-94) + "px";
            epasek.style.marginLeft  = epasekMarginLeft - 10*(procenty-94) + "px";
				}
		else if (procenty >129  && procenty <=154) {
			timecode = 350;
            procenty=procenty-1;
            epektoral.style.marginTop = epektoralMarginTop + 2*(procenty-129) + "px";
            epektoral.style.marginLeft  = epektoralMarginLeft - 10*(procenty-129) + "px";
				}
		else if (procenty >=155) {
            procenty=155;
            setImageVisible(knopka);
				}
        
    
    time();
}

function setImageVisible(qwert) {
    qwert.style.visibility = 'visible';
}


function img_off() {
    if (i>3) {
    document.getElementById("img_button").src = 'images/button_reload.png';
    }
    document.getElementById("button").src = '../images/button2.png';
    }



function img_on() {
    if (i>3) {
    document.getElementById("img_button").src = 'images/button_reload.png';	
    }
    document.getElementById("button").src = '../images/button1.png';
    }
/*
    function egipt_info() {
        $('.egipt').style.visibility = 'hidden';
        egipt.style.visibility = 'hidden';
        eposoch.classList.add('animate');
    }
*/
function animateCSS(element, animationName, callback) {
    const node = document.querySelector(element)
    node.classList.add('animated', animationName)

    function handleAnimationEnd() {
        node.classList.remove('animated', animationName)
        node.removeEventListener('animationend', handleAnimationEnd)
        node.style.opacity = 1;
        if (typeof callback === 'function') callback()
    }

    node.addEventListener('animationend', handleAnimationEnd)
}

    function dodaj() {
       
        if (procenty>=155) {
            
            alert("Gratulacje!!!");
            egipt.style.visibility = 'hidden';
            esukienka.style.visibility = 'hidden';
            eposoch.style.visibility = 'hidden';
            ebuty.style.visibility = 'hidden';
            ebransoletki.style.visibility = 'hidden';
            eobrucz.style.visibility = 'hidden';
            epasek.style.visibility = 'hidden';
            epektoral.style.visibility = 'hidden';
            egiptfin.style.visibility = 'visible';
            button1.style.visibility = 'hidden';
            egiptfin.style.left='-450px';
            animateCSS('.etext', 'fadeInUp');
            
            /*.classList.add('animate');*/
            }
        else {
            if (i>3) {
                window.location.reload();
                }
                else {
                    procenty=procenty+1;
                    document.getElementById('counter').innerHTML = procenty;
                    
                    if(procenty >0 && procenty <=24){
                        esukienka.style.marginLeft  = esukienkaMarginLeft +10* procenty + "px";
                        esukienka.style.marginTop = esukienkaMarginTop + procenty*3 + "px";
                    }else if (procenty >24 && procenty <=34) {
                        eposoch.style.marginLeft  = eposochMarginLeft - 5*(procenty-24) + "px";
                    }else if (procenty >34 && procenty <=44) {
                        ebuty.style.marginTop = ebutyMarginTop - 10*(procenty-34) + "px";
                        ebuty.style.marginLeft  = ebutyMarginLeft + 10*(procenty-34) + "px";
                    }else if (procenty >44  && procenty <=79) {
                        ebransoletki.style.marginTop = ebransoletkiMarginTop - 4.5*(procenty-44) + "px";
                        ebransoletki.style.marginLeft  = ebransoletkiMarginLeft + 10*(procenty-44) + "px";
                        ebransoletki.style.width  = ebransoletkiWidth - 1.4*(procenty-44) + "%";
                    }else if (procenty >79  && procenty <=94) {
                        eobrucz.style.marginTop = eobruczMarginTop -10*(procenty-79) + "px";
                        eobrucz.style.marginLeft  = eobruczMarginLeft - 6.7*(procenty-79) + "px";
                        eobrucz.style.width  = eobruczWidth - 2.6*(procenty-79) + "%";
                    }else if (procenty >94  && procenty <=129) {
                        epasek.style.marginTop = epasekMarginTop - 4*(procenty-94) + "px";
                        epasek.style.marginLeft  = epasekMarginLeft - 10*(procenty-94) + "px";
                    }else if (procenty >129  && procenty <=154) {
                        epektoral.style.marginTop = epektoralMarginTop + 2*(procenty-129) + "px";
                        epektoral.style.marginLeft  = epektoralMarginLeft - 10*(procenty-129) + "px";
                        }
                    }
            }
    }

    function time() {
        setTimeout(wczytaj, timecode);
        }



/*if(i>0){
                es++;
                esukienka.style.marginLeft  = es + "px";
                document.getElementById('esukienka').style.marginLeft = document.getElementById('esukienka').style.marginLeft + 5;
            }else if(i==20){
                eposoch.classList.add('animate'); 
            }else if(i==30){
                ebuty.classList.add('animate');
            }else if(i==40){
                ebransoletki.classList.add('animate');
            }else if(i==50){
                eobrucz.classList.add('animate');
            }else if(i==60){
                epasek.classList.add('animate');
            }else if(i==70){
                epektoral.classList.add('animate');
            }*/


/*
$(document).ready(function() {
    
    $('#brick1').click(function() {
        i++;
        $('#counter').html(+i);


        if(i==1){
           
                esukienka.classList.add('animate');
              
            }else if(i==2){
                
                eposoch.classList.add('animate');
                   
            }
    });

});
*/
