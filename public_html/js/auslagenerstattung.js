/* 
 * © 2018 Jan Kossick, jankossick@online.de, https://jankossick.de
 */

(function() {
    // add expenses    
    for(var i = 0; i < 5; i++) {
        $(".expenses.template").clone().removeClass("template")
                .insertBefore(".expenses.permanent");
    }
})();

// add expense
$(".add-expense").click(function() {
    $(".expenses.template").clone().removeClass("template")
                .insertBefore(".expenses.permanent");
});