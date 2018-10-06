/**
 * i18n.js
 *
 * This will setup the i18n language files and locale data for your app.
 *
 *   IMPORTANT: This file is used by the internal build
 *   script `extract-intl`, and must use CommonJS module syntax
 *   You CANNOT use import/export in this file.
 */
const addLocaleData = require('react-intl').addLocaleData; //eslint-disable-line
const enLocaleData = require('react-intl/locale-data/en');
const deLocaleData = require('react-intl/locale-data/de');
const hiLocaleData = require('react-intl/locale-data/hi');
const arLocaleData = require('react-intl/locale-data/ar');

const enTranslationMessages = require('./translations/en.json');
const deTranslationMessages = require('./translations/de.json');
const hiTranslationMessages = require('./translations/hi.json');
const arTranslationMessages = require('./translations/ar.json');

addLocaleData(enLocaleData);
addLocaleData(deLocaleData);
addLocaleData(hiLocaleData);
addLocaleData(arLocaleData);

const DEFAULT_LOCALE = 'en';

// prettier-ignore
const appLocales = [
  'en',
  'de',
  'hi',
  'ar'
];

const formatTranslationMessages = (locale, messages) => {
  const defaultFormattedMessages =
    locale !== DEFAULT_LOCALE
      ? formatTranslationMessages(DEFAULT_LOCALE, enTranslationMessages)
      : {};
  const flattenFormattedMessages = (formattedMessages, key) => {
    const formattedMessage =
      !messages[key] && locale !== DEFAULT_LOCALE
        ? defaultFormattedMessages[key]
        : messages[key];
    return Object.assign(formattedMessages, { [key]: formattedMessage });
  };
  return Object.keys(messages).reduce(flattenFormattedMessages, {});
};

const translationMessages = {
  en: formatTranslationMessages('en', enTranslationMessages),
  de: formatTranslationMessages('de', deTranslationMessages),
  hi: formatTranslationMessages('hi', hiTranslationMessages),
  ar: formatTranslationMessages('ar', arTranslationMessages),
};

exports.appLocales = appLocales;
exports.formatTranslationMessages = formatTranslationMessages;
exports.translationMessages = translationMessages;
exports.DEFAULT_LOCALE = DEFAULT_LOCALE;
