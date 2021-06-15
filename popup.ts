var enableCreativeCommons: boolean;
var enableUnsplash: boolean;
var enablePinterest: boolean;
var enablePixaBay: boolean;
var enablePexel: boolean;
var enablePixiv: boolean;
var pixivBookmarkComboBox: string;

$("#btn-Unsplash").click(function () {
    newTab("https://unsplash.com/s/photos/" + $("#keyWords").val());
});
$("#btn-CreativeCommons").click(function () {
    newTab("https://creativecommons.org/?s=" + $("#keyWords").val());
});
$("#btn-Pinterest").click(function () {
    newTab("https://www.pinterest.com/search/pins/?q=" + $("#keyWords").val());
});
$("#btn-Pexel").click(function () {
    newTab("https://www.pexels.com/search/" + $("#keyWords").val());
});
$("#btn-PixaBay").click(function () {
    newTab("https://pixabay.com/images/search/" + $("#keyWords").val());
});
$("#btn-Pixiv").click(function () {
    var extraKeywords: String;
    switch (pixivBookmarkComboBox) {
        case 'over than 100':
            extraKeywords = " 100users入り";
            break;
        case 'over than 500':
            extraKeywords = " 500users入り";
            break;
        case 'over than 1000':
            extraKeywords = " 1000users入り";
            break;
        case 'over than 5000':
            extraKeywords = " 5000users入り";
            break;
        case 'over than 10000':
            extraKeywords = " 10000users入り";
            break;
        case 'over than 50000':
            extraKeywords = " 50000users入り";
            break;
        case 'over than 100000':
            extraKeywords = " 100000users入り";
            break;
        default:
            extraKeywords = "";
            break;
    }
    newTab("https://www.pixiv.net/tags/" + $("#keyWords").val() + extraKeywords + "/artworks?s_mode=s_tag");
});
$("#btn-Setting").click(function () {
    if (chrome.runtime.openOptionsPage)
        chrome.runtime.openOptionsPage();
    else
        window.open(chrome.runtime.getURL('options.html'));
});
function newTab(url: string): void { chrome.tabs.create({ "url": url }); }
function btnVisibility(): void {
    try {
        if (!enableCreativeCommons)
            $(".show-CreativeCommons").hide();
        if (!enableUnsplash)
            $(".show-Unsplash").hide();
        if (!enablePinterest)
            $(".show-Pinterest").hide();
        if (!enablePixaBay)
            $(".show-PixaBay").hide();
        if (!enablePexel)
            $(".show-Pexel").hide();
        if (!enablePixiv)
            $(".show-Pixiv").hide();
    } catch (error) {
        console.log(error);
        debugger;
    }
}
function initialization(): void {
    chrome.storage.sync.get({
        enableCreativeCommons: true,
        enableUnsplash: true,
        enablePinterest: true,
        enablePixaBay: true,
        enablePexel: true,
        enablePixiv: true,
        pixivBookmarkComboBox: 'disable'
    }, function (items): void {
        enableCreativeCommons = items.enableCreativeCommons as boolean;
        enableUnsplash = items.enableUnsplash as boolean;
        enablePinterest = items.enablePinterest as boolean;
        enablePixaBay = items.enablePixaBay as boolean;
        enablePexel = items.enablePexel as boolean;
        enablePixiv = items.enablePixiv as boolean;
        pixivBookmarkComboBox = items.pixivBookmarkComboBox as string;
        btnVisibility();
    });
}
$(document).ready(()=>initialization());