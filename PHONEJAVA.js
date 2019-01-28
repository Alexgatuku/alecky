var i=0;
var images=[];
var time=3000;

images [0]='j6.png';
images [1]='OPPO F7.png';
images [2]='spark.jpg';
images [3]='S8.jpg';
images [4]='realme-1.png';
images [5]='iphone 5.6.jpg';
images [6]='cammon.jpg';

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
