import './index.css'
import processData from './helpers/processData'
import checkUserLanguage from './helpers/checkUserLanguage'
import Home from './views/Home'
import Navbar from './views/Navbar'
import Footer from './views/Footer'
import processArticle from './helpers/processArticle'

const jsonRawData = checkUserLanguage()
const data = processData(jsonRawData)
const article = processArticle(jsonRawData)

const router = async () => {
  // Lazy load view element:
  const header = null || document.getElementById('header_container')
  const content = null || document.getElementById('app')
  const footer = null || document.getElementById('footer_container')

  header.innerHTML = await Navbar.render()
  await Navbar.after_render()
  footer.innerHTML = await Footer.render()
  content.innerHTML = await Home.render(data, article)
  await Home.after_render(data)
}

// Listen on hash change:
window.addEventListener('hashchange', router)

// Listen on page load:
window.addEventListener('load', router)
