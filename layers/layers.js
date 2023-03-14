var wms_layers = [];

var lyr_ImagenSatlite_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "Imagen Satélite",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ImagenSatlite_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-7283871.934879, -1487806.491265, -7279528.161881, -1485124.927594]
                            })
                        });
var format_Estructuras_1 = new ol.format.GeoJSON();
var features_Estructuras_1 = format_Estructuras_1.readFeatures(json_Estructuras_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Estructuras_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Estructuras_1.addFeatures(features_Estructuras_1);
var lyr_Estructuras_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Estructuras_1, 
                style: style_Estructuras_1,
                interactive: true,
    title: 'Estructuras<br />\
    <img src="styles/legend/Estructuras_1_0.png" /> camellone<br />\
    <img src="styles/legend/Estructuras_1_1.png" /> Camino<br />\
    <img src="styles/legend/Estructuras_1_2.png" /> Canal<br />\
    <img src="styles/legend/Estructuras_1_3.png" /> Dique<br />\
    <img src="styles/legend/Estructuras_1_4.png" /> Hueco<br />\
    <img src="styles/legend/Estructuras_1_5.png" /> Montículo<br />\
    <img src="styles/legend/Estructuras_1_6.png" /> Plataforma<br />\
    <img src="styles/legend/Estructuras_1_7.png" /> Pozo<br />\
    <img src="styles/legend/Estructuras_1_8.png" /> Zanja<br />\
    <img src="styles/legend/Estructuras_1_9.png" /> <br />'
        });
var format_Lneasdetopografia10m_2 = new ol.format.GeoJSON();
var features_Lneasdetopografia10m_2 = format_Lneasdetopografia10m_2.readFeatures(json_Lneasdetopografia10m_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lneasdetopografia10m_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lneasdetopografia10m_2.addFeatures(features_Lneasdetopografia10m_2);
var lyr_Lneasdetopografia10m_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lneasdetopografia10m_2, 
                style: style_Lneasdetopografia10m_2,
                interactive: true,
                title: '<img src="styles/legend/Lneasdetopografia10m_2.png" /> Líneas de topografia (10m)'
            });

lyr_ImagenSatlite_0.setVisible(true);lyr_Estructuras_1.setVisible(true);lyr_Lneasdetopografia10m_2.setVisible(true);
var layersList = [lyr_ImagenSatlite_0,lyr_Estructuras_1,lyr_Lneasdetopografia10m_2];
lyr_Estructuras_1.set('fieldAliases', {'Id': 'Id', 'feature': 'feature', });
lyr_Lneasdetopografia10m_2.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Contour': 'Contour', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'InLine_FID': 'InLine_FID', 'SmoLnFlag': 'SmoLnFlag', });
lyr_Estructuras_1.set('fieldImages', {'Id': 'Range', 'feature': 'TextEdit', });
lyr_Lneasdetopografia10m_2.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'Contour': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'InLine_FID': 'TextEdit', 'SmoLnFlag': 'Range', });
lyr_Estructuras_1.set('fieldLabels', {'Id': 'no label', 'feature': 'no label', });
lyr_Lneasdetopografia10m_2.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'Id': 'no label', 'Contour': 'header label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'InLine_FID': 'no label', 'SmoLnFlag': 'no label', });
lyr_Lneasdetopografia10m_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});