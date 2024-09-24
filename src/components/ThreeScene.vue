<template>
	<div ref="container" class="container"></div>
</template>

<script>
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js'; //环境球

import mtl from '@/assets/blender/obj.mtl'
import obj from '@/assets/blender/obj.obj'
import hdr from '@/assets/blender/hdr.hdr'

export default {
	name: 'ThreeDScene',
	data() {
		return {
			raycaster: new THREE.Raycaster(), // 射线投射器
			mouse: new THREE.Vector2(), // 用于存储鼠标点击位置
			intersectedObject: null, // 保存被点击的对象
		}
	},
	mounted() {
		this.init3DScene();
	},
	beforeDestroy() {
		window.removeEventListener('click', this.onDocumentMouseClick);
	},
	methods: {
		init3DScene() {
			// 创建场景
			const scene = new THREE.Scene();
			const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
			const renderer = new THREE.WebGLRenderer({ antialias: true }); //创建渲染器

			renderer.setSize(window.innerWidth, window.innerHeight);
			this.$refs.container.appendChild(renderer.domElement);

			// 添加环境光
			const ambientLight = new THREE.AmbientLight(0xffffff, 2); // 第一个环境光
			scene.add(ambientLight);


			// 添加平行光
			const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // 颜色和强度
			directionalLight.position.set(1, 1, 1).normalize(); // 设置光源位置
			scene.add(directionalLight);

			// // 添加点光源
			// const pointLight = new THREE.PointLight(0xffffff, 1, 100); // 颜色、强度、距离
			// pointLight.position.set(5, 5, 5); // 设置点光源位置
			// scene.add(pointLight);

			// // 添加聚光灯
			// const spotLight = new THREE.SpotLight(0xffffff, 1); // 颜色和强度
			// spotLight.position.set(-5, 5, 5); // 设置聚光灯位置
			// spotLight.angle = Math.PI / 4; // 设置光锥角度
			// spotLight.penumbra = 0.1; // 设置边缘模糊度
			// scene.add(spotLight);


			// // 加载 HDR 环境光贴图
			// const rgbeLoader = new RGBELoader();
			// rgbeLoader.load(hdr, (texture) => {
			// 	texture.mapping = THREE.EquirectangularReflectionMapping; // 设置映射
			// 	scene.background = texture; // 设置背景
			// 	scene.environment = texture; // 设置环境光贴图

			// 	// 创建材质并应用环境光贴图
			// 	const material = new THREE.MeshStandardMaterial({
			// 		color: 0xffffff,
			// 		metalness: 1.0,
			// 		roughness: 0.1
			// 	});

			// 	// 创建球体并添加到场景
			// 	const geometry = new THREE.SphereGeometry(1, 32, 32);
			// 	const sphere = new THREE.Mesh(geometry, material);
			// 	scene.add(sphere);
			// });


			// 加载 MTL 文件
			const mtlLoader = new MTLLoader();
			mtlLoader.load(mtl, (materials) => {
				materials.preload(); // 预加载材料

				// 加载 OBJ 文件
				const objLoader = new OBJLoader();
				objLoader.setMaterials(materials);
				objLoader.load(
					obj, // 替换为你的 OBJ 文件路径
					(object) => {
						scene.add(object);
						object.position.set(0, 0, 0); // 设置对象位置
						// 遍历每个子对象
						object.traverse((child) => {
							if (child.isMesh) { // 确保是网格
								const edges = new THREE.EdgesGeometry(child.geometry);
								const lineMaterial = new THREE.LineBasicMaterial({ color: 0x000000 });
								const lineSegments = new THREE.LineSegments(edges, lineMaterial);
								scene.add(lineSegments); // 添加边线到场景
							}
						});
					},
					(xhr) => {
						console.log((xhr.loaded / xhr.total * 100) + '% loaded');
					},
					(error) => {
						console.error('An error happened', error);
					}
				);
			});

			camera.position.set(0, 0, 5); // 设置摄像头位置
			camera.lookAt(new THREE.Vector3(0, 0, 0)); // 摄像头朝向原点

			// 初始化 OrbitControls
			const controls = new OrbitControls(camera, renderer.domElement);

			// 动画循环
			const animate = () => {
				requestAnimationFrame(animate);
				controls.update();
				renderer.render(scene, camera);
			};
			animate();

			// 监听点击事件
			window.addEventListener('click', this.onDocumentMouseClick);

			// 将场景和相机保存到实例中
			this.scene = scene;
			this.camera = camera;
			this.renderer = renderer;
		},
		onDocumentMouseClick(event) {
			// 更新鼠标位置为标准化设备坐标系 (NDC) (-1 to 1)
			this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
			this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

			// 使用 Raycaster 检测点击位置
			this.raycaster.setFromCamera(this.mouse, this.camera);
			const intersects = this.raycaster.intersectObjects(this.scene.children, true);

			// 如果有交互对象，获取信息
			if (intersects.length > 0) {
				this.intersectedObject = intersects[0].object; // 第一个被点击的对象
				this.displayObjectInfo(this.intersectedObject);
			}
		},
		displayObjectInfo(object) {
			// 在这里处理点击对象后的操作，比如弹出窗口
			// alert(`点击的对象名称: ${object.name}`);
			this.$emit('object-selected', object.name);
		}
	}
};
</script>

<style scoped>
.container {
	height: 100vh;
	width: 100vw;
	overflow: hidden;
	position: absolute;
	top: 0;
	left: 0;
	z-index: -1000;
}
</style>