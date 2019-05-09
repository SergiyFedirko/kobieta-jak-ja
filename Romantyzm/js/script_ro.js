var i = 2;
var rosukniaMarginLeft = -240;
var rosukniaMarginTop = -72;

var rokapeluszMarginLeft = 144;
var rokapeluszMarginTop = -45;

var robutyMarginLeft = -100;
var robutyMarginTop = 20;

var rokokardaMarginTop = 150;
var rokokardaMarginLeft = 135;

var roparasolMarginLeft = 270;
var roparasolMarginTop = 148.5;

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
        robuty.style.marginTop = robutyMarginTop - procenty + "px";
        robuty.style.marginLeft = robutyMarginLeft + procenty * 5 + "px";
    }
    else if (procenty > 20 && procenty <= 44) {
        timecode = 550;
        procenty = procenty - 1;
        rosuknia.style.marginLeft = rosukniaMarginLeft + 10 * (procenty - 20) + "px";
        rosuknia.style.marginTop = rosukniaMarginTop + 3 * (procenty - 20) + "px";
    }
    else if (procenty > 44 && procenty <= 74) {
        timecode = 500;
        procenty = procenty - 1;
        rokapelusz.style.marginTop = rokapeluszMarginTop + 1.5 * (procenty - 44) + "px";
        rokapelusz.style.marginLeft = rokapeluszMarginLeft - 4.8 * (procenty - 44) + "px";
    }
    else if (procenty > 74 && procenty <= 89) {
        timecode = 450;
        procenty = procenty - 1;
        rokokarda.style.marginLeft = rokokardaMarginLeft - 9 * (procenty - 74) + "px";
        rokokarda.style.marginTop = rokokardaMarginTop - (procenty - 74) * 10 + "px";
    }
    else if (procenty > 89 && procenty <= 116) {
        timecode = 400;
        procenty = procenty - 1;
        roparasol.style.marginTop = roparasolMarginTop - (procenty - 89) * 5.5 + "px";
        roparasol.style.marginLeft = roparasolMarginLeft - 10 * (procenty - 89) + "px";
    }

    else if (procenty >= 117) {
        procenty = 117;
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

    if (procenty >= 117) {

        alert("Gratulacje!!!");
        rosylwetka.style.visibility = 'hidden';
        rosuknia.style.visibility = 'hidden';
        rokapelusz.style.visibility = 'hidden';
        robuty.style.visibility = 'hidden';
        rokokarda.style.visibility = 'hidden';
        roparasol.style.visibility = 'hidden';
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
                robuty.style.marginTop = robutyMarginTop - procenty + "px";
                robuty.style.marginLeft = robutyMarginLeft + procenty * 5 + "px";
            } else if (procenty > 20 && procenty <= 44) {
                rosuknia.style.marginLeft = rosukniaMarginLeft + 10 * (procenty - 20) + "px";
                rosuknia.style.marginTop = rosukniaMarginTop + 3 * (procenty - 20) + "px";
            } else if (procenty > 44 && procenty <= 74) {
                rokapelusz.style.marginTop = rokapeluszMarginTop + 1.5 * (procenty - 44) + "px";
                rokapelusz.style.marginLeft = rokapeluszMarginLeft - 4.8 * (procenty - 44) + "px";
            } else if (procenty > 74 && procenty <= 89) {/*24*/
                rokokarda.style.marginLeft = rokokardaMarginLeft - 9 * (procenty - 74) + "px";
                rokokarda.style.marginTop = rokokardaMarginTop - (procenty - 74) * 10 + "px";
            } else if (procenty > 89 && procenty <= 116) {/*24*/
                roparasol.style.marginTop = roparasolMarginTop - (procenty - 89) * 5.5 + "px";
                roparasol.style.marginLeft = roparasolMarginLeft - 10 * (procenty - 89) + "px";
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
