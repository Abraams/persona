//

const $map = document.getElementById('map') || null

if ($map) {
    ymaps.ready(init)
}

function init() {
    const myMap = new ymaps.Map('map', {
        center: [55.788156, 37.634706],
        zoom: 17,
    })

    myMap.geoObjects.add(
        new ymaps.Placemark(
            [55.78812, 37.635323],
            {
                balloonContent: 'Persona BIA. Проспект Мира, 70',
            },
            {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconColor: 'red',
            },
        ),
    )
}
