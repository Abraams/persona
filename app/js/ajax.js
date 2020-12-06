//
const $forms = document.querySelectorAll('form')
const forms = [...$forms]

const findFormById = id => {
    const form = document.getElementById(id)
    if (!!form) {
        return form
    } else {
        throw new Error('Форма с таким id не найдена')
    }
}

const submitForm = e => {
    e.preventDefault()

    try {
        const formData = new FormData(findFormById(e.target.id))

        fetch('./mail.php', {
            method: 'POST',
            body: formData,
        }).then(response => console.log(response))

        e.target.reset()
    } catch (error) {
        throw error
    }
}

const initFormsHadler = () => {
    forms.forEach(form => {
        form.addEventListener('submit', submitForm)
    })
}

initFormsHadler()
