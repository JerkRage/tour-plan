$(document).ready(function () {
  ymaps.ready(init);

  function init() {
    var myMap = new ymaps.Map("map-hotel", {
        center: [7.890703, 98.294772],
        zoom: 15,
      }, {
        searchControlProvider: 'yandex#search'
      }),
      HintLayout = ymaps.templateLayoutFactory.createClass("<div>" +
        "<b>{{ properties.object }}</b><br>", {
          getShape: function () {
            var el = this.getElement(),
              result = null;
            if (el) {
              var firstChild = el.firstChild;
              result = new ymaps.shape.Rectangle(
                new ymaps.geometry.pixel.Rectangle([
                  [0, 0],
                  [firstChild.offsetWidth, firstChild.offsetHeight]
                ])
              );
            }
            return result;
          }
        }
      );
    var myPlacemark = new ymaps.Placemark([7.890703, 98.294772], {
      object: "GRAND HILTON HOTEL"
    }, {
      hintLayout: HintLayout
    });
    myMap.geoObjects.add(myPlacemark);
  };
});