(function () {
    var showBlock = function (divs) { return $.each(divs, function (i) { $(divs[i]).css("display", "block"); }); };
    var showNone = function (divs) { return $.each(divs, function (i) { $(divs[i]).css("display", "none"); }); };
    var showFlex = function (divs) { return $.each(divs, function (i) { $(divs[i]).css("display", "flex"); }); };
    $(".buttons li").on("click", function () { showPage($(this).data("page")); });
    $("#lists li").on({
        mouseover: function () { showInfo($(this).data("page2")); },
        mouseout: function () { showNone(["#".concat($(this).data("page2"))]); }
    });
    function showPage(page) {
        showNone([".content div"]);
        showFlex(["#lists"]);
        showBlock(["#".concat(page), ".listOne", ".listTwo", "#info"]);
    }
    function showInfo(page2) {
        showNone(["#info div"]);
        showBlock(["#".concat(page2)]);
    }
}());
