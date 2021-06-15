var enableCreativeCommons;
var enableUnsplash;
var enablePinterest;
var enablePixaBay;
var enablePexel;
var enablePixiv;
var pixivBookmarkComboBox;
function link(url) { chrome.tabs.create({ "url": url }); }
function onClickPinterest(info, tab) { link("https://www.pinterest.com/search/pins/?q=%s" + info.selectionText); }
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
function initialization() {
    chrome.storage.sync.get({
        enableCreativeCommons: true,
        enableUnsplash: true,
        enablePinterest: true,
        enablePixaBay: true,
        enablePexel: true,
        enablePixiv: true,
        pixivBookmarkComboBox: 'disable'
    }, function (items) {
        enableCreativeCommons = items.enableCreativeCommons;
        enableUnsplash = items.enableUnsplash;
        enablePinterest = items.enablePinterest;
        enablePixaBay = items.enablePixaBay;
        enablePexel = items.enablePexel;
        enablePixiv = items.enablePixiv;
        pixivBookmarkComboBox = items.pixivBookmarkComboBox;
        createMenu();
    });
}
function createMenu() {
    var parent = chrome.contextMenus.create({
        "title": "Search %s by",
        "contexts": ['all']
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
