$(function () {
  var id = Number(window.location.search.split('=')[1]) - 1
  console.log(id)
  $('.speaker-info .speaker-img img').attr('src', producers[id]['producer-img']).attr('alt', producers[id]['producer-name']);
  $('.speaker-info .speaker-detail .speaker-detail-introduction .speaker-name').append(producers[id]['producer-name']);
  $('.speaker-info .speaker-detail .speaker-detail-introduction .speaker-title').append(producers[id]['producer-introduction']);
  $('.speaker-detail .speaker-detail-information').append(producers[id]['producer-information']);

  $('.speaker-info .speaker-topic .speaker-topic-content').append(producers[id]['producer-topic']);
  $('.speaker-info .speaker-topic-detail .speaker-topic-content-detail').append(producers[id]['topic-information']);

  producers[id].speakers.forEach(speaker => {
    console.log(speaker)
    $("#producer-speaker-container").template("speaker");
    $.tmpl("speaker", {
      imgUrl: speaker.img,
      name: speaker.name,
      introduction: speaker.introduction,
      information: speaker.information,
      topic: speaker.topic,
      topicInformation: speaker["topic-information"]
    }).appendTo("#producers-speakers");
  });
});