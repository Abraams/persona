// --- БЛОК ГЛАВНОГО МЕНЮ ---
const $header = document.querySelector('.header')
const $menuToggler = document.querySelector('.header__toggler')
const $exitMenuElems = document.querySelectorAll('[data-menu-exit]')

const fixMenuToggler = status => {
    $header.classList[status ? 'add' : 'remove']('_fixed')
}

const menuToggler = (status = true) => {
    const isMenuOpen = status ? $header.classList.contains('_open') : true
    $header.classList[!isMenuOpen ? 'add' : 'remove']('_open')
}

const checkMenuWindowWidth = () => {
    if (window.screen.width <= 1201) {
        fixMenuToggler(false)

        $menuToggler.addEventListener('click', menuToggler)
        $header.addEventListener('click', ({ target }) => {
            const isMenuExitElem = !!target.closest('[data-menu-exit]')
            if (isMenuExitElem) menuToggler(false)
        })
    } else {
        const winScroll = HTML.scrollTop
        const isMenuFixed = $header.classList.contains('_fixed')

        if (winScroll >= 500 && !isMenuFixed) {
            fixMenuToggler(true)
        } else if (winScroll < 500 && isMenuFixed) {
            fixMenuToggler(false)
        }
    }
}

// Инициализация
const initMenuObserver = () => {
    checkMenuWindowWidth()
    window.addEventListener('scroll', checkMenuWindowWidth)
}
