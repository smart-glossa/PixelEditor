package com.smartglossa.pixeleditor;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class FileClass {
	Connection conn = null;
	Statement stat = null;
	ResultSet res = null;
	public FileClass() throws Exception{
		openConnection();
	}
	
	public void file(String fName,String messages) throws SQLException {
		try {
			String qry = "insert into file(fname,messages) values('" + fName + "','"+messages+"')";
			stat.execute(qry);
		} finally {
			closeConnection();
		}
	}
	private void openConnection() throws Exception{
		 Class.forName(DataBaseConstant.MYSQL_DRIVER);
		 String URL="jdbc:mysql://localhost:3306/editor";
		conn=DriverManager.getConnection(URL,DataBaseConstant.USERNAME,DataBaseConstant.PASSWORD);
		stat=conn.createStatement();
		//con = DriverManager.getConnection(DataBaseConstant.MYSQL_SERVER + "/" + DataBaseConstant.DATABASE_NAME, DataBaseConstant.USERNAME,
			//	DataBaseConstant.PASSWORD);
		//sta = con.createStatement();

	}

	private void closeConnection() throws SQLException {
		if (conn != null) {
			conn.close();

		}
		if (stat != null) {
			stat.close();
		}
		if (res != null) {
			res.close();
		}
	}

}

