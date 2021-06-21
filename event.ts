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
var enableArtStation: boolean;
var enableDeviantArt: boolean;
function link(url: string): void { chrome.tabs.create({ "url": url }); }
function onClickPinterest(info, tab): void { link("https://www.pinterest.com/search/pins/?q=" + info.selectionText) }
function onClickUnsplash(info, tab): void { link("https://unsplash.com/s/photos/" + info.selectionText) }
function onClickCreativeCommons(info, tab): void { link("https://creativecommons.org/?s=" + info.selectionText) }
function onClickPexel(info, tab): void { link("https://www.pexels.com/search/" + info.selectionText) }
function onClickPixaBay(info, tab): void { link("https://pixabay.com/images/search/" + info.selectionText) }
function onClickPixiv(info, tab): void {
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
    link("https://www.pixiv.net/tags/" + info.selectionText + extraKeywords + "/artworks?s_mode=s_tag");
}
function onClickAbduzeedo(info, tab): void { link(`https://abduzeedo.com/search/node?keys=${info.selectionText}`) };
function onClickBehance(info, tab): void { link(`https://www.behance.net/?tracking_source=typeahead_search_direct&search=${info.selectionText}`) };
function onClickDesignspiration(info, tab): void { link(`https://www.designspiration.com/search/saves/?q=${info.selectionText}&qa=typed&term_meta%5B%5D=${info.selectionText}%7Ctyped%7Cword%7C0`) };
function onClickDesignSponge(info, tab): void { link(`https://www.designsponge.com/?s=${info.selectionText}`) };
function onClickDribble(info, tab): void { link(`https://dribbble.com/search/${info.selectionText}`) };
function onClickInspirationde(info, tab): void { link(`https://www.inspirationde.com/?s=${info.selectionText}&q=`) };
function onClickJuxtapoz(info, tab): void { link(`https://www.juxtapoz.com/search/${info.selectionText}/`) };
function onClickNotefolio(info, tab): void { link(`https://notefolio.net/?work_categories=&order=noted&from=all&q=${info.selectionText}`) };
function onClickArtStation(info, tab): void { link(`https://www.artstation.com/search?q=${info.selectionText}&sort_by=relevance`) };
function onClickDeviantArt(info, tab): void { link(`https://www.deviantart.com/search?q=${info.selectionText}`) };
chrome.contextMenus.onClicked.addListener(function (info, tab): void {
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
            onClickAbduzeedo(info,tab);
            break;
        case "Behance":
            onClickBehance(info,tab);
            break;
        case "Designspiration":
            onClickDesignspiration(info,tab);
            break;
        case "DesignSponge":
            onClickDesignSponge(info,tab);
            break;
        case "Dribble":
            onClickDribble(info,tab);
            break;
        case "Inspirationde":
            onClickInspirationde(info,tab);
            break;
        case "Juxtapoz":
            onClickJuxtapoz(info,tab);
            break;
        case "Notefolio":
            onClickNotefolio(info,tab);
            break;
        case "ArtStation":
            onClickArtStation(info,tab);
            break;
        case "DeviantArt":
            onClickDeviantArt(info,tab);
            break;
        default:
            console.log("onClickedListener undefined value");
            console.log(info.menuItemId);
            break;
    }
});
function initialization(): void {
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
        pixivBookmarkComboBox: 'disable',
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
        createMenu();
    });
}
function createMenu(): void {
    var parent = chrome.contextMenus.create({
        "id": "parent",
        "title": "Search \"%s\" by",
        "contexts": ['all'],
    });
    if (enableAbduzeedo) {
        var Abduzeedo = chrome.contextMenus.create({
            "id": "Abduzeedo",
            "title": "Abduzeedo",
            "type": "normal",
            "contexts": ['all'],
            "parentId": parent,
        });
    }
    if (enableArtStation) {
        var Unsplash = chrome.contextMenus.create({
            "id": "ArtStation",
            "title": "Art Station",
            "type": "normal",
            "contexts": ['all'],
            "parentId": parent,
        });
    }
    if (enableBehance) {
        var Behance = chrome.contextMenus.create({
            "id": "Behance",
            "title": "Behance",
            "type": "normal",
            "contexts": ['all'],
            "parentId": parent,
        });
    }
    if (enableCreativeCommons) {
        var CreativeCommons = chrome.contextMenus.create({
            "id": "CreativeCommons",
            "title": "Creative Commons",
            "type": "normal",
            "contexts": ['all'],
            "parentId": parent,
        });
    }
    if (enableDesignspiration) {
        var Designspiration = chrome.contextMenus.create({
            "id": "Designspiration",
            "title": "Designspiration",
            "type": "normal",
            "contexts": ['all'],
            "parentId": parent,
        });
    }
    if (enableDesignSponge) {
        var DesignSponge = chrome.contextMenus.create({
            "id": "DesignSponge",
            "title": "DesignSponge",
            "type": "normal",
            "contexts": ['all'],
            "parentId": parent,
        });
    }
    if (enableDeviantArt) {
        var Unsplash = chrome.contextMenus.create({
            "id": "DeviantArt",
            "title": "Deviant Art",
            "type": "normal",
            "contexts": ['all'],
            "parentId": parent,
        });
    }
    if (enableDribble) {
        var Dribble = chrome.contextMenus.create({
            "id": "Dribble",
            "title": "Dribble",
            "type": "normal",
            "contexts": ['all'],
            "parentId": parent,
        });
    }
    if (enableInspirationde) {
        var Inspirationde = chrome.contextMenus.create({
            "id": "Inspirationde",
            "title": "Inspirationde",
            "type": "normal",
            "contexts": ['all'],
            "parentId": parent,
        });
    }
    if (enableJuxtapoz) {
        var Juxtapoz = chrome.contextMenus.create({
            "id": "Juxtapoz",
            "title": "Juxtapoz",
            "type": "normal",
            "contexts": ['all'],
            "parentId": parent,
        });
    }
    if (enableNotefolio) {
        var Notefolio = chrome.contextMenus.create({
            "id": "Notefolio",
            "title": "Notefolio",
            "type": "normal",
            "contexts": ['all'],
            "parentId": parent,
        });
    }
    if (enablePexel) {
        var Pexel = chrome.contextMenus.create({
            "id": "Pexel",
            "title": "Pexel",
            "type": "normal",
            "contexts": ['all'],
            "parentId": parent,
        });
    }
    if (enablePinterest) {
        var Pinterest = chrome.contextMenus.create({
            "id": "Pinterest",
            "title": "Pinterest",
            "type": "normal",
            "contexts": ['all'],
            "parentId": parent,
        });
    }
    if (enablePixaBay) {
        var PixaBay = chrome.contextMenus.create({
            "id": "PixaBay",
            "title": "PixaBay",
            "type": "normal",
            "contexts": ['all'],
            "parentId": parent,
        });
    }
    if (enablePixiv) {
        var Pixiv = chrome.contextMenus.create({
            "id": "Pixiv",
            "title": "Pixiv",
            "type": "normal",
            "contexts": ['all'],
            "parentId": parent,
        });
    }
    if (enableUnsplash) {
        var Unsplash = chrome.contextMenus.create({
            "id": "Unsplash",
            "title": "Unsplash",
            "type": "normal",
            "contexts": ['all'],
            "parentId": parent,
        });
    }
}
function rebuildMenu(): void {
    chrome.contextMenus.removeAll(initialization);
}
initialization();
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message === "Options changed")
        rebuildMenu();
    console.log(message);
});
chrome.runtime.onStartup.addListener(rebuildMenu);
chrome.runtime.onInstalled.addListener(rebuildMenu);