
/*function rotateCard(btn){
    var $card = $(btn).closest('.card-container');
    console.log($card);
    if($card.hasClass('flipper')){
        $card.removeClass('flipper');
    } else {
        $card.addClass('flipper');
    }


}*/

function expand(button) {
    var element = document.getElementById(button);
    var card = element.closest("#card-expand");
    var expand = document.getElementById('expand-' + button);
    var unexpand = document.getElementById('unexpand-' + button);
    card.classList.toggle("flipper");
    card.classList.toggle("no-flipper");
    var col = element.closest("#column");


    card.classList.toggle("is-expand");

    col.classList.toggle("w-100");
    expand.classList.toggle("hide");
    unexpand.classList.toggle("hide");

}
