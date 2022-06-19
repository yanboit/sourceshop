<template>
	<!-- 登录 -->
	<div id="login-view" class="login-view">
		<div class="login-wrap">

			<h2>登录-织博客</h2>

			<form class="form" method="post" action="">
				<input type="text" placeholder="用户名" name="username" />
				<input type="password" placeholder="密码" name="password" />
				<div class="sure">
					<input type="text" placeholder="验证码" class="code" name="code" />
					<img onclick="changeCode(this)" class="code_icon" src="">
				</div>
				<!-- <button> 登录</button> -->
				<button type="reset">
					<router-link style="text-decoration: none;color: #FFFFFF;" to="/admin">登录</router-link>
				</button>
				<div style="display: flex;justify-content: center;">
					<router-link to="/register" style="margin-right: 30px;" href="">
						<p> 没有账号？点击注册 </p>
					</router-link>
					<router-link to="/" href="index.jsp">
						<p> 回到首页 </p>
					</router-link>
				</div>
			</form>

		</div>
	</div>
</template>


<script>
	// if ($ {
	// 		msg != null
	// 	}) {
	// 	alert("${msg}")
	// }

	// function changeCode(e) {
	// 	let time = new Date().getMilliseconds();
	// 	e.src = "${pageContext.request.contextPath}/captche?" + time;
	// }
</script>

<!-- <style scoped="scoped" src="@/assets/css/login/style.css"></style> -->

<style scoped="scoped">
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	#login-view {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.login-wrap {
		position: relative;
		margin: 180px auto;
		background: #ecf0f1;
		width: 350px;
		border-radius: 5px;
		box-shadow: 3px 3px 10px #333;
		padding: 15px;
	}

	.login-wrap h2 {
		text-align: center;
		font-weight: 200;
		font-size: 1.6em;
		margin-top: 20px;
		color: #34495e;
		height: 50px;
	}

	.login-wrap .form {
		padding-top: 20px;
	}

	.login-wrap .form input[type="text"],
	.login-wrap .form input[type="password"],
	.login-wrap .form button {
		width: 80%;
		margin-left: 10%;
		margin-bottom: 25px;
		height: 40px;
		border-radius: 5px;
		outline: 0;
		-moz-outline-style: none;
	}

	.login-wrap .form input[type="text"],
	.login-wrap .form input[type="password"] {
		border: 1px solid #bbb;
		padding: 0 0 0 10px;
		font-size: 14px;
	}

	.login-wrap .form input[type="text"]:focus,
	.login-wrap .form input[type="password"]:focus {
		border: 1px solid #3498db;
	}

	.login-wrap .form a {
		text-align: center;
		font-size: 12px;
		color: #3498db;
	}

	.login-wrap .form a p {
		padding-bottom: 10px;
	}

	.login-wrap .form button {
		background: #e74c3c;
		border: none;
		color: white;
		font-size: 18px;
		font-weight: 200;
		cursor: pointer;
		transition: box-shadow .4s ease;
	}

	.login-wrap .form button:hover {
		box-shadow: 1px 1px 5px #555;
	}

	.login-wrap .form button:active {
		box-shadow: 1px 1px 7px #222;
	}

	.login-wrap:after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		background: -moz-linear-gradient(left, #27ae60 0%, #27ae60 20%, #8e44ad 20%, #8e44ad 40%, #3498db 40%, #3498db 60%, #e74c3c 60%, #e74c3c 80%, #f1c40f 80%, #f1c40f 100%);
		height: 5px;
		border-radius: 5px 5px 0 0;
		background: -webkit-linear-gradient(left, #27ae60 0%, #27ae60 20%, #8e44ad 20%, #8e44ad 40%, #3498db 40%, #3498db 60%, #e74c3c 60%, #e74c3c 80%, #f1c40f 80%, #f1c40f 100%);
	}


	.form {
		display: flex;
		flex-direction: column;
	}

	#login-view {
		position: absolute;
		top: 0;
		left: 0;
		/* background: #95a5a6; */
		background: url(https://up.imold.wang/sourceshop/assets/img/loginc.jpg) no-repeat center center/cover;
		height: calc(100vh + 10px);
		width: 100%;
	}

	.code {
		margin-right: 20px;
	}

	.sure {
		display: flex;
		align-items: center;
	}

	.code_icon {
		width: 95px;
		height: 36px;
		margin-right: 30px;
		margin-bottom: 26px;
	}

	html .login-wrap {
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
	}
</style>
