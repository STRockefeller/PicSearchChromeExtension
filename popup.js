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
function newTab(url) { chrome.tabs.create({ "url": url }); }
