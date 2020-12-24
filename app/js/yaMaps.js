//

const $map = document.getElementById('map') || null

if ($map) {
    ymaps.ready(init)
}

function init() {
    const myMap = new ymaps.Map('map', {
        center: [55.788001, 37.63437],
        zoom: 19,
    })

    const placemark = new ymaps.Placemark(
        [55.788001, 37.63518],
        {
            balloonContent:
                '<a target="_blank" href="https://yandex.ru/maps/-/CCUIIHd8KB">Персона Lab BIA. Проспект Мира 70</a>',
        },
        {
            preset: 'islands#blueCircleDotIconWithCaption',
            iconColor: 'pink',
        },
    )

    myMap.geoObjects.add(placemark)

    placemark.balloon.open()
}
