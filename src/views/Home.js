import findData from '../helpers/findData'
import Cigg from './Cigg'

const Home = {
  render: async (data, article) => {
    let options = ''
    const sortedData = []
    data.forEach((element) => {
      sortedData.push(element.name)
    })
    sortedData.sort()
    sortedData.forEach((element) => {
      options += `<option value="${element}"></option>`
    })

    return `
    <div id="main" role="main">
      <header>
        <h1>${article.get('hero_1_title')}</h1>
        <div class='author'>${article.get('article-info_1_byline')}</div>
        <div class='article_date'>${article.get('article-info_1_date')}</div>
      </header>
      <article>        
        <img src="${article.get(
          'hero_1_image'
        )}" alt="Main Image" class="main_figure">        
        <p>${article.get('p_1_value')}</p>
        <p>${article.get('p_2_value')}</p>
        <p>${article.get('p_3_value')}</p>
        <p>${article.get('p_4_value')}</p>
        <p>${article.get('p_5_value')}</p>

        <div id="mainForm">
          <label class='tab_title'>
            ${article.get('compare-tabs_1_title')}:
            <input id="optionCity" type="text" list="datalist">
          </label>
          <datalist id="datalist">
          ${options}
          </datalist>
          <div id='graphContainer'></div>
          <div class='methodology'>${article.get('p_6_value')} ${article.get(
      'compare-tabs_1_method'
    )}</div>
        </div>

        <p>${article.get('p_7_value')}</p>
        <p>${article.get('p_8_value')}</p>
        <p>${article.get('p_9_value')}</p>
        <p>${article.get('p_10_value')}</p>

      </article>
    </div>
    `
  },
  after_render: async (data) => {
    document
      .getElementById('optionCity')
      .addEventListener('change', async () => {
        document.getElementById('overlay').style.display = 'flex'
        window.scrollTo(0, document.getElementById('mainForm').offsetTop)
        const selectedObj = findData(
          document.getElementById('optionCity').value,
          data
        )
        if (selectedObj) {
          document.getElementById(
            'graphContainer'
          ).innerHTML = await Cigg.render(selectedObj)
        }
        document.getElementById('overlay').style.display = 'none'
      })
  },
}

export default Home
