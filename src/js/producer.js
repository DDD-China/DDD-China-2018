$(function () {
  var templateHTMl = $('<div class="grid producer-grid-space centered">\n' +
    '        <div class="grid-cell speaker-info text-left">\n' +
    '            <div class="flexbox-row">\n' +
    '                <div class="speaker-img speaker-intro-row">\n' +
    '                    <div>\n' +
    '                        <img src="" alt="">\n' +
    '                        <div class="speaker-topic-import-icon"></div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div class="speaker-detail speaker-intro-row">\n' +
    '                    <div class="speaker-detail-introduction">\n' +
    '                        <div class="speaker-name"></div>\n' +
    '                        <div class="speaker-title"></div>\n' +
    '                    </div>\n' +
    '                    <div class="speaker-detail-information"></div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="flexbox-row">\n' +
    '                <div class="speaker-topic speaker-intro-row">\n' +
    '                 <div class="topic-abstract">' +
    '                    <div class="speaker-topic-title">出品主题</div>\n' +
    '                    <div class="speaker-topic-content"></div>\n' +
    '                 </div>' +
    '                </div>\n' +
    '                <div class="speaker-topic-detail flexbox-item grid-grey">\n' +
    '                 <div class="speaker-detail-wrapper">' +
    '                    <p class="speaker-topic-content-detail"></p>\n' +
    '                 </div>' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '    </div>');


  producers.forEach(function(producer, index) {
    var producerWrapper = templateHTMl.clone();
    if( index % 2 === 1) {
      $('.speaker-info .speaker-topic', producerWrapper).css({'background-color': 'red'});
      $('.speaker-topic-import-icon', producerWrapper).css({'border-bottom': '10px solid red'});
    }
    $('.speaker-info .speaker-img img', producerWrapper).attr('src', producer['producer-img']).attr('alt', producer['producer-name']);
    $('.speaker-info .speaker-detail .speaker-detail-introduction .speaker-name', producerWrapper).append(producer['producer-name']);
    $('.speaker-info .speaker-detail .speaker-detail-introduction .speaker-title', producerWrapper).append(producer['producer-introduction']);
    $('.speaker-detail .speaker-detail-information', producerWrapper).append(producer['producer-information']);

    $('.speaker-info .speaker-topic .speaker-topic-content', producerWrapper).append(producer['producer-topic']);
    $('.speaker-info .speaker-topic-detail .speaker-topic-content-detail', producerWrapper).append(producer['topic-information']);
    $('#producer-list').append(producerWrapper);
  })
});