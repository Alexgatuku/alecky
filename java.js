var i=0;
var images=[];
var time=3000;

images [0]='j6.png';
images [1]='OPPO F7.png';
images [2]='lapshop.jpg';
images [3]='S8.jpg';
images [4]='lap3.jpg';
images [5]='watch.jpg';
images [6]='watch1.jpg';

function changeImg(){
    document.slide.src=images[i];

    if(i<images.length-1){
        i++;
    }else{
        i=0;
    }
    setTimeout("changeImg()",time);
} 
window.onload=changeImg;

$(document).ready(function(){
    $('button').click(function(){
        $('o1').toggleclass('active')
    })
})