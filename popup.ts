var enableCreativeCommons: boolean;
var enableUnsplash: boolean;
var enablePinterest: boolean;
var enablePixaBay: boolean;
var enablePexel: boolean;
var enablePixiv: boolean;
var enableAbduzeedo: boolean;
var enableBehance: boolean;
var enableDesignspiration: boolean;
var enableDesignSponge: boolean;
var enableDribble: boolean;
var enableInspirationde: boolean;
var enableJuxtapoz: boolean;
var enableNotefolio: boolean;
var pixivBookmarkComboBox: string;
var enableArtStation:boolean;
var enableDeviantArt:boolean;
$("#btn-Unsplash").click(() => newTab("https://unsplash.com/s/photos/" + $("#keyWords").val()));
$("#btn-CreativeCommons").click(() => newTab("https://creativecommons.org/?s=" + $("#keyWords").val()));
$("#btn-Pinterest").click(() => newTab("https://www.pinterest.com/search/pins/?q=" + $("#keyWords").val()));
$("#btn-Pexel").click(() => newTab("https://www.pexels.com/search/" + $("#keyWords").val()));
$("#btn-PixaBay").click(() => newTab("https://pixabay.com/images/search/" + $("#keyWords").val()));
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
$("#btn-Abduzeedo").click(() => newTab(`https://abduzeedo.com/search/node?keys=${$("#keyWords").val()}`));
$("#btn-Behance").click(() => newTab(`https://www.behance.net/?tracking_source=typeahead_search_direct&search=${$("#keyWords").val()}`));
$("#btn-Designspiration").click(() => newTab(`https://www.designspiration.com/search/saves/?q=${$("#keyWords").val()}&qa=typed&term_meta%5B%5D=${$("#keyWords").val()}%7Ctyped%7Cword%7C0`));
$("#btn-DesignSponge").click(() => newTab(`https://www.designsponge.com/?s=${$("#keyWords").val()}`));
$("#btn-Dribble").click(() => newTab(`https://dribbble.com/search/${$("#keyWords").val()}`));
$("#btn-Inspirationde").click(() => newTab(`https://www.inspirationde.com/?s=${$("#keyWords").val()}&q=`));
$("#btn-Juxtapoz").click(() => newTab(`https://www.juxtapoz.com/search/${$("#keyWords").val()}/`));
$("#btn-Notefolio").click(() => newTab(`https://notefolio.net/?work_categories=&order=noted&from=all&q=${$("#keyWords").val()}`));
$("#btn-ArtStation").click(() => newTab(`https://www.artstation.com/search?q=${$("#keyWords").val()}&sort_by=relevance`));
$("#btn-DeviantArt").click(() => newTab(`https://www.deviantart.com/search?q=${$("#keyWords").val()}`));

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
        if(!enableArtStation)
            $(".show-ArtStation").hide();
        if(!enableDeviantArt)
            $(".show-DeviantArt").hide();
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
    }, function (items): void {
        enableCreativeCommons = items.enableCreativeCommons as boolean;
        enableUnsplash = items.enableUnsplash as boolean;
        enablePinterest = items.enablePinterest as boolean;
        enablePixaBay = items.enablePixaBay as boolean;
        enablePexel = items.enablePexel as boolean;
        enablePixiv = items.enablePixiv as boolean;
        pixivBookmarkComboBox = items.pixivBookmarkComboBox as string;
        enableAbduzeedo = items.enableAbduzeedo as boolean;
        enableBehance = items.enableBehance as boolean;
        enableDesignspiration = items.enableDesignspiration as boolean;
        enableDesignSponge = items.enableDesignSponge as boolean;
        enableDribble = items.enableDribble as boolean;
        enableInspirationde = items.enableInspirationde as boolean;
        enableJuxtapoz = items.enableJuxtapoz as boolean;
        enableNotefolio = items.enableNotefolio as boolean;
        enableArtStation = items.enableArtStation as boolean;
        enableDeviantArt = items.enableDeviantArt as boolean;
        btnVisibility();
    });
}
$(document).ready(() => initialization());