
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
    SPEAKER_INFO: '../en/speaker-info.html',
    WORKSHOP: '../en/topic-gathering.html',
    TOPIC_GATHERING: '../en/topic-gathering.html',
    LOOK_BACK: '../en/look-back-2017.html',
    BOOKING_TICKETS: '../en/booking-tickets.html'
  },
  [LANGUAGE.ZH]: {
    CONFERENCE: '../zh/index.html#agenda',
    SPEAKER_INFO: '../zh/speaker-info.html',
    WORKSHOP: '../zh/topic-gathering.html',
    TOPIC_GATHERING: '../zh/topic-gathering.html',
    LOOK_BACK: '../zh/look-back-2017.html',
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
