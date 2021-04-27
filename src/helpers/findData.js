const findData = (selectedCity, data) => {
  if (!selectedCity || selectedCity === '') {
    return null
  }
  let returnVal = null
  data.forEach((value) => {
    if (value.name === selectedCity) {
      returnVal = value
    }
  })
  return returnVal
}

export default findData
