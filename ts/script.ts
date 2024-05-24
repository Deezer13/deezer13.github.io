(function (): void {
    const showBlock = (divs: string[]): object => $.each(divs, function (i: number) { $(divs[i]).css("display", "block") });
    const showNone = (divs: string[]): object => $.each(divs, function (i: number) { $(divs[i]).css("display", "none") });
    const showFlex = (divs: string[]): object => $.each(divs, function (i: number) { $(divs[i]).css("display", "flex") });

    $(".buttons li").on("click", function () { showPage($(this).data("page")); });

    $("#lists li").on(
        {
            mouseover: function () { showInfo($(this).data("page2")); },
            mouseout: function () { showNone([`#${$(this).data("page2")}`]); }
        });

    function showPage(page: object): void {
        showNone([".content div"]);
        showFlex(["#lists"]);
        showBlock([`#${page}`, ".listOne", ".listTwo", "#info"]);
    }

    function showInfo(page2: object): void {
        showNone(["#info div"]);
        showBlock([`#${page2}`]);
    }
}());