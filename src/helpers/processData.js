const processData = (jsonRawData) => {
  const data = new Map()
  let idx = 1
  Object.keys(jsonRawData).forEach((key) => {
    if (key === `compare-tabs_1_city_${idx}_name`) {
      data.set(idx, { name: jsonRawData[key].trim() })
      idx += 1
    }
  })

  idx = 1
  Object.keys(jsonRawData).forEach((key) => {
    if (key === `compare-tabs_1_city_${idx}_aqi`) {
      data.set(idx, { aqi: jsonRawData[key].trim(), ...data.get(idx) })
      idx += 1
    }
  })

  idx = 1
  Object.keys(jsonRawData).forEach((key) => {
    if (key === `compare-tabs_1_city_${idx}_cigg`) {
      data.set(idx, { cigg: Number(jsonRawData[key].trim()), ...data.get(idx) })
      idx += 1
    }
  })

  return data
}

export default processData
