$(function () {
    var id = Number(window.location.search.split('=')[1]) - 1
    console.log(id)
    $('.speaker-info .speaker-img img').attr('src', speakers[id]['speaker-img']).attr('alt', speakers[id]['speaker-name']);
    $('.speaker-info .speaker-detail .speaker-detail-introduction .content').append(speakers[id]['speaker-information']);
    $('.speaker-info .speaker-detail .speaker-detail-topic .content').append(speakers[id]['speaker-topic']);
    $('.speaker-info .speaker-detail .speaker-detail-outline .content').append(speakers[id]['speaker-outline']);
})