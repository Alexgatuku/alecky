var i=0;
var images=[];
var time=3000;

images [0]='iphone 5.6.jpg';
images [1]='hp.jpg';
images [2]='OPPO F7.png';
images [3]='lapshop.jpg';
images [4]='S8.jpg';
images [5]='lap3.jpg';
images [6]='watch.jpg';
images [7]='watch1.jpg';

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
