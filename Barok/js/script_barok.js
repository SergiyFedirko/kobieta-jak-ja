var i = 2;
sukienkaMarginLeft = -250;
sukienkaMarginTop = -75;

butyMarginLeft = 150;
butyMarginTop = -50;
butyWidth = 50;

koraleMarginLeft = 100;
koraleMarginTop = 10;
koraleWidth = 80;

plaszczMarginLeft = -300;
plaszczMarginTop = 252;

pasekMarginLeft = 200;
pasekMarginTop = -100;

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
        buty.style.marginLeft = butyMarginLeft - 7.5 * procenty + "px";
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
        korale.style.marginTop = koraleMarginTop - 0.5 * (procenty - 45) + "px";
        korale.style.marginLeft = koraleMarginLeft - 5 * (procenty - 45) + "px";
        korale.style.width = (koraleWidth - 2 * (procenty - 45)) + "%";
    }
    else if (procenty > 65 && procenty <= 95) {
        timecode = 500;
        procenty = procenty - 1;
        plaszcz.style.marginTop = plaszczMarginTop - 8.4 * (procenty - 65) + "px";
        plaszcz.style.marginLeft = plaszczMarginLeft + 10 * (procenty - 65) + "px";
    }
    else if (procenty > 95 && procenty <= 115) {
        timecode = 400;
        procenty = procenty - 1;
        pasek.style.marginTop = pasekMarginTop + 5 * (procenty - 95) + "px";
        pasek.style.marginLeft = pasekMarginLeft - 10 * (procenty - 95) + "px";
    }
    else if (procenty >= 116) {
        procenty = 116;
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

    if (procenty >= 116) {

        alert("Gratulacje!!!");
        dwolecie.style.visibility = 'hidden';
        sukienka.style.visibility = 'hidden';
        buty.style.visibility = 'hidden';
        korale.style.visibility = 'hidden';
        plaszcz.style.visibility = 'hidden';
        pasek.style.visibility = 'hidden';
        fin.style.visibility = 'visible';
        button1.style.visibility = 'hidden';
        fin.style.left = '-450px';
 
        for(var i=0;i<16;i++){
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
                buty.style.marginLeft = butyMarginLeft - 7.5 * procenty + "px";
                buty.style.marginTop = butyMarginTop + 2.5 * procenty + "px";
                buty.style.width = butyWidth - 0.5 * procenty + "%";
            }
            else if (procenty > 20 && procenty <= 45) {
                sukienka.style.marginTop = sukienkaMarginTop + (procenty - 20) * 3 + "px";
                sukienka.style.marginLeft = sukienkaMarginLeft + 10 * (procenty - 20) + "px";
            }
            else if (procenty > 45 && procenty <= 65) {
                korale.style.marginTop = koraleMarginTop - 0.5 * (procenty - 45) + "px";
                korale.style.marginLeft = koraleMarginLeft - 5 * (procenty - 45) + "px";
                korale.style.width = (koraleWidth - 2 * (procenty - 45)) + "%";
            }
            else if (procenty > 65 && procenty <= 95) {
                plaszcz.style.marginTop = plaszczMarginTop - 8.4 * (procenty - 65) + "px";
                plaszcz.style.marginLeft = plaszczMarginLeft + 10 * (procenty - 65) + "px";
            }
            else if (procenty > 95 && procenty <= 115) {
                pasek.style.marginTop = pasekMarginTop + 5 * (procenty - 95) + "px";
                pasek.style.marginLeft = pasekMarginLeft - 10 * (procenty - 95) + "px";
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
