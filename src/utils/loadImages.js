// utils/loadImages.js
export function loadImages() {
	const images = [];
	// 动态加载 `@/assets/keyboard/ani` 目录下的所有 `.png` 文件
	const requireImages = require.context("@/assets/keyboard/ani", false, /\.webp$/);
	requireImages.keys().forEach((file) => {
	  images.push(requireImages(file)); // 添加到图片数组
	});
	return images; // 返回包含所有图片路径的数组
  }