var enableCreativeCommons: boolean;
var enableUnsplash: boolean;
var enablePinterest: boolean;
var enablePixaBay: boolean;
var enablePexel: boolean;
var enablePixiv: boolean;
var pixivBookmarkComboBox: string;
function link(url: string): void { chrome.tabs.create({ "url": url }); }
function onClickPinterest(info, tab): void { link("https://www.pinterest.com/search/pins/?q=%s" + info.selectionText) }
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
        createMenu();
    });
}
function createMenu(): void {
    var parent = chrome.contextMenus.create({
        "title": "Search %s by",
        "contexts": ['all'],
        //"onclick": genericOnClick  
    });
    if (enableUnsplash) {
        var Unsplash = chrome.contextMenus.create({
            "title": "Unsplash",
            "type": "normal",
            "contexts": ['all'],
            "parentId": parent,
            "onclick": onClickUnsplash
        });
    }
    if (enableCreativeCommons) {
        var CreativeCommons = chrome.contextMenus.create({
            "title": "Creative Commons",
            "type": "normal",
            "contexts": ['all'],
            "parentId": parent,
            "onclick": onClickCreativeCommons
        });
    }
    if (enablePinterest) {
        var Pinterest = chrome.contextMenus.create({
            "title": "Pinterest",
            "type": "normal",
            "contexts": ['all'],
            "parentId": parent,
            "onclick": onClickPinterest
        });
    }
    if (enablePexel) {
        var Pexel = chrome.contextMenus.create({
            "title": "Pexel",
            "type": "normal",
            "contexts": ['all'],
            "parentId": parent,
            "onclick": onClickPexel
        });
    }
    if (enablePixaBay) {
        var PixaBay = chrome.contextMenus.create({
            "title": "PixaBay",
            "type": "normal",
            "contexts": ['all'],
            "parentId": parent,
            "onclick": onClickPixaBay
        });
    }
    if (enablePixiv) {
        var Pixiv = chrome.contextMenus.create({
            "title": "Pixiv",
            "type": "normal",
            "contexts": ['all'],
            "parentId": parent,
            "onclick": onClickPixiv
        });
    }
}
initialization();