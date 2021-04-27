const Navbar = {
  render: async () => {
    const currentLanguage = localStorage.getItem('CURRENT_LANGUAGE')
    return `
    <nav>
      <img class="main_icon" alt="BBC Logo" src="img/bbc.png" />
      <div class="language_group">
        <div class="language_icon_group">
          <button
            id="languageHI"
            aria-label="Pick Hindi Language"
            class="${
              currentLanguage === 'en'
                ? 'language_icon not_active'
                : 'language_icon'
            }"            
            style="background-image: url(img/hi.png)"
          ><span class="hidden">Pick Hindi Language</span></button>
          <button
            id="languageEN"
            aria-label="Pick English Language"
            class="${
              currentLanguage === 'hi'
                ? 'language_icon not_active'
                : 'language_icon'
            }"
            style="background-image: url(img/en.png)"
          ><span class="hidden">Pick English Language</span></button>
        </div>
        <div id='currentLanguageLabel' class="language_info">Current Language: ${
          currentLanguage === 'hi' ? 'Hindi' : 'English'
        }</div>
      </div>
    </nav>
    <div class="news_header">NEWS</div>
    `
  },
  after_render: async () => {
    document.getElementById('languageHI').addEventListener('click', () => {
      // for handling click
      document.getElementById('languageHI').className = 'language_icon'
      document.getElementById('languageEN').className =
        'language_icon not_active'
      document.getElementById('currentLanguageLabel').innerHTML =
        'Current Language: HI'
      localStorage.setItem('CURRENT_LANGUAGE', 'hi')
      window.location.reload()
    })
    document.getElementById('languageHI').addEventListener('keydown', (e) => {
      // for handling pressing enter for users without mouse
      if (e.key === 'Enter') {
        document.getElementById('languageHI').className = 'language_icon'
        document.getElementById('languageEN').className =
          'language_icon not_active'
        document.getElementById('currentLanguageLabel').innerHTML =
          'Current Language: HI'
        localStorage.setItem('CURRENT_LANGUAGE', 'hi')
        window.location.reload()
      }
    })
    document.getElementById('languageEN').addEventListener('click', () => {
      document.getElementById('languageEN').className = 'language_icon'
      document.getElementById('languageHI').className =
        'language_icon not_active'
      document.getElementById('currentLanguageLabel').innerHTML =
        'Current Language: EN'
      localStorage.setItem('CURRENT_LANGUAGE', 'en')
      window.location.reload()
    })
    document.getElementById('languageEN').addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        document.getElementById('languageEN').className = 'language_icon'
        document.getElementById('languageHI').className =
          'language_icon not_active'
        document.getElementById('currentLanguageLabel').innerHTML =
          'Current Language: EN'
        localStorage.setItem('CURRENT_LANGUAGE', 'en')
        window.location.reload()
      }
    })
  },
}

export default Navbar
