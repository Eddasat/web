<template>
	<div>
		<div>vue-resource请求</div>
		<div>-----------------------------------------</div>
		<!-- https://github.com/pagekit/vue-resource -->


	</div>
</template>


<script>
	export default{
		data(){
			return{

			}
		},
		mounted(){
			this.$http.get('/someUrl').then(response => {
		    	
		    	console.log(response.body);
		  	}, response => {
		    	// error callback
		  	});


		  	this.$http.post('/someUrl', {foo: 'bar'}).then(response => {
		    	console.log(response.body);
		  	}, response => {
		    	// error callback
		  	});


		  	// GET /someUrl?foo=bar
			this.$http.get('/someUrl', {params: {foo: 'bar'}, headers: {'X-Custom': '...'}}).then(response => {
			    // success callback
			}, response => {
			    // error callback
			});
		}
	}
</script>