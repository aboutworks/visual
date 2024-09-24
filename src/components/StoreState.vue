<template>
	<textarea v-model="stringifiedValue" @input="updateStore"></textarea>
</template>
  
  <script>
  export default {
	props: {
	  stateValue: String // 接收传入的stateValue名称
	},
	computed: {
	  // 将对象转换为JSON字符串
	  stringifiedValue() {
		const value = this.$store.state[this.stateValue];
		return typeof value === 'object' ? JSON.stringify(value, null, 2) : value;
	  }
	},
	methods: {
	  // 当用户输入时，将JSON字符串解析回对象，并更新 Vuex store 中对应的值
	  updateStore(event) {
		let parsedValue;
		try {
		  parsedValue = JSON.parse(event.target.value);
		} catch (error) {
		  parsedValue = event.target.value; // 如果解析失败，则保留原始字符串
		}
		this.$store.commit('updateStateValue', {
		  key: this.stateValue,
		  value: parsedValue
		});
	  }
	}
  }
  </script>

<style scoped>
textarea{
	background-color: black;
	color:white;
	height: 600px;
	width:500px;
}
</style>