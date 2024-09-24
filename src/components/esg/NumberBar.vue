<template>
	<div>
		<div class="numberbar">
			<UnitItem v-for="(n, index) in nums" :key="index" :num="n"></UnitItem>
		</div>
		<div>
			<div>公司总营收额</div>
		</div>
	</div>
</template>

<script>
import UnitItem from '@/components/esg/UnitItem';

export default {
	data() {
		return {
			nums: ['¥', 1, ',', 5, 5, 9, ',', 5, 6, 7, '.', 0, 4, 2]
		};
	},
	components: {
		UnitItem
	},
	mounted() {
		this.startIncrement();
	},
	methods: {
		startIncrement() {
			setInterval(() => {
				this.nums = this.nums.map(n => {
					// 如果是数字类型则增加1，超过9就回到0，否则返回原值
					if (!isNaN(n) && typeof n === 'number') {
						return (n + 1) % 10;
					}
					return n;
				});
			}, 500); // 每秒执行一次
		}
	}
};
</script>

<style>
.numberbar {
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
}
</style>