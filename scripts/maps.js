function loadMap(elementId, coordinates) {
    const viewer = new Cesium.Viewer(elementId, {
        scene3DOnly: true,
        selectionIndicator: false,
        baseLayerPicker: false
    });

    viewer.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(coordinates.lng, coordinates.lat, 15000.0)
    });
}
