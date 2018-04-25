<?php 
	// 获取注册的用户名、密码、电话、地址
	$iphone = $_GET["iphone"];
	$password = $_GET["password"];

	echo " <meta charset='utf-8'>";
	
	
	/* 向数据库中保存注册的用户信息 */
	// 连接服务器
	mysql_connect("localhost:3306", "root", "");

	// 设置读写库编码
	mysql_query("set character set 'utf8'");
	mysql_query("set names 'utf8'");

	// 选择数据库
	mysql_select_db("biyao");
	// 创建插入语句
	$sql = "INSERT INTO users (iphone, password) VALUES('$iphone', '$password')";
	// 执行SQL语句，返回执行结果，true表示执行成功，false表示执行失败
	$result = mysql_query($sql);

	// 判断是否注册成功
	if ($result) {
		echo "<script>location='/index.html'</script>";
	} else {
		echo "<script>console.log('注册失败');</script>";
	}

	// 关闭数据库连接
	mysql_close();
 ?>