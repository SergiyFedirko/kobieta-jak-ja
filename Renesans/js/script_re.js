var i = 2;
var rsukniaMarginLeft = -240;
var rsukniaMarginTop = -48;

var rbutyMarginLeft = -220;
var rbutyMarginTop = -100;
var rbutyWidth = 60;

var rkapeluszMarginLeft = 300;
var rkapeluszMarginTop = 45;

var rwijałoMarginTop = 250;
var rwijałoMarginLeft = 150;
var rwijałoWidth = 90;

var rtorebkaMarginLeft = 350;
var rtorebkaMarginTop = -70;
var rtorebkaWidth = 57.5;

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
        rbuty.style.marginTop = rbutyMarginTop + 5 * (procenty) + "px";
        rbuty.style.marginLeft = rbutyMarginLeft + 11 * (procenty) + "px";
        rbuty.style.width = rbutyWidth - 1 * procenty + "%";
    }
    else if (procenty > 20 && procenty <= 44) {
        timecode = 650;
        procenty = procenty - 1;
        rsuknia.style.marginTop = rsukniaMarginTop + (procenty-20) * 2 + "px";
        rsuknia.style.marginLeft = rsukniaMarginLeft + 10 * (procenty-20) + "px";
    }
    else if (procenty > 44 && procenty <= 74) {
        timecode = 500;
        procenty = procenty - 1;
        rkapelusz.style.marginTop = rkapeluszMarginTop - 1.5 * (procenty - 44) + "px";
        rkapelusz.style.marginLeft = rkapeluszMarginLeft - 10 * (procenty - 44) + "px";
       }
    else if (procenty > 74 && procenty <= 99) {
        timecode = 450;
        procenty = procenty - 1;
        rwijało.style.marginTop = rwijałoMarginTop - 10 * (procenty - 74) + "px";
        rwijało.style.marginLeft = rwijałoMarginLeft - 6 * (procenty - 74) + "px";
        rwijało.style.width = rwijałoWidth - 2 * (procenty - 74) + "%";
    }
    else if (procenty > 99 && procenty <= 134) {
        timecode = 400;
        procenty = procenty - 1;
        rtorebka.style.marginTop = rtorebkaMarginTop + 2 * (procenty - 99) + "px";
        rtorebka.style.marginLeft = rtorebkaMarginLeft - 10 * (procenty - 99) + "px";
        rtorebka.style.width = rtorebkaWidth - 0.5 * (procenty - 99) + "%";
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
        node.style.opacity = 1;
        if (typeof callback === 'function') callback()
    }

    node.addEventListener('animationend', handleAnimationEnd)
}

function dodaj() {

    if (procenty >= 135) {

        alert("Gratulacje!!!");
        rsylwetka.style.visibility = 'hidden';
        rsuknia.style.visibility = 'hidden';
        rkapelusz.style.visibility = 'hidden';
        rbuty.style.visibility = 'hidden';
        rwijało.style.visibility = 'hidden';
        rtorebka.style.visibility = 'hidden';
        renesansfin.style.visibility = 'visible';
        button1.style.visibility = 'hidden';
        renesansfin.style.left = '-450px';
       
        
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
                rbuty.style.marginTop = rbutyMarginTop + 5 * procenty + "px";
                rbuty.style.marginLeft = rbutyMarginLeft + 11 * procenty + "px";
                rbuty.style.width = rbutyWidth - 1 * procenty + "%";
            }
            else if (procenty > 20 && procenty <= 44) {
                rsuknia.style.marginTop = rsukniaMarginTop + (procenty-20) * 2 + "px";
                rsuknia.style.marginLeft = rsukniaMarginLeft + 10 * (procenty-20) + "px";
            }
            else if (procenty > 44 && procenty <= 74) {
                rkapelusz.style.marginTop = rkapeluszMarginTop - 1.5 * (procenty - 44) + "px";
                rkapelusz.style.marginLeft = rkapeluszMarginLeft - 10 * (procenty - 44) + "px";
               }
            else if (procenty > 74 && procenty <= 99) {
                rwijało.style.marginTop = rwijałoMarginTop - 10 * (procenty - 74) + "px";
                rwijało.style.marginLeft = rwijałoMarginLeft - 6 * (procenty - 74) + "px";
                rwijało.style.width = rwijałoWidth - 2 * (procenty - 74) + "%";
            }
            else if (procenty > 99 && procenty <= 134) {
                rtorebka.style.marginTop = rtorebkaMarginTop + 2 * (procenty - 99) + "px";
                rtorebka.style.marginLeft = rtorebkaMarginLeft - 10 * (procenty - 99) + "px";
                rtorebka.style.width = rtorebkaWidth - 0.5 * (procenty - 99) + "%";
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
