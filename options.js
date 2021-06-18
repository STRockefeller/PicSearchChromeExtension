//active class
$(".btn-secondary").change(function () {
    var label = $(this);
    label.removeClass("active");
    if (label.children().get(0).checked)
        label.addClass("active");
});
function activeInitialize() {
    $(".btn-secondary").toArray().forEach(function (element) {
        console.log("active initial :" + $(element).children().attr("id"));
        if (!$(element).children().get(0).checked)
            element.classList.remove("active");
    });
}
//active class
function save_options() {
    var enableAbduzeedo = document.getElementById('cbx-Abduzeedo').checked;
    var enableBehance = document.getElementById('cbx-Behance').checked;
    var enableCreativeCommons = document.getElementById('cbx-CreativeCommons').checked;
    var enableDesignspiration = document.getElementById('cbx-Designspiration').checked;
    var enableDesignSponge = document.getElementById('cbx-DesignSponge').checked;
    var enableDribble = document.getElementById('cbx-Dribble').checked;
    var enableInspirationde = document.getElementById('cbx-Inspirationde').checked;
    var enableJuxtapoz = document.getElementById('cbx-Juxtapoz').checked;
    var enableNotefolio = document.getElementById('cbx-Notefolio').checked;
    var enablePexel = document.getElementById('cbx-Pexel').checked;
    var enablePinterest = document.getElementById('cbx-Pinterest').checked;
    var enablePixaBay = document.getElementById('cbx-PixaBay').checked;
    var enablePixiv = document.getElementById('cbx-Pixiv').checked;
    var enableUnsplash = document.getElementById('cbx-Unsplash').checked;
    var pixivBookmarkComboBox = document.getElementById('PixivBookmarkComboBox').value;
    chrome.storage.sync.set({
        enableAbduzeedo: enableAbduzeedo,
        enableBehance: enableBehance,
        enableCreativeCommons: enableCreativeCommons,
        enableDesignspiration: enableDesignspiration,
        enableDesignSponge: enableDesignSponge,
        enableDribble: enableDribble,
        enableInspirationde: enableInspirationde,
        enableJuxtapoz: enableJuxtapoz,
        enableNotefolio: enableNotefolio,
        enablePexel: enablePexel,
        enablePinterest: enablePinterest,
        enablePixaBay: enablePixaBay,
        enablePixiv: enablePixiv,
        enableUnsplash: enableUnsplash,
        pixivBookmarkComboBox: pixivBookmarkComboBox
    }, function () {
        var status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function () {
            status.textContent = '';
        }, 1500);
        chrome.runtime.sendMessage("Options changed");
    });
}
function restore_options() {
    chrome.storage.sync.get({
        enableAbduzeedo: true,
        enableBehance: true,
        enableCreativeCommons: true,
        enableDesignspiration: true,
        enableDesignSponge: true,
        enableDribble: true,
        enableInspirationde: true,
        enableJuxtapoz: true,
        enableNotefolio: true,
        enablePexel: true,
        enablePinterest: true,
        enablePixaBay: true,
        enablePixiv: true,
        enableUnsplash: true,
        pixivBookmarkComboBox: 'disable'
    }, function (items) {
        document.getElementById('cbx-Abduzeedo').checked = items.enableAbduzeedo;
        document.getElementById('cbx-Behance').checked = items.enableBehance;
        document.getElementById('cbx-CreativeCommons').checked = items.enableCreativeCommons;
        document.getElementById('cbx-Designspiration').checked = items.enableDesignspiration;
        document.getElementById('cbx-DesignSponge').checked = items.enableDesignSponge;
        document.getElementById('cbx-Dribble').checked = items.enableDribble;
        document.getElementById('cbx-Inspirationde').checked = items.enableInspirationde;
        document.getElementById('cbx-Juxtapoz').checked = items.enableJuxtapoz;
        document.getElementById('cbx-Notefolio').checked = items.enableNotefolio;
        document.getElementById('cbx-Pexel').checked = items.enablePexel;
        document.getElementById('cbx-Pinterest').checked = items.enablePinterest;
        document.getElementById('cbx-PixaBay').checked = items.enablePixaBay;
        document.getElementById('cbx-Pixiv').checked = items.enablePixiv;
        document.getElementById('cbx-Unsplash').checked = items.enableUnsplash;
        document.getElementById('PixivBookmarkComboBox').value = items.pixivBookmarkComboBox;
        activeInitialize();
    });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
