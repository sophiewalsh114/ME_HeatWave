var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_RVISimpleRatioVegetationIndexunitless_1 = new ol.format.GeoJSON();
var features_RVISimpleRatioVegetationIndexunitless_1 = format_RVISimpleRatioVegetationIndexunitless_1.readFeatures(json_RVISimpleRatioVegetationIndexunitless_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RVISimpleRatioVegetationIndexunitless_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RVISimpleRatioVegetationIndexunitless_1.addFeatures(features_RVISimpleRatioVegetationIndexunitless_1);
var lyr_RVISimpleRatioVegetationIndexunitless_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RVISimpleRatioVegetationIndexunitless_1, 
                style: style_RVISimpleRatioVegetationIndexunitless_1,
                popuplayertitle: "RVI (Simple Ratio Vegetation Index, unitless)",
                interactive: true,
    title: 'RVI (Simple Ratio Vegetation Index, unitless)<br />\
    <img src="styles/legend/RVISimpleRatioVegetationIndexunitless_1_0.png" /> 0.0 - 0.0<br />\
    <img src="styles/legend/RVISimpleRatioVegetationIndexunitless_1_1.png" /> 0.9 - 1.1<br />\
    <img src="styles/legend/RVISimpleRatioVegetationIndexunitless_1_2.png" /> 1.1 - 4<br />\
    <img src="styles/legend/RVISimpleRatioVegetationIndexunitless_1_3.png" /> 4 - 6<br />\
    <img src="styles/legend/RVISimpleRatioVegetationIndexunitless_1_4.png" /> 6 - 8<br />\
    <img src="styles/legend/RVISimpleRatioVegetationIndexunitless_1_5.png" /> 8 - 11<br />\
    <img src="styles/legend/RVISimpleRatioVegetationIndexunitless_1_6.png" /> 11 - 15<br />\
    <img src="styles/legend/RVISimpleRatioVegetationIndexunitless_1_7.png" /> 15 - 21<br />\
    <img src="styles/legend/RVISimpleRatioVegetationIndexunitless_1_8.png" /> 21 - 31<br />\
    <img src="styles/legend/RVISimpleRatioVegetationIndexunitless_1_9.png" /> 31 - 44<br />\
    <img src="styles/legend/RVISimpleRatioVegetationIndexunitless_1_10.png" /> 44 - 64<br />\
    <img src="styles/legend/RVISimpleRatioVegetationIndexunitless_1_11.png" /> 64 - 17892<br />'
        });
var format_TemperatureCelsius_2 = new ol.format.GeoJSON();
var features_TemperatureCelsius_2 = format_TemperatureCelsius_2.readFeatures(json_TemperatureCelsius_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TemperatureCelsius_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TemperatureCelsius_2.addFeatures(features_TemperatureCelsius_2);
var lyr_TemperatureCelsius_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TemperatureCelsius_2, 
                style: style_TemperatureCelsius_2,
                popuplayertitle: "Temperature (Celsius)",
                interactive: false,
    title: 'Temperature (Celsius)<br />\
    <img src="styles/legend/TemperatureCelsius_2_0.png" /> 16 - 22<br />\
    <img src="styles/legend/TemperatureCelsius_2_1.png" /> 22 - 23<br />\
    <img src="styles/legend/TemperatureCelsius_2_2.png" /> 23 - 24<br />\
    <img src="styles/legend/TemperatureCelsius_2_3.png" /> 24 - 25<br />\
    <img src="styles/legend/TemperatureCelsius_2_4.png" /> 25 - 26<br />\
    <img src="styles/legend/TemperatureCelsius_2_5.png" /> 26 - 27<br />\
    <img src="styles/legend/TemperatureCelsius_2_6.png" /> 27 - 28<br />\
    <img src="styles/legend/TemperatureCelsius_2_7.png" /> 28 - 29<br />\
    <img src="styles/legend/TemperatureCelsius_2_8.png" /> 29 - 30<br />\
    <img src="styles/legend/TemperatureCelsius_2_9.png" /> 30 - 37<br />'
        });
var lyr_TrueColorComposite234_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "True Color Composite (2,3,4)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/TrueColorComposite234_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-7831629.082516, 5404665.005882, -7812606.414109, 5422281.546964]
                            })
                        });

lyr_OpenStreetMap_0.setVisible(true);lyr_RVISimpleRatioVegetationIndexunitless_1.setVisible(true);lyr_TemperatureCelsius_2.setVisible(false);lyr_TrueColorComposite234_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_RVISimpleRatioVegetationIndexunitless_1,lyr_TemperatureCelsius_2,lyr_TrueColorComposite234_3];
lyr_RVISimpleRatioVegetationIndexunitless_1.set('fieldAliases', {'RVI': 'RVI', });
lyr_TemperatureCelsius_2.set('fieldAliases', {'Temperatur': 'Temperatur', });
lyr_RVISimpleRatioVegetationIndexunitless_1.set('fieldImages', {'RVI': 'Range', });
lyr_TemperatureCelsius_2.set('fieldImages', {'Temperatur': 'Range', });
lyr_RVISimpleRatioVegetationIndexunitless_1.set('fieldLabels', {'RVI': 'header label - visible with data', });
lyr_TemperatureCelsius_2.set('fieldLabels', {'Temperatur': 'header label - visible with data', });
lyr_TemperatureCelsius_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});