define(["lodash"], function(_) {

    // This module gets the browser language
    // These window.navigator contain language information
    // 1. languages -> Array of preferred languages (eg ["en-US", "zh-CN", "ja-JP"]) Firefox^32, Chrome^32
    // 2. language  -> Preferred language as String (eg "en-US") Firefox^5, IE^11, Safari,
    //                 Chrome sends Browser UI language
    // 3. browserLanguage -> UI Language of IE
    // 4. userLanguage    -> Language of Windows Regional Options
    // 5. systemLanguage  -> UI Language of Windows
    var browserLanguagePropertyKeys = ['languages', 'language', 'browserLanguage', 'userLanguage', 'systemLanguage'];

    var availableLanguages = ['de', 'en'];

    var detectedLocale = _.chain(window.navigator)
        .pick(browserLanguagePropertyKeys) //Get only language properties
        .values() //Get values of the properties
        .flatten() //flatten all arrays
        .compact() //Remove undefined values
        .map(function(x) {
            return x.substr(0, 2); //Shorten strings to use two chars (en-US -> en)
        })
        .find(function(x) {
            return _.includes(availableLanguages, x); //Returns first language matched in available languages
        })
        .value();

    var locale = detectedLocale || 'en'; //If no locale is detected, fallback to 'en'
    return locale;
});
