<template>
	<div ref="threejsContainer" class="threejsContainer"></div>
</template>

<script>
import * as THREE from 'three';

export default {
	name: 'LightMap',
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
			this.scene.background = new THREE.Color(0xffffff); // 设置背景颜色为蓝色

			// 创建相机
			this.camera = new THREE.PerspectiveCamera(
				75,
				this.$refs.threejsContainer.clientWidth / this.$refs.threejsContainer.clientHeight,
				0.1,
				1000
			);
			this.camera.position.z = 5;

			// 创建渲染器
			this.renderer = new THREE.WebGLRenderer();
			this.renderer.setClearColor(0x0000ff);  //渲染器上创建颜色
			this.renderer.setSize(this.$refs.threejsContainer.clientWidth, this.$refs.threejsContainer.clientHeight);
			this.$refs.threejsContainer.appendChild(this.renderer.domElement);

			// 创建一个立方体
			const geometry = new THREE.BoxGeometry();
			const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
			this.cube = new THREE.Mesh(geometry, material);
			this.scene.add(this.cube);

			// 渲染循环
			this.animate();
		},
		animate() {
			requestAnimationFrame(this.animate.bind(this));

			// 旋转立方体
			this.cube.rotation.x += 0.01;
			this.cube.rotation.y += 0.01;

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
div {
	width: 100%;
	height: 100%;
}

.threejsContainer {
	width: 100vw;
	height: 100vh;
}
</style>