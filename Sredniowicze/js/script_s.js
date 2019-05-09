var i = 2;
sukienkaMarginLeft = -250;
sukienkaMarginTop = 100;

butyMarginLeft = 200;
butyMarginTop = -50;
butyWidth = 50;

koraleMarginLeft = -230;
koraleMarginTop = -46;
koraleWidth = 68.98;

plaszczMarginLeft = 200;
plaszczMarginTop = -50;

kapeluszMarginLeft = -150.5;
kapeluszMarginTop = 49;

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
        buty.style.marginLeft = butyMarginLeft - 10 * procenty + "px";
        buty.style.marginTop = butyMarginTop + 2.5 * procenty + "px";
        buty.style.width = butyWidth - 0.5 * procenty + "%";
    }
    else if (procenty > 20 && procenty <= 45) {
        timecode = 600;
        procenty = procenty - 1;
        sukienka.style.marginTop = sukienkaMarginTop - (procenty - 20) * 4 + "px";
        sukienka.style.marginLeft = sukienkaMarginLeft + 10 * (procenty - 20) + "px";
    }
    else if (procenty > 45 && procenty <= 68) {
        timecode = 500;
        procenty = procenty - 1;
        korale.style.marginTop = koraleMarginTop + 2 * (procenty - 45) + "px";
        korale.style.marginLeft = koraleMarginLeft + 10 * (procenty - 45) + "px";
        korale.style.width = (koraleWidth - 1.26 * (procenty - 45)) + "%";
    }
    else if (procenty > 68 && procenty <= 88) {
        timecode = 450;
        procenty = procenty - 1;
        plaszcz.style.marginTop = plaszczMarginTop + 2.5 * (procenty - 68) + "px";
        plaszcz.style.marginLeft = plaszczMarginLeft - 10 * (procenty - 68) + "px";
    }
    else if (procenty > 88 && procenty <= 123) {
        timecode = 400;
        procenty = procenty - 1;
        kapelusz.style.marginTop = kapeluszMarginTop - 1.4 * (procenty - 88) + "px";
        kapelusz.style.marginLeft = kapeluszMarginLeft + 4.3 * (procenty - 88) + "px";
    }
    else if (procenty >= 124) {
        procenty = 124;
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

    if (procenty >= 124) {

        alert("Gratulacje!!!");
        sylwetka.style.visibility = 'hidden';
        sukienka.style.visibility = 'hidden';
        buty.style.visibility = 'hidden';
        korale.style.visibility = 'hidden';
        plaszcz.style.visibility = 'hidden';
        kapelusz.style.visibility = 'hidden';
        fin.style.visibility = 'visible';
        button1.style.visibility = 'hidden';
        fin.style.left = '-450px';

        for(var i=0;i<15;i++){
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
                buty.style.marginLeft = butyMarginLeft - 10 * procenty + "px";
                buty.style.marginTop = butyMarginTop + 2.5 * procenty + "px";
                buty.style.width = butyWidth - 0.5 * procenty + "%";
            }
            else if (procenty > 20 && procenty <= 45) {
                sukienka.style.marginTop = sukienkaMarginTop - (procenty - 20) * 4 + "px";
                sukienka.style.marginLeft = sukienkaMarginLeft + 10 * (procenty - 20) + "px";
            }
            else if (procenty > 45 && procenty <= 68) {
                korale.style.marginTop = koraleMarginTop + 2 * (procenty - 45) + "px";
                korale.style.marginLeft = koraleMarginLeft + 10 * (procenty - 45) + "px";
                korale.style.width = (koraleWidth - 1.26 * (procenty - 45)) + "%";
            }
            else if (procenty > 68 && procenty <= 88) {
                plaszcz.style.marginTop = plaszczMarginTop + 2.5 * (procenty - 68) + "px";
                plaszcz.style.marginLeft = plaszczMarginLeft - 10 * (procenty - 68) + "px";
            }
            else if (procenty > 88 && procenty <= 123) {
                kapelusz.style.marginTop = kapeluszMarginTop - 1.4 * (procenty - 88) + "px";
                kapelusz.style.marginLeft = kapeluszMarginLeft + 4.3 * (procenty - 88) + "px";
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
