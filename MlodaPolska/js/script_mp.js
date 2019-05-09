var i = 2;
sukienkaMarginLeft = -250;
sukienkaMarginTop = -75;

butyMarginLeft = -200;
butyMarginTop = -50;
butyWidth = 50;

rekawiczkiMarginLeft = 200;
rekawiczkiMarginTop = 50;

koraleMarginLeft = -230;
koraleMarginTop = -46;
koraleWidth = 68.98;

plaszczMarginLeft = 200;
plaszczMarginTop = -50;

kapeluszMarginLeft = 350;
kapeluszMarginTop = 140;

torebkaMarginLeft = 200;
torebkaMarginTop = 70;
torebkaWidth = 50;

parasolMarginLeft = 250;
parasolMarginTop = 120;

bransoletkaMarginLeft = 50;
bransoletkaMarginTop = -100;
bransoletkaWidth = 80;

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
        buty.style.marginLeft = butyMarginLeft + 10 * procenty + "px";
        buty.style.marginTop = butyMarginTop + 2.5 * procenty + "px";
        buty.style.width = butyWidth - 0.5 * procenty + "%";
    }
    else if (procenty > 20 && procenty <= 45) {
        timecode = 600;
        procenty = procenty - 1;
        sukienka.style.marginTop = sukienkaMarginTop + (procenty - 20) * 3 + "px";
        sukienka.style.marginLeft = sukienkaMarginLeft + 10 * (procenty - 20) + "px";
    }
    else if (procenty > 45 && procenty <= 65) {
        timecode = 650;
        procenty = procenty - 1;
        rekawiczki.style.marginTop = rekawiczkiMarginTop - 2.5 * (procenty - 45) + "px";
        rekawiczki.style.marginLeft = rekawiczkiMarginLeft - 10 * (procenty - 45) + "px";
    }
    else if (procenty > 65 && procenty <= 88) {
        timecode = 500;
        procenty = procenty - 1;
        korale.style.marginTop = koraleMarginTop + 2 * (procenty - 65) + "px";
        korale.style.marginLeft = koraleMarginLeft + 10 * (procenty - 65) + "px";
        korale.style.width = (koraleWidth - 1.26 * (procenty - 65)) + "%";
    }
    else if (procenty > 88 && procenty <= 108) {
        timecode = 450;
        procenty = procenty - 1;
        plaszcz.style.marginTop = plaszczMarginTop + 2.5 * (procenty - 88) + "px";
        plaszcz.style.marginLeft = plaszczMarginLeft - 10 * (procenty - 88) + "px";
    }
    else if (procenty > 108 && procenty <= 143) {
        timecode = 400;
        procenty = procenty - 1;
        kapelusz.style.marginTop = kapeluszMarginTop - 4 * (procenty - 108) + "px";
        kapelusz.style.marginLeft = kapeluszMarginLeft - 10 * (procenty - 108) + "px";
    }
    else if (procenty > 143 && procenty <= 163) {
        timecode = 350;
        procenty = procenty - 1;
        torebka.style.marginTop = torebkaMarginTop - 3.5 * (procenty - 143) + "px";
        torebka.style.marginLeft = torebkaMarginLeft - 10 * (procenty - 143) + "px";
        torebka.style.width = torebkaWidth - 0.5 * (procenty - 143) + "%";
    }
    else if (procenty > 163 && procenty <= 188) {
        timecode = 350;
        procenty = procenty - 1;
        parasol.style.marginTop = parasolMarginTop - 4.8 * (procenty - 163) + "px";
        parasol.style.marginLeft = parasolMarginLeft - 10 * (procenty - 163) + "px";
    }
    else if (procenty > 188 && procenty <= 198) {
        timecode = 350;
        procenty = procenty - 1;
        bransoletka.style.marginTop = bransoletkaMarginTop + 10 * (procenty - 188) + "px";
        bransoletka.style.marginLeft = bransoletkaMarginLeft - 5 * (procenty - 188) + "px";
        bransoletka.style.width = bransoletkaWidth - 4 * (procenty - 188) + "%";
    }
    else if (procenty >= 199) {
        procenty = 199;
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

    if (procenty >= 199) {

        alert("Gratulacje!!!");
        sylwetka.style.visibility = 'hidden';
        sukienka.style.visibility = 'hidden';
        buty.style.visibility = 'hidden';
        rekawiczki.style.visibility = 'hidden';
        korale.style.visibility = 'hidden';
        plaszcz.style.visibility = 'hidden';
        kapelusz.style.visibility = 'hidden';
        torebka.style.visibility = 'hidden';
        parasol.style.visibility = 'hidden';
        bransoletka.style.visibility = 'hidden';
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
                buty.style.marginLeft = butyMarginLeft + 10 * procenty + "px";
                buty.style.marginTop = butyMarginTop + 2.5 * procenty + "px";
                buty.style.width = butyWidth - 0.5 * procenty + "%";
            }
            else if (procenty > 20 && procenty <= 45) {
                sukienka.style.marginTop = sukienkaMarginTop + (procenty - 20) * 3 + "px";
                sukienka.style.marginLeft = sukienkaMarginLeft + 10 * (procenty - 20) + "px";
            }
            else if (procenty > 45 && procenty <= 65) {
                rekawiczki.style.marginTop = rekawiczkiMarginTop - 2.5 * (procenty - 45) + "px";
                rekawiczki.style.marginLeft = rekawiczkiMarginLeft - 10 * (procenty - 45) + "px";
            }
            else if (procenty > 65 && procenty <= 88) {
                korale.style.marginTop = koraleMarginTop + 2 * (procenty - 65) + "px";
                korale.style.marginLeft = koraleMarginLeft + 10 * (procenty - 65) + "px";
                korale.style.width = (koraleWidth - 1.26 * (procenty - 65)) + "%";
            }
            else if (procenty > 88 && procenty <= 108) {
                plaszcz.style.marginTop = plaszczMarginTop + 2.5 * (procenty - 88) + "px";
                plaszcz.style.marginLeft = plaszczMarginLeft - 10 * (procenty - 88) + "px";
            }
            else if (procenty > 108 && procenty <= 143) {
                kapelusz.style.marginTop = kapeluszMarginTop - 4 * (procenty - 108) + "px";
                kapelusz.style.marginLeft = kapeluszMarginLeft - 10 * (procenty - 108) + "px";
            }
            else if (procenty > 143 && procenty <= 163) {
                torebka.style.marginTop = torebkaMarginTop - 3.5 * (procenty - 143) + "px";
                torebka.style.marginLeft = torebkaMarginLeft - 10 * (procenty - 143) + "px";
                torebka.style.width = torebkaWidth - 0.5 * (procenty - 143) + "%";
            }
            else if (procenty > 163 && procenty <= 188) {
                parasol.style.marginTop = parasolMarginTop - 4.8 * (procenty - 163) + "px";
                parasol.style.marginLeft = parasolMarginLeft - 10 * (procenty - 163) + "px";
            }
            else if (procenty > 188 && procenty <= 198) {
                bransoletka.style.marginTop = bransoletkaMarginTop + 10 * (procenty - 188) + "px";
                bransoletka.style.marginLeft = bransoletkaMarginLeft - 5 * (procenty - 188) + "px";
                bransoletka.style.width = bransoletkaWidth - 4 * (procenty - 188) + "%";
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
