
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
      title: 'TOPIC_GATHERING'
    },
    LOOK_BACK_2018: {
      itemIndex: 5,
      title: 'LOOK_BACK_2018'
    },
    LOOK_BACK_2017: {
      itemIndex: 6,
      title: 'LOOK_BACK_2017'
    },
    TRANSLATION: {
      itemIndex: 7,
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
    CONFERENCE: '../en/index.html',
    SPEAKER_INFO: '../en/speaker-info.html',
    WORKSHOP: '../en/topic-gathering.html',
    TOPIC_GATHERING: '../en/topic-gathering.html',
    LOOK_BACK_2018: '../en/look-back-2018.html',
    LOOK_BACK_2017: '../en/look-back-2017.html',
    BOOKING_TICKETS: '../en/booking-tickets.html'
  },
  [LANGUAGE.ZH]: {
    CONFERENCE: '../zh/index.html',
    SPEAKER_INFO: '../zh/speaker-info.html',
    WORKSHOP: '../zh/topic-gathering.html',
    TOPIC_GATHERING: '../zh/topic-gathering.html',
    LOOK_BACK_2018: '../zh/look-back-2018.html',
    LOOK_BACK_2017: '../zh/look-back-2017.html',
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
  console.log('translation message: ', locations[menuItem.title], menuItem);
  $('.navbar .menu-item:nth-child(' + NAV_ITEMS.TRANSLATION.itemIndex + ') a').attr('href', locations[menuItem.title])
}
