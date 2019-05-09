var i = 2;
sukienkaMarginLeft = -200;
sukienkaMarginTop = -75;

butyMarginLeft = -200;
butyMarginTop = -50;
butyWidth = 50;

rekawiczkiMarginLeft = 200;
rekawiczkiMarginTop = 50;

koraleMarginLeft = -329.9;
koraleMarginTop = -98.9;
koraleWidth = 68.98;

plaszczMarginLeft = 200;
plaszczMarginTop = -50;

kapeluszMarginLeft = 350;

torebkaMarginLeft = 200;
torebkaMarginTop = 70;
torebkaWidth = 50;

parasolMarginLeft = 250;
parasolMarginTop = 50;

bransoletkaMarginLeft = 200;
bransoletkaMarginTop = 250;

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
        bransoletka.style.marginTop = bransoletkaMarginTop - 10 * (procenty - 20) + "px";
        bransoletka.style.marginLeft = bransoletkaMarginLeft - 8 * (procenty - 20) + "px";
    }
    else if (procenty > 45 && procenty <= 70) {
        timecode = 650;
        procenty = procenty - 1;
        sukienka.style.marginTop = sukienkaMarginTop + (procenty - 45) * 3 + "px";
                sukienka.style.marginLeft = sukienkaMarginLeft + 8 * (procenty - 45) + "px";
    }
    else if (procenty > 70 && procenty <= 93) {
        timecode = 500;
        procenty = procenty - 1;
        korale.style.marginTop = koraleMarginTop + 4.3 * (procenty - 70) + "px";
        korale.style.marginLeft = koraleMarginLeft + 14.3 * (procenty - 70) + "px";
        korale.style.width = (koraleWidth - 1.26 * (procenty - 70)) + "%";
    }
    else if (procenty > 93 && procenty <= 113) {
        timecode = 450;
        procenty = procenty - 1;
        torebka.style.marginTop = torebkaMarginTop - 3.5 * (procenty - 93) + "px";
        torebka.style.marginLeft = torebkaMarginLeft - 10 * (procenty - 93) + "px";
        torebka.style.width = torebkaWidth - 0.5 * (procenty - 93) + "%";
    }
    else if (procenty > 113 && procenty <= 148) {
        timecode = 400;
        procenty = procenty - 1;
        kapelusz.style.marginLeft = kapeluszMarginLeft - 10 * (procenty - 113) + "px";
    }
    else if (procenty > 148 && procenty <= 168) {
        timecode = 350;
        procenty = procenty - 1;
        plaszcz.style.marginTop = plaszczMarginTop + 2.5 * (procenty - 148) + "px";
                plaszcz.style.marginLeft = plaszczMarginLeft - 10 * (procenty - 148) + "px";
    }
    else if (procenty > 168 && procenty <= 188) {
        timecode = 350;
        procenty = procenty - 1;
        rekawiczki.style.marginTop = rekawiczkiMarginTop - 2.5 * (procenty - 168) + "px";
        rekawiczki.style.marginLeft = rekawiczkiMarginLeft - 10 * (procenty - 168) + "px";
    }
    else if (procenty > 188 && procenty <= 213) {
        timecode = 350;
        procenty = procenty - 1;
        parasol.style.marginTop = parasolMarginTop - 2 * (procenty - 188) + "px";
                parasol.style.marginLeft = parasolMarginLeft - 10 * (procenty - 188) + "px";

    }
    else if (procenty >= 214) {
        procenty = 214;
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

    if (procenty >= 214) {

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

        for (var i = 0; i < 15; i++) {
            animateCSS('.etext' + [i], 'fadeInUp');
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
                bransoletka.style.marginTop = bransoletkaMarginTop - 10 * (procenty - 20) + "px";
                bransoletka.style.marginLeft = bransoletkaMarginLeft - 8 * (procenty - 20) + "px";

            }
            else if (procenty > 45 && procenty <= 70) {
/*25*/    sukienka.style.marginTop = sukienkaMarginTop + (procenty - 45) * 3 + "px";
                sukienka.style.marginLeft = sukienkaMarginLeft + 8 * (procenty - 45) + "px";


            }
            else if (procenty > 70 && procenty <= 93) {
            /*23*/    korale.style.marginTop = koraleMarginTop + 4.3 * (procenty - 70) + "px";
                korale.style.marginLeft = koraleMarginLeft + 14.3 * (procenty - 70) + "px";
                korale.style.width = (koraleWidth - 1.26 * (procenty - 70)) + "%";
            }
            else if (procenty > 93 && procenty <= 113) {
/*20*/    torebka.style.marginTop = torebkaMarginTop - 3.5 * (procenty - 93) + "px";
                torebka.style.marginLeft = torebkaMarginLeft - 10 * (procenty - 93) + "px";
                torebka.style.width = torebkaWidth - 0.5 * (procenty - 93) + "%";

            }
            else if (procenty > 113 && procenty <= 148) {
            /*35*/    kapelusz.style.marginLeft = kapeluszMarginLeft - 10 * (procenty - 113) + "px";
            }
            else if (procenty > 148 && procenty <= 168) {
            /*20*/    plaszcz.style.marginTop = plaszczMarginTop + 2.5 * (procenty - 148) + "px";
                plaszcz.style.marginLeft = plaszczMarginLeft - 10 * (procenty - 148) + "px";

            }
            else if (procenty > 168 && procenty <= 188) {
/*20*/    rekawiczki.style.marginTop = rekawiczkiMarginTop - 2.5 * (procenty - 168) + "px";
                rekawiczki.style.marginLeft = rekawiczkiMarginLeft - 10 * (procenty - 168) + "px";
            }
            else if (procenty > 188 && procenty <= 213) {
           /*25*/    parasol.style.marginTop = parasolMarginTop - 2 * (procenty - 188) + "px";
                parasol.style.marginLeft = parasolMarginLeft - 10 * (procenty - 188) + "px";

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
