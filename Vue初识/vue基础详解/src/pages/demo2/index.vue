<template>
	<div>
		<div>选项/数据</div>
		<div>----------------------------------------------</div>
		<div>data: {{msg}}</div>
		<div>----------------------------------------------</div>
		<div>computed: {{aDouble}}</div>
		<div>----------------------------------------------</div>
		<div @click="say('hi')">点击我</div>
	</div>
</template>
<script>
	export default {
		data () {
		    return {
		        msg: 'Welcome to Your Vue.js App',
		        num: 1
		    }
	    },
	    computed:{
	    	aDouble(){
	    		return this.num*2;
	    	}
	    },
	    methods: {
	    	say(h){
	    		alert(h);
	    	}
	    }
	}
</script>