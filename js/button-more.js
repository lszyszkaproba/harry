$(document).ready(function(){


    var myBtn = document.querySelectorAll('.myBtn');
    var moreInfo = document.querySelectorAll('.more');

    console.log(myBtn);

    for(var i=0;i<myBtn.length;i++){
      myBtn[i].addEventListener('click',function () {
         if($(this).text()==="Read more"){
                $(this).text("Read less");

             ($(this).parent()).children(2).children(1).slideDown();
         }
         else if($(this).text()==="Read less"){
             $(this).text("Read more");
             ($(this).parent()).children(2).children(1).slideUp();
         }
      })
    }


    var d = new Date();
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    document.getElementById("date").innerHTML = days[d.getDay()]+"   |   "+[d.getMonth()+1]+"/"+d.getDate()+"/"+d.getFullYear();

   document.querySelector('body').onload = function startTime() {
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        m = checkTime(m);
        s = checkTime(s);
        document.getElementById('time').innerHTML =
            h + ":" + m + ":" + s;
        var t = setTimeout(startTime, 500);
    }
    function checkTime(i) {
        if (i < 10) {i = "0" + i};
        return i;
    }





});