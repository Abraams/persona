//

const $map = document.getElementById('map') || null

if ($map) {
    ymaps.ready(init)
}

function init() {
    const myMap = new ymaps.Map('map', {
        center: [55.787851, 37.635028],
        zoom: 18,
    })

    myMap.geoObjects.add(
        new ymaps.Placemark(
            [55.787864, 37.63519],
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
