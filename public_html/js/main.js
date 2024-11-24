/* 
 * © 2018 Jan Kossick, jankossick@online.de, https://jankossick.de
 */

/* global localforage, parseFloat, Config */

/** helper **/
var FormsHelper = {
    formatCurrency: function(value) {
        return parseFloat(value).toFixed(2).replace(".", ",");
    }
};

/** auto-fill **/
$("#impress").attr("href", Config.impress);
$("#privacy-policy").attr("href", Config.privacyPolicy);
jQuery.each(Config.autoFill, function(key, value) {
    var elem = $(".auto-fill." + key);
    $(".auto-fill." + key).each(function() {
        if($(this).is("input, textarea")) {
            $(this).val(value);
        } else {
            $(this).empty().append(value.replaceAll("\n", "<br />"));
        }
    });
});

/** inputs magic: save values to printable spans **/
$("body").on("keyup", "label input, label textarea", function() {
    const label = $(this).parent();
    const value = $(this).val().replaceAll("\n", "<br />");
    $("span.only-print", label).empty().append(value);
});    

/** inputs magic: save values to localStorage **/
$("body").on("change", ".save-data", function() {
    if($("#save-data input").prop("checked")) {
        storage.setItem($(this).data("key"), $(this).val());
    }
});

/** events **/
$(".print-button").click(function() {
    window.print();
});
$("#save-data input").change(function() {
    if(this.checked) { // save values
        storage.setItem("save-data", true);
        $(".save-data").each(function() {
            console.log(this);
            storage.setItem($(this).data("key"), $(this).val());
        });
    } else { // clear values
        storage.clear();
    }
});

/** initialize localForage **/
var storage = localforage.createInstance({
    name: $("#options").data("form-id")
});

/** load saved values **/
storage.getItem("save-data").then(function(value) {
    $("#save-data input").prop("checked", value);
})
storage.iterate(function(value, key) {
    $("[data-key='" + key + "']").val(value).trigger("keyup");
});