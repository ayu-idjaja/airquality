import checkUserLanguage from '../helpers/checkUserLanguage'
import * as jsonRawDataHI from '../data/hindi.json'
import * as jsonRawDataEN from '../data/english.json'
import processData from '../helpers/processData'
import findData from '../helpers/findData'
import processArticle from '../helpers/processArticle'

test('check user language with local storage', () => {
  localStorage.setItem('CURRENT_LANGUAGE', 'hi')
  expect(checkUserLanguage()).toBe(jsonRawDataHI)
})

test('check default user language', () => {
  localStorage.setItem('CURRENT_LANGUAGE', null)
  expect(checkUserLanguage()).toBe(jsonRawDataEN)
})

const processedData = processData(jsonRawDataEN)

test('check process data', () => {
  expect(processedData.get(1).name).toBe('Ghaziabad')
  expect(processedData.get(1).aqi).toBe('283 PM2.5')
  expect(processedData.get(1).cigg).toBe(12)
})

test('check find data function', () => {
  const dataFound = findData('Delhi', processedData)
  const dataNotFound = findData('Invalid Name', processedData)

  expect(dataFound).toBeTruthy()
  expect(dataNotFound).toBeFalsy()
})

test('check process article', () => {
  const article = processArticle(jsonRawDataEN)
  expect(article.get('hero_1_title')).toBeTruthy()
})
