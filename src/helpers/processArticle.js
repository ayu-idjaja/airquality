const processArticle = (jsonRawData) => {
  const article = new Map()

  Object.keys(jsonRawData).forEach((key) => {
    if (key.indexOf('compare-tabs_1_city_') <= -1) {
      article.set(key, jsonRawData[key])
    }
  })

  return article
}

export default processArticle
