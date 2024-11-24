/* 
 * © 2018 Jan Kossick, jankossick@online.de, https://jankossick.de
 */

(function() {
    // add jobs    
    for(var i = 0; i < 5; i++) {
        $(".jobs.template").clone().removeClass("template")
                .insertBefore(".jobs.permanent");
    }
})();

// add job
$(".add-job").click(function() {
    $(".jobs.template").clone().removeClass("template")
                .insertBefore(".jobs.permanent");
});