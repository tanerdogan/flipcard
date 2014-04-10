$(function() {
    
    var wrapper = $('#flipcard'),
        coName = $("#fc-checkoutName", wrapper),
        cardName = $("#fc-cardName", wrapper),
        coCard = $("#fc-checkoutCard", wrapper),
        cardImg = $('#fc-cardImage', wrapper),
        cardNum = $("#fc-cardNumber", wrapper),
        expMmYy = $("#fc-checkoutExpMm, #fc-checkoutExpYy", wrapper),
        expMm = $("#fc-checkoutExpMm", wrapper),
        expYy = $("#fc-checkoutExpYy", wrapper),
        exp = $("#fc-cardExp", wrapper),
        cvc = $("#fc-checkoutCvc", wrapper),
        flip = $("#fc-flipContainer", wrapper),
        cardCvc = $("#flip-cardCvc", wrapper),
        card, 
        visa = /^4/,
        visa_electron = /^(4026|417500|4508|4844|491(3|7))/,
        mastercard = /^5[1-5]/,
        maestro = /^(5018|5020|5038|6304|6759|676[1-3])/,
        discover = /^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)/;

    coName.on("keyup", function() {
        cardName.html(this.value);
    });

   coCard.on("keyup", function(key){
        this.value = this.value.replace(/[^0-9\.]/g,'');
        card = $(this).val();

        visa.test(card) ? cardImg.css("background-position-x", "0px") : false;
        visa_electron.test(card) ? cardImg.css("background-position-x", "-51px") : false;
        mastercard.test(card) ? cardImg.css("background-position-x", "-102px") : false;
        maestro.test(card) ? cardImg.css("background-position-x", "-153px") : false;
        discover.test(card) ? $(".card-img").css("background-position-x", "-204px") : false;

        cardNum.html(card.match(new RegExp('.{1,4}', 'g')).join(" "));

    });

    expMmYy.on("keyup", function(){
        this.value = this.value.replace(/[^0-9\.]/g,'');
        exp.html(expMm.val() +"/" + expYy.val());
    });

    cvc.on("focus", function(){
        flip.addClass("hover");
    }).on("focusout", function(){
        flip.removeClass("hover");
    });

    cvc.on("keyup", function(){
        this.value = this.value.replace(/[^0-9\.]/g,'');
        cardCvc.html(this.value);
    });
});

