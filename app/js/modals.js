//
const $modals = document.querySelectorAll('.modal')
const modals = [...$modals]

let $openModal

const findModalById = id => {
    const modal = modals.find(modal => modal.id === id)
    return modal
}

const findModalByClass = className => {
    const modal = modals.find(modal => modal.classList.contains(className))
    return modal
}

const modalToggler = ($el, status) => {
    if (!$el) {
        return false
    }
    if ($openModal && $openModal.id !== $el.id) {
        $openModal.classList.remove('_open')
    }

    $el.classList[status ? 'add' : 'remove']('_open')
    $openModal = status ? $el : undefined
}

const openModal = id => {
    modalToggler(findModalById(id), true)
}

const getRandomNumber = (min, max) => {
    return Math.random() * (max - min) + min
}

const initModal = () => {
    setTimeout(() => {
        openModal('promo-modal-1')
    }, getRandomNumber(10, 30) * 1000)

    modals.forEach(modal => {
        modal.addEventListener('click', ({ target }) => {
            const isCloseModalElem = !!target.closest('[data-modal-close]')
            if (!isCloseModalElem) return
            modalToggler($openModal, false)
        })
    })

    HTML.addEventListener('click', ({ target }) => {
        const targetClosestButton = target.closest('.btn[data-open-modal]')
        const isOpenModalButton = !!targetClosestButton

        if (isOpenModalButton) {
            openModal(targetClosestButton.dataset.openModal)
        }
    })
}
