<template>
	<div class="personal">
		<ul>
			<li>
				<div class="name">
					<div class="nameit">Jimmy</div>
					<div class="namedes">Main Designer&Effect</div>
				</div>
				<div class="head"></div>
			</li>
			<li>
				<div class="changeLan">
					<div @click="switchLanguage">{{ newLocale }}</div>
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
export default {
	data() {
		return {
			newLocale: 'en',

		}
	},
	methods: {
		switchLanguage() {
			this.newLocale = this.$i18n.locale === 'en' ? 'zh' : 'en';
			this.$i18n.locale = this.newLocale;
		}
	}

}
</script>

<style scoped>
.personal {
	position: absolute;
	right: 1rem;
	top: 1rem;
	z-index: 300;
}
.personal ul {
	display: flex;
	flex-direction: row;
}
.personal ul li{
	display: flex;
	flex-direction: row;
	margin-right:8px;

}

.personal .name {
	text-align: right;
	margin-right: 1rem;
	margin-left: 1rem;
	font-size: 12px;
}

.personal .nameit {
	color: #368e8d;
}

.personal .nameit {
	color: #368e8d;
}

.personal .head {
	height: 32px;
	width: 32px;
	background-image: url('@/assets/svg/head.svg');
}

.changeLan {
	height: 32px;
	width: 32px;
	display: flex;
	justify-content: center;
	align-items: center;
	background:#00302F;
	color: #00AAA6;
	border: 1px solid #00AAA6;
}
</style>