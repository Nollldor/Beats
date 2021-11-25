

;(function() {
  ymaps.ready(function () {
    //инициализация карты с центром и масштабом
    var myMap = new ymaps.Map("map", {
      center: [55.75, 37.60],
      zoom: 14,
      controls: []
    });


    //координаты меток
    var coords = [
      [55.758163, 37.623262],
      [55.750361, 37.603634],
      [55.743380, 37.581247],
      [55.758831, 37.583052]
    ];
    
    // параметры меток
    var myCollection = new ymaps.GeoObjectCollection({}, {
      draggable: false,
      iconLayout: 'default#image',
      iconImageHref: './img/map__mark.png',
      iconImageSize: [58, 73],
      iconImageOffset: [-35, -52]
    });
  
    for (var i = 0; i < coords.length; i++) {
      myCollection.add(new ymaps.Placemark(coords[i]));
    }
  
    myMap.geoObjects.add(myCollection);

    // Выключим масштабирование колесом мыши
    myMap.behaviors.disable('scrollZoom');
    // Выключим масштабирование двойным кликом мыши
    myMap.behaviors.disable('dblClickZoom');
});
})()