$(function () {
  var id = Number(window.location.search.split('=')[1]) - 1
  console.log(id)
  $('.speaker-info .speaker-img img').attr('src', speakers[id]['producer-img']).attr('alt', speakers[id]['producer-name']);
  $('.speaker-info .speaker-detail .speaker-detail-introduction .speaker-name').append(speakers[id]['producer-name']);
  $('.speaker-info .speaker-detail .speaker-detail-introduction .speaker-title').append(speakers[id]['producer-introduction']);
  $('.speaker-detail .speaker-detail-information').append(speakers[id]['producer-information']);

  $('.speaker-info .speaker-topic .speaker-topic-content').append(speakers[id]['producer-topic']);
  $('.speaker-info .speaker-topic-detail .speaker-topic-content-detail').append(speakers[id]['topic-information']);
})