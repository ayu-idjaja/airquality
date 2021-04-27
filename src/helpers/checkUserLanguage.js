import * as jsonRawDataHI from '../data/hindi.json'
import * as jsonRawDataEN from '../data/english.json'

const checkUserLanguage = () => {
  if (localStorage.getItem('CURRENT_LANGUAGE')) {
    return localStorage.getItem('CURRENT_LANGUAGE') === 'hi'
      ? jsonRawDataHI
      : jsonRawDataEN
  }

  let jsonRawData = jsonRawDataEN

  let lang = window.navigator.languages ? window.navigator.languages[0] : null
  lang =
    lang ||
    window.navigator.language ||
    window.navigator.browserLanguage ||
    window.navigator.userLanguage

  let shortLang = lang
  if (shortLang.indexOf('-') !== -1) {
    const { 0: a } = shortLang.split('-')
    shortLang = a
  }

  if (shortLang.indexOf('_') !== -1) {
    const { 0: a } = shortLang.split('_')
    shortLang = a
  }

  if (shortLang === 'hi') {
    jsonRawData = jsonRawDataHI
  }
  localStorage.setItem('CURRENT_LANGUAGE', shortLang)
  return jsonRawData
}

export default checkUserLanguage
