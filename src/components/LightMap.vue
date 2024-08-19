<template>
	<div ref="threejsContainer" class="threejsContainer"></div>
</template>

<script>
import * as THREE from 'three';

export default {
	name: 'TerrainMap',
	mounted() {
		this.initThreeJS();
		this.addResizeListener();
	},

	beforeUnmount() {
		if (this.resizeObserver) {
			this.resizeObserver.disconnect();
		}
	},
	methods: {
		initThreeJS() {
			// 创建场景
			this.scene = new THREE.Scene();

			// 创建相机
			this.camera = new THREE.PerspectiveCamera(
				75,
				this.$refs.threejsContainer.clientWidth / this.$refs.threejsContainer.clientHeight,
				0.1,
				1000
			);
			this.camera.position.z = 50;

			// 创建渲染器
			this.renderer = new THREE.WebGLRenderer();
			this.renderer.setSize(this.$refs.threejsContainer.clientWidth, this.$refs.threejsContainer.clientHeight);
			this.renderer.setClearColor(0x87ceeb); // 背景色为天蓝色
			this.$refs.threejsContainer.appendChild(this.renderer.domElement);

			// 创建地形
			this.createTerrain();

			// 渲染循环
			this.animate();
		},
		createTerrain() {
			// 创建地形几何体
			const width = 100;
			const height = 100;
			const segments = 256;
			const geometry = new THREE.PlaneGeometry(width, height, segments, segments);

			// 加载高度图并调整顶点
			const textureLoader = new THREE.TextureLoader();
			textureLoader.load(require('@/assets/heightmap.png'), (texture) => {
				const size = segments + 1; // 与几何体顶点数一致
				// const data = new Uint8Array(size * size);
				const canvas = document.createElement('canvas');
				const context = canvas.getContext('2d');
				canvas.width = size;
				canvas.height = size;
				context.drawImage(texture.image, 0, 0);
				const imageData = context.getImageData(0, 0, size, size).data;

				for (let i = 0; i < size; i++) {
					for (let j = 0; j < size; j++) {
						const x = i + j * size;
						const heightValue = imageData[x * 4] / 255; // 取红色通道作为高度
						geometry.attributes.position.array[(i + j * size) * 3 + 2] = heightValue * 10; // 调整高度
					}
				}
				geometry.attributes.position.needsUpdate = true;
			});

			// 创建材质
			const material = new THREE.MeshLambertMaterial({ color: 0xaaaaaa });
			const terrain = new THREE.Mesh(geometry, material);
			terrain.rotation.x = -Math.PI / 2; // 使地形平铺
			this.scene.add(terrain);

			// 添加光源
			const light = new THREE.DirectionalLight(0xffffff, 1);
			light.position.set(10, 10, 10);
			this.scene.add(light);
		},
		animate() {
			requestAnimationFrame(this.animate.bind(this));
			this.renderer.render(this.scene, this.camera);
		},
		addResizeListener() {
			this.resizeObserver = new ResizeObserver(entries => {
				for (let entry of entries) {
					if (entry.target === this.$refs.threejsContainer) {
						const width = entry.contentRect.width;
						const height = entry.contentRect.height;
						this.camera.aspect = width / height;
						this.camera.updateProjectionMatrix();
						this.renderer.setSize(width, height);
					}
				}
			});

			this.resizeObserver.observe(this.$refs.threejsContainer);
		}
	}
};
</script>

<style scoped>
.threejsContainer {
	width: 100vw;
	height: 100vh;
}
</style>