/**
 * Created by Karol on 2017-02-22.
 */


$(function () {
    //this is the countdown to the next year
    var countDownDate = new Date("Jan 5, 2018 15:37:25").getTime();

// Update the count down every 1 second
    var x = setInterval(function() {

        // Get todays date and time
        var now = new Date().getTime();

        // Find the distance between now an the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        var miliseconds = Math.floor((distance % (1000 * 60)) / (1000/60));

        $('#timer').html("days" + days + " hours " + hours +  " minutes  " + minutes + " seconds " + seconds);
    }, 1000);

});