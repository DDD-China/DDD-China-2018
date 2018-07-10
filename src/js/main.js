
var NAV_ITEMS = {
    CONFERENCE: {
      itemIndex: 1,
      title: 'CONFERENCE'
    },
    SPEAKER_INFO: {
      itemIndex: 2,
      title: 'SPEAKER_INFO'
    },
    WORKSHOP: {
      itemIndex: 3,
      title: 'WORKSHOP'
    },
    TOPIC_GATHERING: {
      itemIndex: 4,
      title: 'WORKSHOP'
    },
    LOOK_BACK: {
      itemIndex: 5,
      title: 'LOOK_BACK'
    },
    TRANSLATION: {
      itemIndex: 6,
      title: 'TRANSLATION'
    },
    BOOKING_TICKETS: {
      itemIndex: null,
      title: 'BOOKING_TICKETS'
    }
}

var LANGUAGE = {
  ZH: 'ZH',
  EN: 'EN'
}
var TRANSLATION_LOCATIONS = {
  [LANGUAGE.EN]: {
    CONFERENCE: '../en/index.html#agenda',
    SPEAKER_INFO: '../en/topic-gathering.html',
    WORKSHOP: '../en/topic-gathering.html',
    TOPIC_GATHERING: '../en/topic-gathering.html',
    LOOK_BACK: '../en/look-back.html',
    BOOKING_TICKETS: '../en/booking-tickets.html'
  },
  [LANGUAGE.ZH]: {
    CONFERENCE: '../zh/index.html#agenda',
    SPEAKER_INFO: '../zh/topic-gathering.html',
    WORKSHOP: '../zh/topic-gathering.html',
    TOPIC_GATHERING: '../zh/topic-gathering.html',
    LOOK_BACK: '../zh/look-back.html',
    BOOKING_TICKETS: '../zh/booking-tickets.html'
  }
}

function changeBannerSize() {
    var window_height = $(window).height();
    $('.top-banner').css('height', window_height - 43);
}

function focusOn(menuItem, targetTranslateLanguage) {
  var locations = targetTranslateLanguage ? TRANSLATION_LOCATIONS[targetTranslateLanguage] : TRANSLATION_LOCATIONS[LANGUAGE.EN]
  $('.navbar .menu-item').removeClass('menu-item-selected');
  if (menuItem.itemIndex) {
    $('.navbar .menu-item:nth-child(' + menuItem.itemIndex + ')').addClass('menu-item-selected');
  }
  $('.navbar .menu-item:nth-child(' + NAV_ITEMS.TRANSLATION.itemIndex + ') a').attr('href', locations[menuItem.title])
}