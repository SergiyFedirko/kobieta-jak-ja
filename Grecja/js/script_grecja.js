var i = 2;
gsukienkaMarginLeft = -144;
gsukienkaMarginTop = -72;

gbutyMarginLeft = 100;
gbutyMarginTop = -100;
gbutyWidth = 50;

gbransoletka1MarginLeft = -45;
gbransoletka1MarginTop = -150;
gbransoletka1Width = 100;

gbransoletka2MarginLeft = 50;
gbransoletka2MarginTop = -100;
gbransoletka2Width = 90;

gnarzutkaMarginLeft = -300;
gnarzutkaMarginTop = 45;

gpasekMarginLeft = 350;
gpasekMarginTop = 140;

gnaszyjnikMarginLeft = -300;
gnaszyjnikMarginTop = -45;
gnaszyjnikWidth = 70;

gwijaloMarginLeft = 250;
gwijaloMarginTop = 100;

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
        gbuty.style.marginLeft = gbutyMarginLeft - 5 * procenty + "px";
        gbuty.style.marginTop = gbutyMarginTop + 5 * procenty + "px";
        gbuty.style.width = gbutyWidth - 0.5 * procenty + "%";
    }
    else if (procenty > 20 && procenty <= 44) {
        timecode = 600;
        procenty = procenty - 1;
        gsukienka.style.marginTop = gsukienkaMarginTop + (procenty - 20) * 3 + "px";
        gsukienka.style.marginLeft = gsukienkaMarginLeft + 6 * (procenty - 20) + "px";
    }
    else if (procenty > 44 && procenty <= 59) {
        timecode = 650;
        procenty = procenty - 1;
        gbransoletka1.style.marginTop = gbransoletka1MarginTop + 10 * (procenty - 44) + "px";
        gbransoletka1.style.marginLeft = gbransoletka1MarginLeft + 3 * (procenty - 44) + "px";
        gbransoletka1.style.width = (gbransoletka1Width - 4 * (procenty - 44)) + "%";
    }
    else if (procenty > 59 && procenty <= 69) {
        timecode = 500;
        procenty = procenty - 1;
        gbransoletka2.style.marginTop = gbransoletka2MarginTop + 10 * (procenty - 59) + "px";
        gbransoletka2.style.marginLeft = gbransoletka2MarginLeft - 5 * (procenty - 59) + "px";
        gbransoletka2.style.width = (gbransoletka2Width - 5 * (procenty - 59)) + "%";
    }
    else if (procenty > 69 && procenty <= 99) {
        timecode = 450;
        procenty = procenty - 1;
        gnarzutka.style.marginTop = gnarzutkaMarginTop - 1.5 * (procenty - 69) + "px";
        gnarzutka.style.marginLeft = gnarzutkaMarginLeft + 10 * (procenty - 69) + "px";
    }
    else if (procenty > 99 && procenty <= 134) {
        timecode = 400;
        procenty = procenty - 1;
        gpasek.style.marginTop = gpasekMarginTop - 4 * (procenty - 99) + "px";
        gpasek.style.marginLeft = gpasekMarginLeft - 10 * (procenty - 99) + "px";
    }
    else if (procenty > 134 && procenty <= 164) {
        timecode = 350;
        procenty = procenty - 1;
        gnaszyjnik.style.marginTop = gnaszyjnikMarginTop + 1.5 * (procenty - 134) + "px";
        gnaszyjnik.style.marginLeft = gnaszyjnikMarginLeft + 10 * (procenty - 134) + "px";
        gnaszyjnik.style.width = gnaszyjnikWidth - 1 * (procenty - 134) + "%";
    }else if (procenty > 164 && procenty <= 189) {
        timecode = 300;
        procenty = procenty - 1;
        gwijało.style.marginTop = gwijaloMarginTop - 4 * (procenty - 164) + "px";
        gwijało.style.marginLeft = gwijaloMarginLeft - 10 * (procenty - 164) + "px";
    }
    else if (procenty >= 190) {
        procenty = 190;
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

    if (procenty >= 190) {

        alert("Gratulacje!!!");
        grecja.style.visibility = 'hidden';
        gsukienka.style.visibility = 'hidden';
        gbuty.style.visibility = 'hidden';
        gbransoletka1.style.visibility = 'hidden';
        gbransoletka2.style.visibility = 'hidden';
        gnarzutka.style.visibility = 'hidden';
        gpasek.style.visibility = 'hidden';
        gnaszyjnik.style.visibility = 'hidden';
        gwijało.style.visibility = 'hidden';
        grecjafin.style.visibility = 'visible';
        button1.style.visibility = 'hidden';
        grecjafin.style.left = '-450px';

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
                gbuty.style.marginLeft = gbutyMarginLeft - 5 * procenty + "px";
                gbuty.style.marginTop = gbutyMarginTop + 5 * procenty + "px";
                gbuty.style.width = gbutyWidth - 0.5 * procenty + "%";
            } else if (procenty > 20 && procenty <= 44) {
                gsukienka.style.marginTop = gsukienkaMarginTop + 3 * (procenty - 20) + "px";
                gsukienka.style.marginLeft = gsukienkaMarginLeft + 6 * (procenty - 20) + "px";
            } else if (procenty > 44 && procenty <= 59) {
                gbransoletka1.style.marginTop = gbransoletka1MarginTop + 10 * (procenty - 44) + "px";
                gbransoletka1.style.marginLeft = gbransoletka1MarginLeft + 3 * (procenty - 44) + "px";
                gbransoletka1.style.width = gbransoletka1Width - 4 * (procenty - 44) + "%";
            } else if (procenty > 59 && procenty <= 69) {
                gbransoletka2.style.marginTop = gbransoletka2MarginTop + 10 * (procenty - 59) + "px";
                gbransoletka2.style.marginLeft = gbransoletka2MarginLeft - 5 * (procenty - 59) + "px";
                gbransoletka2.style.width = (gbransoletka2Width - 5 * (procenty - 59)) + "%";
            } else if (procenty > 69 && procenty <= 99) {
                gnarzutka.style.marginTop = gnarzutkaMarginTop - 1.5 * (procenty - 69) + "px";
                gnarzutka.style.marginLeft = gnarzutkaMarginLeft + 10 * (procenty - 69) + "px";
            } else if (procenty > 99 && procenty <= 134) {
                gpasek.style.marginTop = gpasekMarginTop - 4 * (procenty - 99) + "px";
                gpasek.style.marginLeft = gpasekMarginLeft - 10 * (procenty - 99) + "px";
            } else if (procenty > 134 && procenty <= 164) {
                gnaszyjnik.style.marginTop = gnaszyjnikMarginTop + 1.5 * (procenty - 134) + "px";
                gnaszyjnik.style.marginLeft = gnaszyjnikMarginLeft + 10 * (procenty - 134) + "px";
                gnaszyjnik.style.width = gnaszyjnikWidth - 1 * (procenty - 134) + "%";
            } else if (procenty > 164 && procenty <= 189) {
                gwijało.style.marginTop = gwijaloMarginTop - 4 * (procenty - 164) + "px";
                gwijało.style.marginLeft = gwijaloMarginLeft - 10 * (procenty - 164) + "px";
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
