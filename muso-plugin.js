// declaring a namespace for the plugin
var MUSO = MUSO || {};

MUSO = {
    notice: {
      'fi': 'HUOM!',
      'sv': 'OBS!',
      'en': 'NB:'
    },
    warning: {
        'fi': ['Musiikin ontologia MUSO on yhdistetty Yleiseen suomalaiseen ontologiaan YSOon. Uusia musiikkitermejä voi ehdottaa', 'YSOn ehdotusjärjestelmällä', '. Tässä ontologiassa olevia käsitteitä ei enää päivitetä. Musiikkiaineiston kuvailussa käytetään YSOn termejä.']
    },
    link: "http://ehdotus.finto.fi/#!/list#%2Fnew",
    renderWarning: function(params) {q
        $('.content').prepend(Handlebars.compile($('#muso-template').html())({
            'warning-first': this.warning[lang][0], 
            'warning-middle': this.warning[lang][1], 
            'warning-last': this.warning[lang][2],
            'warning-link': this.link
        }));
    },
};

$(function() {
    window.musoWarning = function(params) {
        if (params.page === 'page' && vocab == 'muso' && (params.uri  || $('#vocab-info').length)) {
            MUSO.renderWarning(params);
        }
    };
});

