function link(url) { chrome.tabs.create({ "url": url }); }
function onClickPinterest(info, tab) { link("https://www.pinterest.com/search/pins/?q=%s" + info.selectionText); }
function onClickUnsplash(info, tab) { link("https://unsplash.com/s/photos/" + info.selectionText); }
function onClickCreativeCommons(info, tab) { link("https://creativecommons.org/?s=" + info.selectionText); }
function onClickPexel(info, tab) { link("https://www.pexels.com/search/" + info.selectionText); }
function onClickPixaBay(info, tab) { link("https://pixabay.com/images/search/" + info.selectionText); }
function createMenu() {
    var parent = chrome.contextMenus.create({
        "title": "Search %s by",
        "contexts": ['all']
    });
    var Unsplash = chrome.contextMenus.create({
        "title": "Unsplash",
        "type": "normal",
        "contexts": ['all'],
        "parentId": parent,
        "onclick": onClickUnsplash
    });
    var CreativeCommons = chrome.contextMenus.create({
        "title": "Creative Commons",
        "type": "normal",
        "contexts": ['all'],
        "parentId": parent,
        "onclick": onClickCreativeCommons
    });
    var Pinterest = chrome.contextMenus.create({
        "title": "Pinterest",
        "type": "normal",
        "contexts": ['all'],
        "parentId": parent,
        "onclick": onClickPinterest
    });
    var Pexel = chrome.contextMenus.create({
        "title": "Pexel",
        "type": "normal",
        "contexts": ['all'],
        "parentId": parent,
        "onclick": onClickPexel
    });
    var PixaBay = chrome.contextMenus.create({
        "title": "PixaBay",
        "type": "normal",
        "contexts": ['all'],
        "parentId": parent,
        "onclick": onClickPixaBay
    });
}
createMenu();
