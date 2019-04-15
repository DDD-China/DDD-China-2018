$(function () {
  var id = Number(window.location.search.split('=')[1]) - 1
  console.log(speakers[id]);
  $('.topic-item-1 .speaker-info .speaker-img img').attr('src', speakers[id][0]['producer-img']).attr('alt', speakers[id][0]['producer-name']);
  $('.topic-item-1 .speaker-info .speaker-detail .speaker-detail-introduction .speaker-name').append(speakers[id][0]['producer-name']);
  $('.topic-item-1 .speaker-info .speaker-detail .speaker-detail-introduction .speaker-title').append(speakers[id][0]['producer-introduction']);
  $('.topic-item-1 .speaker-detail .speaker-detail-information').append(speakers[id][0]['producer-information']);

  $('.topic-item-1 .speaker-info .speaker-topic .speaker-topic-content').append(speakers[id][0]['producer-topic']);
  $('.topic-item-1 .speaker-info .speaker-topic-detail .speaker-topic-content-detail').append(speakers[id][0]['topic-information']);

  $('.topic-item-2 .speaker-info .speaker-topic .speaker-topic-content').append(speakers[id][1]['producer-topic']);
  $('.topic-item-2 .speaker-info .speaker-topic-detail .speaker-topic-content-detail').append(speakers[id][1]['topic-information']);
});