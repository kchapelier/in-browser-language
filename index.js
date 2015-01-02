"use strict";

var uniq = require('uniq'),
    navigator = window.navigator || window.clientInformation || {};

var list = function () {
    var languages = [].concat(
        navigator.language,
        navigator.languages,
        navigator.browserLanguage,
        navigator.userLanguage
    ).filter(function (language) {
        return language;
    }).map(function (language) {
        return language.replace(/-.*/,'').toLowerCase();
    });

    return uniq(languages, null, true);
};

var pick = function (proposedLanguages, defaultLanguage) {
    var languages = list(),
        result = null,
        i;

    defaultLanguage = defaultLanguage || null;

    for (i = 0; i < languages.length && result === null; i++) {
        if (proposedLanguages.indexOf(languages[i]) !== -1) {
            result = languages[i];
        }
    }

    if(result === null) {
        result = defaultLanguage;
    }

    return result;
};

module.exports = {
    list : list,
    pick : pick
};
