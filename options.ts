function save_options():void {
    var enableCreativeCommons = document.getElementById('cbx-CreativeCommons').checked;
    var enableUnsplash = document.getElementById('cbx-Unsplash').checked;
    var enablePinterest = document.getElementById('cbx-Pinterest').checked;
    var enablePixaBay = document.getElementById('cbx-PixaBay').checked;
    var enablePexel = document.getElementById('cbx-Pexel').checked;
    var enablePixiv = document.getElementById('cbx-Pixiv').checked;
    var pixivBookmarkComboBox = document.getElementById('PixivBookmarkComboBox').value;
    chrome.storage.sync.set({
        enableCreativeCommons: enableCreativeCommons,
        enableUnsplash: enableUnsplash,
        enablePinterest: enablePinterest,
        enablePixaBay: enablePixaBay,
        enablePexel: enablePexel,
        enablePixiv: enablePixiv,
        pixivBookmarkComboBox: pixivBookmarkComboBox
    }, function () {
        var status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function () {
            status.textContent = '';
        }, 750);
    });
}


function restore_options():void {
    chrome.storage.sync.get({
        enableCreativeCommons: true,
        enableUnsplash: true,
        enablePinterest: true,
        enablePixaBay: true,
        enablePexel: true,
        enablePixiv: true,
        pixivBookmarkComboBox: 'disable'
    }, function (items):void {
        document.getElementById('cbx-CreativeCommons').checked = items.enableCreativeCommons;
        document.getElementById('cbx-Unsplash').checked = items.enableUnsplash;
        document.getElementById('cbx-Pinterest').checked = items.enablePinterest;
        document.getElementById('cbx-PixaBay').checked = items.enablePixaBay;
        document.getElementById('cbx-Pexel').checked = items.enablePexel;
        document.getElementById('cbx-Pixiv').checked = items.enablePixiv;
        document.getElementById('PixivBookmarkComboBox').value = items.pixivBookmarkComboBox;
    });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);