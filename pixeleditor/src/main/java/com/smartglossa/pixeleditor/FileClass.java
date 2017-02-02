package com.smartglossa.pixeleditor;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import org.json.JSONArray;
import org.json.JSONObject;

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
	public JSONArray getall() throws SQLException, ClassNotFoundException {
		JSONArray result = new JSONArray();
		try {
			String query = "select * from file";
			res = stat.executeQuery(query);
			while (res.next()) {
				JSONObject get = new JSONObject();
				get.put("fName", res.getString("fName"));
				get.put("messages", res.getString("messages"));
				

				result.put(get);
			}
			return result;
		} finally {
			closeConnection();
		}
	}
	public void update(String messages,String fName) throws SQLException {
		try {
			String query = "update set file messages='" + messages + "' where fname='" + fName+ "'";
			stat.execute(query);

		} finally {
			closeConnection();
		}
	}
	
	public JSONObject getmsg(String fName) throws SQLException {
		JSONObject obj=new JSONObject();
		try { //select messages from file where fname='selvi';
			String quer = "select messages from file where fname='"+ fName+"'";
			ResultSet res = stat.executeQuery(quer);
			while(res.next()){
				//JSONObject obj1=new JSONObject();
				obj.put("message",res.getString(1));	
			}

		} finally {
			closeConnection();
		}
		return obj;
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

