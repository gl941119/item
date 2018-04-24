<?php 
	// 获取待注册的用户名
	$iphone = $_GET["iphone"];

	/* 查询数据库中是否存在注册的用户信息 */
	// 连接服务器
	mysql_connect("localhost:3306", "root", "");

	// 设置读写库编码
	mysql_query("set character set 'utf8'");
	mysql_query("set names 'utf8'");

	// 选择数据库
	mysql_select_db("biyao");
	// 创建查询语句
	$sql = "SELECT COUNT(*) FROM users WHERE iphone='$iphone'";
	// 执行SQL语句，返回执行查询结果集
	$result = mysql_query($sql);

	// 判断是否存在
	if ($row = mysql_fetch_array($result)) {
		if ($row[0] >= 1) // 用户存在
			echo '{"status":0, "message":"exist"}';
		else // 用户不存在
			echo '{"status":1, "message":"not exist"}';
	} else {
		echo '{"status":-1, "message":"failed"}';
	}

	// 关闭数据库连接
	mysql_close();
 ?>