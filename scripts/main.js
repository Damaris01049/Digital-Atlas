document.addEventListener("DOMContentLoaded", function() {
    loadMap('kitengela-map', { lat: -1.4837, lng: 36.8219 });
    loadMap('mankweng-map', { lat: -23.9045, lng: 29.4689 });
    loadMap('rintheim-map', { lat: 48.1512, lng: 11.5820 });

    loadCharts('kitengela-charts', 'data/kitengela.json');
    loadCharts('mankweng-charts', 'data/mankeweng.json');
    loadCharts('rintheim-charts', 'data/rntheim.json');
});
