const Cigg = {
  render: async (obj) => {
    const numOfCigs = obj.cigg
    const pmaDesc = obj.aqi
    let ciggFigures = '<div class="cigg_container">'
    for (let i = 0; i < numOfCigs; i += 1) {
      ciggFigures +=
        '<img class="cigg_figures" src="./img/cigarette_icon.png" >'
    }
    ciggFigures += '</div>'
    return `<div class="graph">${ciggFigures}<div class="info_container">${numOfCigs} cigarette(s)<br /> ${pmaDesc}</div></div>`
  },
}

export default Cigg
