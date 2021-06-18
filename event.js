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
function link(url) { chrome.tabs.create({ "url": url }); }
function onClickPinterest(info, tab) { link("https://www.pinterest.com/search/pins/?q=" + info.selectionText); }
function onClickUnsplash(info, tab) { link("https://unsplash.com/s/photos/" + info.selectionText); }
function onClickCreativeCommons(info, tab) { link("https://creativecommons.org/?s=" + info.selectionText); }
function onClickPexel(info, tab) { link("https://www.pexels.com/search/" + info.selectionText); }
function onClickPixaBay(info, tab) { link("https://pixabay.com/images/search/" + info.selectionText); }
function onClickPixiv(info, tab) {
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
    link("https://www.pixiv.net/tags/" + info.selectionText + extraKeywords + "/artworks?s_mode=s_tag");
}
function onClickAbduzeedo(info, tab) { link("https://abduzeedo.com/search/node?keys=" + info.selectionText); }
;
function onClickBehance(info, tab) { link("https://www.behance.net/?tracking_source=typeahead_search_direct&search=" + info.selectionText); }
;
function onClickDesignspiration(info, tab) { link("https://www.designspiration.com/search/saves/?q=" + info.selectionText + "&qa=typed&term_meta%5B%5D=" + info.selectionText + "%7Ctyped%7Cword%7C0"); }
;
function onClickDesignSponge(info, tab) { link("https://www.designsponge.com/?s=" + info.selectionText); }
;
function onClickDribble(info, tab) { link("https://dribbble.com/search/" + info.selectionText); }
;
function onClickInspirationde(info, tab) { link("https://www.inspirationde.com/?s=" + info.selectionText + "&q="); }
;
function onClickJuxtapoz(info, tab) { link("https://www.juxtapoz.com/search/" + info.selectionText + "/"); }
;
function onClickNotefolio(info, tab) { link("https://notefolio.net/?work_categories=&order=noted&from=all&q=" + info.selectionText); }
;
chrome.contextMenus.onClicked.addListener(function (info, tab) {
    switch (info.menuItemId) {
        case "Pinterest":
            onClickPinterest(info, tab);
            break;
        case "Unsplash":
            onClickUnsplash(info, tab);
            break;
        case "CreativeCommons":
            onClickCreativeCommons(info, tab);
            break;
        case "Pexel":
            onClickPexel(info, tab);
            break;
        case "PixaBay":
            onClickPixaBay(info, tab);
            break;
        case "Pixiv":
            onClickPixiv(info, tab);
            break;
        case "Abduzeedo":
            onClickAbduzeedo(info, tab);
            break;
        case "Behance":
            onClickBehance(info, tab);
            break;
        case "Designspiration":
            onClickDesignspiration(info, tab);
            break;
        case "DesignSponge":
            onClickDesignSponge(info, tab);
            break;
        case "Dribble":
            onClickDribble(info, tab);
            break;
        case "Inspirationde":
            onClickInspirationde(info, tab);
            break;
        case "Juxtapoz":
            onClickJuxtapoz(info, tab);
            break;
        case "Notefolio":
            onClickNotefolio(info, tab);
            break;
        default:
            console.log("onClickedListener undefined value");
            console.log(info.menuItemId);
            break;
    }
});
function initialization() {
    chrome.storage.sync.get({
        enableCreativeCommons: true,
        enableUnsplash: true,
        enablePinterest: true,
        enablePixaBay: true,
        enablePexel: true,
        enablePixiv: true,
        enableAbduzeedo: true,
        enableBehance: true,
        enableDesignspiration: true,
        enableDesignSponge: true,
        enableDribble: true,
        enableInspirationde: true,
        enableJuxtapoz: true,
        enableNotefolio: true,
        pixivBookmarkComboBox: 'disable'
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
        createMenu();
    });
}
function createMenu() {
    var parent = chrome.contextMenus.create({
        "id": "parent",
        "title": "Search \"%s\" by",
        "contexts": ['all']
    });
    if (enableAbduzeedo) {
        var Abduzeedo = chrome.contextMenus.create({
            "id": "Abduzeedo",
            "title": "Abduzeedo",
            "type": "normal",
            "contexts": ['all'],
            "parentId": parent
        });
    }
    if (enableBehance) {
        var Behance = chrome.contextMenus.create({
            "id": "Behance",
            "title": "Behance",
            "type": "normal",
            "contexts": ['all'],
            "parentId": parent
        });
    }
    if (enableCreativeCommons) {
        var CreativeCommons = chrome.contextMenus.create({
            "id": "CreativeCommons",
            "title": "Creative Commons",
            "type": "normal",
            "contexts": ['all'],
            "parentId": parent
        });
    }
    if (enableDesignspiration) {
        var Designspiration = chrome.contextMenus.create({
            "id": "Designspiration",
            "title": "Designspiration",
            "type": "normal",
            "contexts": ['all'],
            "parentId": parent
        });
    }
    if (enableDesignSponge) {
        var DesignSponge = chrome.contextMenus.create({
            "id": "DesignSponge",
            "title": "DesignSponge",
            "type": "normal",
            "contexts": ['all'],
            "parentId": parent
        });
    }
    if (enableDribble) {
        var Dribble = chrome.contextMenus.create({
            "id": "Dribble",
            "title": "Dribble",
            "type": "normal",
            "contexts": ['all'],
            "parentId": parent
        });
    }
    if (enableInspirationde) {
        var Inspirationde = chrome.contextMenus.create({
            "id": "Inspirationde",
            "title": "Inspirationde",
            "type": "normal",
            "contexts": ['all'],
            "parentId": parent
        });
    }
    if (enableJuxtapoz) {
        var Juxtapoz = chrome.contextMenus.create({
            "id": "Juxtapoz",
            "title": "Juxtapoz",
            "type": "normal",
            "contexts": ['all'],
            "parentId": parent
        });
    }
    if (enableNotefolio) {
        var Notefolio = chrome.contextMenus.create({
            "id": "Notefolio",
            "title": "Notefolio",
            "type": "normal",
            "contexts": ['all'],
            "parentId": parent
        });
    }
    if (enablePexel) {
        var Pexel = chrome.contextMenus.create({
            "id": "Pexel",
            "title": "Pexel",
            "type": "normal",
            "contexts": ['all'],
            "parentId": parent
        });
    }
    if (enablePinterest) {
        var Pinterest = chrome.contextMenus.create({
            "id": "Pinterest",
            "title": "Pinterest",
            "type": "normal",
            "contexts": ['all'],
            "parentId": parent
        });
    }
    if (enablePixaBay) {
        var PixaBay = chrome.contextMenus.create({
            "id": "PixaBay",
            "title": "PixaBay",
            "type": "normal",
            "contexts": ['all'],
            "parentId": parent
        });
    }
    if (enablePixiv) {
        var Pixiv = chrome.contextMenus.create({
            "id": "Pixiv",
            "title": "Pixiv",
            "type": "normal",
            "contexts": ['all'],
            "parentId": parent
        });
    }
    if (enableUnsplash) {
        var Unsplash = chrome.contextMenus.create({
            "id": "Unsplash",
            "title": "Unsplash",
            "type": "normal",
            "contexts": ['all'],
            "parentId": parent
        });
    }
}
function rebuildMenu() {
    chrome.contextMenus.removeAll(initialization);
}
initialization();
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message === "Options changed")
        rebuildMenu();
    console.log(message);
});
chrome.runtime.onStartup.addListener(rebuildMenu);
chrome.runtime.onInstalled.addListener(rebuildMenu);
