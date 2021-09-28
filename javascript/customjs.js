$(document).ready(function() {
    $(".burger").on("click", function() {
        $(".nav-links").toggleClass("nav-show");
        $(".burger").toggleClass("burger-opened");
        $(".navbar").toggleClass("navbar-burger-section");
        $(".burger-holder").toggleClass("burger-holder-show");
    });
});
$("#payment-cycle").change(function() {
    if ($(this).prop("checked") == true) {
        /****STANDARD****/
        $('.standard .number').text("$250");
        $('.standard .per-to-pay').text("/Annual");
        /****STANDARD****/
        /****ESSANTIALS****/
        $('.essantials .number').text("$1100");
        $('.essantials .per-to-pay').text("/Annual");
        /****ESSANTIALS****/
        /****PREMIUM****/
        $('.premium .number').text("$1600");
        $('.premium .per-to-pay').text("/Annual");
        /****PREMIUM****/
    } else {
        /****STANDARD****/
        $('.standard .number').text("$23");
        $('.standard .per-to-pay').text("/Month");
        /****STANDARD****/
        /****ESSANTIALS****/
        $('.essantials .number').text("$99");
        $('.essantials .per-to-pay').text("/Month");
        /****ESSANTIALS****/
        /****PREMIUM****/
        $('.premium .number').text("$139");
        $('.premium .per-to-pay').text("/Month");
        /****PREMIUM****/
    }
});