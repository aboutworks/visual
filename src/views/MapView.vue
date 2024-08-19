<template>
  <div class="point" @click="gotoPoint(114.75903000407483, 25.775611337902646)">Go to Beijing</div>
  <div class="point2">{{ points }}</div>
  <div ref="mapContainer" class="map-container"></div>
</template>

<script>
import { onMounted, ref } from "vue";
import "ol/ol.css";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import ImageLayer from 'ol/layer/Image';
import ImageStatic from 'ol/source/ImageStatic';
import { fromLonLat, toLonLat } from "ol/proj";

// 确保引入正确的 TIFF 文件
import imageUrl from '@/assets/map.png';

export default {
  name: "OpenLayerMap",
  setup() {
    const mapContainer = ref(null);
    const map = ref(null);
    const points = ref('Get the Point');

    onMounted(() => {
    //   // 加载GeoTIFF图像
    //   const tiffLayer = new ImageLayer({
    //     source: new GeoTIFF({
    //       sources: [{
    //         url: mapTiff,
    //         // 如果需要可以添加其他配置
    //       }],
    //     }),
    //   });

	// 转换后的图像文件 URL

const imageLayer = new ImageLayer({
  source: new ImageStatic({
    url: imageUrl,
    projection: 'EPSG:4326', // 设置适当的投影
    imageExtent: [114.780300063, 25.764423600, 114.755629523, 25.778274795,  ], // 根据实际图像范围设置
  }),
});

      // 初始化地图
      map.value = new Map({
        target: mapContainer.value,
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
		  imageLayer, // 添加GeoTIFF图层
        ],
        view: new View({
          center: fromLonLat([0, 0]), // 根据需要设置地图的中心点
          zoom: 2,
        }),
      });

      // 添加点击监听
      map.value.on('click', (event) => {
        const clickedCoordinate = event.coordinate;
        const clickedLonLat = toLonLat(clickedCoordinate);
        console.log(`Clicked at longitude: ${clickedLonLat[0]}, latitude: ${clickedLonLat[1]}`);
        points.value = `Clicked at longitude: ${clickedLonLat[0]}, latitude: ${clickedLonLat[1]}`;
      });
    });

    // 定义 gotoPoint 函数
    const gotoPoint = (longitude, latitude) => {
      if (map.value) {
        const view = map.value.getView();
        const coordinates = fromLonLat([longitude, latitude]);
        view.setCenter(coordinates);
        view.setZoom(18); // 可选: 设置放大级别，例如8
      }
    };

    return {
      mapContainer,
      gotoPoint,
      points,
    };
  },
};
</script>

<style>
.map-container {
  width: 100vw;
  height: 100vh;
}
.point {
  position: absolute;
  top: 2rem;
  left: 1rem;
  z-index: 10000;
}
.point2 {
  position: absolute;
  top: 5rem;
  left: 1rem;
  z-index: 10000;
}
</style>