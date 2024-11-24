/* 
 * © 2018 Jan Kossick, jankossick@online.de, https://jankossick.de
 */

/* global FormsHelper */

// add trip
$(".add-trip button").click(function() {
    $(".no-trip").remove();
    $(".trip.template").clone().removeClass("template")
                .insertBefore(".add-trip");
});

// add pkw
$(".add-pkw button").click(function() {
    $(".no-pkw").remove();
    $(".pkw-row.template").clone().removeClass("template")
                .insertBefore(".add-pkw");
});

// calculate pkw euro
$(document).on("keyup change", ".pkw-km", function() {
    var val = $("input", this).val();
    var input = $(".pkw-euro input", $(this).parent());
    var span = $(".pkw-euro span.value", $(this).parent());
    input.val(FormsHelper.formatCurrency(val * 0.2));
    span.empty().append(FormsHelper.formatCurrency(val * 0.2));
});