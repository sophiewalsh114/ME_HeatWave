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
var lyr_RGBClip_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "RGBClip",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/RGBClip_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-7824994.719087, 5409939.341322, -7818288.958717, 5415359.301180]
                            })
                        });
var format_RVIClipped_2 = new ol.format.GeoJSON();
var features_RVIClipped_2 = format_RVIClipped_2.readFeatures(json_RVIClipped_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RVIClipped_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RVIClipped_2.addFeatures(features_RVIClipped_2);
var lyr_RVIClipped_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RVIClipped_2, 
                style: style_RVIClipped_2,
                popuplayertitle: "RVIClipped",
                interactive: true,
    title: 'RVIClipped<br />\
    <img src="styles/legend/RVIClipped_2_0.png" /> 0 - 3<br />\
    <img src="styles/legend/RVIClipped_2_1.png" /> 3 - 3<br />\
    <img src="styles/legend/RVIClipped_2_2.png" /> 3 - 4<br />\
    <img src="styles/legend/RVIClipped_2_3.png" /> 4 - 5<br />\
    <img src="styles/legend/RVIClipped_2_4.png" /> 5 - 6<br />\
    <img src="styles/legend/RVIClipped_2_5.png" /> 6 - 7<br />\
    <img src="styles/legend/RVIClipped_2_6.png" /> 7 - 8<br />\
    <img src="styles/legend/RVIClipped_2_7.png" /> 8 - 11<br />\
    <img src="styles/legend/RVIClipped_2_8.png" /> 11 - 15<br />\
    <img src="styles/legend/RVIClipped_2_9.png" /> 15 - 92<br />'
        });
var format_TempClipped_3 = new ol.format.GeoJSON();
var features_TempClipped_3 = format_TempClipped_3.readFeatures(json_TempClipped_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TempClipped_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TempClipped_3.addFeatures(features_TempClipped_3);
var lyr_TempClipped_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TempClipped_3, 
                style: style_TempClipped_3,
                popuplayertitle: "TempClipped",
                interactive: true,
    title: 'TempClipped<br />\
    <img src="styles/legend/TempClipped_3_0.png" /> 18 - 21<br />\
    <img src="styles/legend/TempClipped_3_1.png" /> 21 - 22<br />\
    <img src="styles/legend/TempClipped_3_2.png" /> 22 - 23<br />\
    <img src="styles/legend/TempClipped_3_3.png" /> 23 - 23<br />\
    <img src="styles/legend/TempClipped_3_4.png" /> 23 - 24<br />\
    <img src="styles/legend/TempClipped_3_5.png" /> 24 - 25<br />\
    <img src="styles/legend/TempClipped_3_6.png" /> 25 - 26<br />\
    <img src="styles/legend/TempClipped_3_7.png" /> 26 - 27<br />\
    <img src="styles/legend/TempClipped_3_8.png" /> 27 - 29<br />\
    <img src="styles/legend/TempClipped_3_9.png" /> 29 - 34<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_RGBClip_1.setVisible(true);lyr_RVIClipped_2.setVisible(true);lyr_TempClipped_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_RGBClip_1,lyr_RVIClipped_2,lyr_TempClipped_3];
lyr_RVIClipped_2.set('fieldAliases', {'RVI': 'RVI', });
lyr_TempClipped_3.set('fieldAliases', {'Temperatur': 'Temperatur', });
lyr_RVIClipped_2.set('fieldImages', {'RVI': 'Range', });
lyr_TempClipped_3.set('fieldImages', {'Temperatur': 'Range', });
lyr_RVIClipped_2.set('fieldLabels', {'RVI': 'no label', });
lyr_TempClipped_3.set('fieldLabels', {'Temperatur': 'no label', });
lyr_TempClipped_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});