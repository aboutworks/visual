import { ref, onUnmounted } from 'vue';

export const utils = {
  generateRandomNumber(length) {
    const currentNumber = ref(generateRandomNumberString(length));
    let intervalId;
    
    function generateRandomNumberString(len) {
      return Array.from({ length: len }, () => Math.floor(Math.random() * 10)).join('');
    }

    function startUpdating() {
      intervalId = setInterval(() => {
        currentNumber.value = generateRandomNumberString(length);
      }, 1000); // 每秒更新一次
    }

    function stopUpdating() {
      if (intervalId) {
        clearInterval(intervalId);
      }
    }

    // 启动定时更新
    startUpdating();

    // 组件卸载时清理定时器
    onUnmounted(() => {
      stopUpdating();
    });

    return currentNumber;
  }
};