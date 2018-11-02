$(function () {
    $("div[href]").click(function (event) {
        window.protocolCheck($(this).attr("href"),
            function () {
                //window.location.href = "http://www.baidu.com";
				window.open("http://www.baidu.com");
            });
        event.preventDefault ? event.preventDefault() : event.returnValue = false;
    });
});
