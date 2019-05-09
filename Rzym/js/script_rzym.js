var i = 2;
sukienkaMarginLeft = -144;
sukienkaMarginTop = -72;

butyMarginLeft = 100;
butyMarginTop = -100;
butyWidth = 50;

bransoletkaMarginLeft = -45;
bransoletkaMarginTop = -150;
bransoletkaWidth = 100;

koraleMarginLeft = 50;
koraleMarginTop = -100;
koraleWidth = 90;

plaszczMarginLeft = -300;
plaszczMarginTop = 150;

pasekMarginLeft = 140;
pasekMarginTop = 98;

var timecode = 3500;
var procenty = 0;




function wczytaj() {
    
    
    /*brick1.onclick = function() {
        i++;
        /*$('#counter').html(+i);*/

    document.getElementById('counter').innerHTML = procenty;

    if (procenty > 0 && procenty <= 20) {
        timecode = 800;
        procenty = procenty - 1;
        buty.style.marginLeft = butyMarginLeft - 5 * procenty + "px";
        buty.style.marginTop = butyMarginTop + 5 * procenty + "px";
        buty.style.width = butyWidth - 0.5 * procenty + "%";
    }
    else if (procenty > 20 && procenty <= 44) {
        timecode = 600;
        procenty = procenty - 1;
        sukienka.style.marginTop = sukienkaMarginTop + (procenty - 20) * 3 + "px";
        sukienka.style.marginLeft = sukienkaMarginLeft + 6 * (procenty - 20) + "px";
    }
    else if (procenty > 44 && procenty <= 59) {
        timecode = 650;
        procenty = procenty - 1;
        bransoletka.style.marginTop = bransoletkaMarginTop + 10 * (procenty - 44) + "px";
        bransoletka.style.marginLeft = bransoletkaMarginLeft + 3 * (procenty - 44) + "px";
        bransoletka.style.width = (bransoletkaWidth - 4 * (procenty - 44)) + "%";
    }
    else if (procenty > 59 && procenty <= 69) {
        timecode = 500;
        procenty = procenty - 1;
        korale.style.marginTop = koraleMarginTop + 10 * (procenty - 59) + "px";
        korale.style.marginLeft = koraleMarginLeft - 5 * (procenty - 59) + "px";
        korale.style.width = (koraleWidth - 5 * (procenty - 59)) + "%";
    }
    else if (procenty > 69 && procenty <= 99) {
        timecode = 450;
        procenty = procenty - 1;
        plaszcz.style.marginTop = plaszczMarginTop - 5 * (procenty - 69) + "px";
        plaszcz.style.marginLeft = plaszczMarginLeft + 10 * (procenty - 69) + "px";
    }
    else if (procenty > 99 && procenty <= 134) {
        timecode = 400;
        procenty = procenty - 1;
        pasek.style.marginTop = pasekMarginTop - 2.8 * (procenty - 99) + "px";
        pasek.style.marginLeft = pasekMarginLeft - 4 * (procenty - 99) + "px";
    }
    else if (procenty >= 135) {
        procenty = 135;
        setImageVisible(knopka);
    }


    time();
}

function setImageVisible(qwert) {
    qwert.style.visibility = 'visible';
}


function img_off() {
    if (i > 3) {
        document.getElementById("img_button").src = 'images/button_reload.png';
    }
    document.getElementById("button").src = '../images/button2.png';
}




function img_on() {
    if (i > 3) {
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
        document.body.style['overflow-y'] = 'scroll';
        /*document.etextbox.style['position'] = 'fixed';
        document.knopka.style['position'] = 'fixed';*/
        node.style.opacity = 1;
        
        if (typeof callback === 'function') callback()
    }

    node.addEventListener('animationend', handleAnimationEnd)
}

function dodaj() {

    if (procenty >= 135) {

        alert("Gratulacje!!!");
        dwolecie.style.visibility = 'hidden';
        sukienka.style.visibility = 'hidden';
        buty.style.visibility = 'hidden';
        bransoletka.style.visibility = 'hidden';
        korale.style.visibility = 'hidden';
        plaszcz.style.visibility = 'hidden';
        pasek.style.visibility = 'hidden';
        fin.style.visibility = 'visible';
        button1.style.visibility = 'hidden';
        fin.style.left = '-450px';
 
        for(var i=0;i<10;i++){
            animateCSS('.etext'+[i], 'fadeInUp');
        }
        
        
        

        /*.classList.add('animate');*/
    }
    else {
        if (i > 3) {
            window.location.reload();
        }
        else {
            procenty = procenty + 1;
            document.getElementById('counter').innerHTML = procenty;

            if (procenty > 0 && procenty <= 20) {
                buty.style.marginLeft = butyMarginLeft - 5 * procenty + "px";
                buty.style.marginTop = butyMarginTop + 5 * procenty + "px";
                buty.style.width = butyWidth - 0.5 * procenty + "%";
            } else if (procenty > 20 && procenty <= 44) {
                sukienka.style.marginTop = sukienkaMarginTop + 3 * (procenty - 20) + "px";
                sukienka.style.marginLeft = sukienkaMarginLeft + 6 * (procenty - 20) + "px";
            } else if (procenty > 44 && procenty <= 59) {
                bransoletka.style.marginTop = bransoletkaMarginTop + 10 * (procenty - 44) + "px";
                bransoletka.style.marginLeft = bransoletkaMarginLeft + 3 * (procenty - 44) + "px";
                bransoletka.style.width = bransoletkaWidth - 4 * (procenty - 44) + "%";
            } else if (procenty > 59 && procenty <= 69) {
                korale.style.marginTop = koraleMarginTop + 10 * (procenty - 59) + "px";
                korale.style.marginLeft = koraleMarginLeft - 5 * (procenty - 59) + "px";
                korale.style.width = (koraleWidth - 5 * (procenty - 59)) + "%";
            } else if (procenty > 69 && procenty <= 99) {
                plaszcz.style.marginTop = plaszczMarginTop - 5 * (procenty - 69) + "px";
                plaszcz.style.marginLeft = plaszczMarginLeft + 10 * (procenty - 69) + "px";
            } else if (procenty > 99 && procenty <= 134) {
                pasek.style.marginTop = pasekMarginTop - 2.8 * (procenty - 99) + "px";
                pasek.style.marginLeft = pasekMarginLeft - 4 * (procenty - 99) + "px";
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
