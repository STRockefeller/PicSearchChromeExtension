var enableCreativeCommons;
var enableUnsplash;
var enablePinterest;
var enablePixaBay;
var enablePexel;
var enablePixiv;
var enableAbduzeedo;
var enableBehance;
var enableDesignspiration;
var enableDesignSponge;
var enableDribble;
var enableInspirationde;
var enableJuxtapoz;
var enableNotefolio;
var pixivBookmarkComboBox;
var enableArtStation;
var enableDeviantArt;
$("#btn-Unsplash").click(function () { return newTab("https://unsplash.com/s/photos/" + $("#keyWords").val()); });
$("#btn-CreativeCommons").click(function () { return newTab("https://creativecommons.org/?s=" + $("#keyWords").val()); });
$("#btn-Pinterest").click(function () { return newTab("https://www.pinterest.com/search/pins/?q=" + $("#keyWords").val()); });
$("#btn-Pexel").click(function () { return newTab("https://www.pexels.com/search/" + $("#keyWords").val()); });
$("#btn-PixaBay").click(function () { return newTab("https://pixabay.com/images/search/" + $("#keyWords").val()); });
$("#btn-Pixiv").click(function () {
    var extraKeywords;
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
$("#btn-Abduzeedo").click(function () { return newTab("https://abduzeedo.com/search/node?keys=" + $("#keyWords").val()); });
$("#btn-Behance").click(function () { return newTab("https://www.behance.net/?tracking_source=typeahead_search_direct&search=" + $("#keyWords").val()); });
$("#btn-Designspiration").click(function () { return newTab("https://www.designspiration.com/search/saves/?q=" + $("#keyWords").val() + "&qa=typed&term_meta%5B%5D=" + $("#keyWords").val() + "%7Ctyped%7Cword%7C0"); });
$("#btn-DesignSponge").click(function () { return newTab("https://www.designsponge.com/?s=" + $("#keyWords").val()); });
$("#btn-Dribble").click(function () { return newTab("https://dribbble.com/search/" + $("#keyWords").val()); });
$("#btn-Inspirationde").click(function () { return newTab("https://www.inspirationde.com/?s=" + $("#keyWords").val() + "&q="); });
$("#btn-Juxtapoz").click(function () { return newTab("https://www.juxtapoz.com/search/" + $("#keyWords").val() + "/"); });
$("#btn-Notefolio").click(function () { return newTab("https://notefolio.net/?work_categories=&order=noted&from=all&q=" + $("#keyWords").val()); });
$("#btn-ArtStation").click(function () { return newTab("https://www.artstation.com/search?q=" + $("#keyWords").val() + "&sort_by=relevance"); });
$("#btn-DeviantArt").click(function () { return newTab("https://www.deviantart.com/search?q=" + $("#keyWords").val()); });
$("#btn-Setting").click(function () {
    if (chrome.runtime.openOptionsPage)
        chrome.runtime.openOptionsPage();
    else
        window.open(chrome.runtime.getURL('options.html'));
});
function newTab(url) { chrome.tabs.create({ "url": url }); }
function btnVisibility() {
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
        if (!enableAbduzeedo)
            $(".show-Abduzeedo").hide();
        if (!enableBehance)
            $(".show-Behance").hide();
        if (!enableDesignspiration)
            $(".show-Designspiration").hide();
        if (!enableDesignSponge)
            $(".show-DesignSponge").hide();
        if (!enableDribble)
            $(".show-Dribble").hide();
        if (!enableInspirationde)
            $(".show-Inspirationde").hide();
        if (!enableJuxtapoz)
            $(".show-Juxtapoz").hide();
        if (!enableNotefolio)
            $(".show-Notefolio").hide();
        if (!enableArtStation)
            $(".show-ArtStation").hide();
        if (!enableDeviantArt)
            $(".show-DeviantArt").hide();
    }
    catch (error) {
        console.log(error);
        debugger;
    }
}
function initialization() {
    chrome.storage.sync.get({
        enableCreativeCommons: true,
        enableUnsplash: true,
        enablePinterest: true,
        enablePixaBay: true,
        enablePexel: true,
        enablePixiv: true,
        pixivBookmarkComboBox: 'disable',
        enableAbduzeedo: true,
        enableBehance: true,
        enableDesignspiration: true,
        enableDesignSponge: true,
        enableDribble: true,
        enableInspirationde: true,
        enableJuxtapoz: true,
        enableNotefolio: true,
        enableArtStation: true,
        enableDeviantArt: true
    }, function (items) {
        enableCreativeCommons = items.enableCreativeCommons;
        enableUnsplash = items.enableUnsplash;
        enablePinterest = items.enablePinterest;
        enablePixaBay = items.enablePixaBay;
        enablePexel = items.enablePexel;
        enablePixiv = items.enablePixiv;
        pixivBookmarkComboBox = items.pixivBookmarkComboBox;
        enableAbduzeedo = items.enableAbduzeedo;
        enableBehance = items.enableBehance;
        enableDesignspiration = items.enableDesignspiration;
        enableDesignSponge = items.enableDesignSponge;
        enableDribble = items.enableDribble;
        enableInspirationde = items.enableInspirationde;
        enableJuxtapoz = items.enableJuxtapoz;
        enableNotefolio = items.enableNotefolio;
        enableArtStation = items.enableArtStation;
        enableDeviantArt = items.enableDeviantArt;
        btnVisibility();
    });
}
$(document).ready(function () { return initialization(); });
