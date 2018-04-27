<template>
    <div class="fillcontain">
        <head-top></head-top>
        <p class="explain_text">A301商铺管理系统</p>
        <p class="explain_text">如有技术问题客联系: zhangxu@fudan.edu.cn 188188188888</p>
    </div>
</template>

<script>
	import headTop from '../components/headTop'
    export default {
    	components: {
    		headTop,
    	},
    }
</script>

<style lang="less">
	@import '../style/mixin';
	.explain_text{
		margin-top: 20px;
		text-align: center;
		font-size: 20px;
		color: #333;
	}
</style>
