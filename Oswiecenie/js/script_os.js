var i = 2;
var osukniaMarginLeft = -240;
var osukniaMarginTop = -72;
var osukniaWidth = 28;

var ogorsetMarginLeft = -144;
var ogorsetMarginTop = -96;
var ogorsetWidth = 48;

var obutyMarginLeft = -100;
var obutyMarginTop = 100;

var ostatekMarginLeft = 220;
var ostatekMarginTop = 50;
var ostatekWidth = 50;

var okarkasMarginTop = 127.5;
var okarkasMarginLeft = -150;
var okarkasWidth = 35;

var opodkoszulkaMarginLeft = 150;
var opodkoszulkaMarginTop = -45;

var onarzutkaMarginLeft = 250;
var onarzutkaMarginTop = 200;

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
        obuty.style.marginTop = obutyMarginTop - 5 * procenty + "px";
        obuty.style.marginLeft = obutyMarginLeft + procenty * 5 + "px";
    }
    else if (procenty > 20 && procenty <= 35) {
        timecode = 600;
        procenty = procenty - 1;
        opodkoszulka.style.marginLeft = opodkoszulkaMarginLeft - 10 * (procenty - 20) + "px";
        opodkoszulka.style.marginTop = opodkoszulkaMarginTop + 3 * (procenty - 20) + "px";
    }
    else if (procenty > 35 && procenty <= 50) {
        timecode = 650;
        procenty = procenty - 1;
        okarkas.style.marginLeft = okarkasMarginLeft + 10 * (procenty - 35) + "px";
        okarkas.style.marginTop = okarkasMarginTop - 8.5 * (procenty - 35) + "px";
        okarkas.style.width = okarkasWidth + 1 / 3 * (procenty - 35) + "%";
    }
    else if (procenty > 50 && procenty <= 74) {
        timecode = 500;
        procenty = procenty - 1;
        ogorset.style.marginLeft = ogorsetMarginLeft + 6 * (procenty - 50) + "px";
        ogorset.style.marginTop = ogorsetMarginTop + (procenty - 50) * 4 + "px";
        ogorset.style.width = ogorsetWidth - 1 / 3 * (procenty - 50) + "%";
    }
    else if (procenty > 74 && procenty <= 98) {
        timecode = 450;
        procenty = procenty - 1;
        osuknia.style.marginTop = osukniaMarginTop + (procenty - 74) * 3 + "px";
        osuknia.style.marginLeft = osukniaMarginLeft + 10 * (procenty - 74) + "px";
        osuknia.style.width = osukniaWidth + 0.5 * (procenty - 74) + "%";
    }
    else if (procenty > 98 && procenty <= 123) {
        timecode = 400;
        procenty = procenty - 1;
        onarzutka.style.marginTop = onarzutkaMarginTop - 8 * (procenty - 98) + "px";
        onarzutka.style.marginLeft = onarzutkaMarginLeft - 10 * (procenty - 98) + "px";
     }
    else if (procenty > 123 && procenty <= 143) {
        timecode = 350;
        procenty = procenty - 1;
        ostatek.style.marginTop = ostatekMarginTop - 2.5 * (procenty - 123) + "px";
        ostatek.style.marginLeft = ostatekMarginLeft - 11 * (procenty - 123) + "px";
        ostatek.style.width = ostatekWidth - 0.5 * (procenty - 123) + "%";
     }
    else if (procenty >= 144) {
        procenty = 144;
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

    if (procenty >= 144) {

        alert("Gratulacje!!!");
        osylwetka.style.visibility = 'hidden';
        osuknia.style.visibility = 'hidden';
        ogorset.style.visibility = 'hidden';
        obuty.style.visibility = 'hidden';
        ostatek.style.visibility = 'hidden';
        okarkas.style.visibility = 'hidden';
        opodkoszulka.style.visibility = 'hidden';
        onarzutka.style.visibility = 'hidden';
        oswieceniefin.style.visibility = 'visible';
        button1.style.visibility = 'hidden';
        oswieceniefin.style.left = '-450px';
       
        
        for(var i=0;i<12;i++){
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
                obuty.style.marginTop = obutyMarginTop - 5 * procenty + "px";
                obuty.style.marginLeft = obutyMarginLeft + procenty * 5 + "px";
            } else if (procenty > 20 && procenty <= 35) {
                opodkoszulka.style.marginLeft = opodkoszulkaMarginLeft - 10 * (procenty - 20) + "px";
                opodkoszulka.style.marginTop = opodkoszulkaMarginTop + 3 * (procenty - 20) + "px";
            } else if (procenty > 35 && procenty <= 50) {
                okarkas.style.marginLeft = okarkasMarginLeft + 10 * (procenty - 35) + "px";
                okarkas.style.marginTop = okarkasMarginTop - 8.5 * (procenty - 35) + "px";
                okarkas.style.width = okarkasWidth + 1 / 3 * (procenty - 35) + "%";
            } else if (procenty > 50 && procenty <= 74) {/*24*/
                ogorset.style.marginLeft = ogorsetMarginLeft + 6 * (procenty - 50) + "px";
                ogorset.style.marginTop = ogorsetMarginTop + (procenty - 50) * 4 + "px";
                ogorset.style.width = ogorsetWidth - 1 / 3 * (procenty - 50) + "%";
            } else if (procenty > 74 && procenty <= 98) {/*24*/
                osuknia.style.marginTop = osukniaMarginTop + (procenty - 74) * 3 + "px";
                osuknia.style.marginLeft = osukniaMarginLeft + 10 * (procenty - 74) + "px";
                osuknia.style.width = osukniaWidth + 0.5 * (procenty - 74) + "%";
            } else if (procenty > 98 && procenty <= 123) {
                onarzutka.style.marginTop = onarzutkaMarginTop -8* (procenty - 98) + "px";
                onarzutka.style.marginLeft = onarzutkaMarginLeft - 10 * (procenty - 98) + "px";
            } else if (procenty > 123 && procenty <= 143) {
                ostatek.style.marginTop = ostatekMarginTop - 2.5 * (procenty - 123) + "px";
                ostatek.style.marginLeft = ostatekMarginLeft - 11 * (procenty - 123) + "px";
                ostatek.style.width = ostatekWidth - 0.5 * (procenty - 123) + "%";
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
