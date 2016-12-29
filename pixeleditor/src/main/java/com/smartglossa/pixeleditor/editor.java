package com.smartglossa.pixeleditor;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONObject;

public class editor extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		doPost(request, response);

	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String operation = request.getParameter("operation");

		if (operation.equals("addfile")) {

			String fname = request.getParameter("fname");
			String messages = request.getParameter("messages");

			JSONObject result = new JSONObject();
			try {
				Class.forName(DataBaseConstant.MYSQL_DRIVER);
				Connection connection = DriverManager.getConnection("jdbc:mysql://" +
						DataBaseConstant.MYSQL_SERVER + "/" + DataBaseConstant.DATABASE_NAME, DataBaseConstant.USERNAME,
						DataBaseConstant.PASSWORD);
				Statement statement = connection.createStatement();
				String query = "insert into edit (fname,messages) values('" + fname + "','" + messages + "')";
				statement.execute(query);
				result.put("status", "success");

			} catch (Exception e) {
				result.put("message", "error");

				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			response.getWriter().print(result);
		} else if (operation.equals("getmessages")) {
			JSONObject result = new JSONObject();
			String fname = request.getParameter("fname");
			try {
				Class.forName(DataBaseConstant.MYSQL_DRIVER);
				Connection connection = DriverManager.getConnection("jdbc:mysql://"+
						DataBaseConstant.MYSQL_SERVER + "/" + DataBaseConstant.DATABASE_NAME, DataBaseConstant.USERNAME,
						DataBaseConstant.PASSWORD);
				Statement statement = connection.createStatement();
				String query = "select messages from edit where fname='" + fname + "'";
				ResultSet rs = statement.executeQuery(query);
				if (rs.next()) {
					result.put("Mess", rs.getString("messages"));
				}
			} catch (Exception e) {
				e.printStackTrace();
			}
			response.getWriter().println(result);
		} else if (operation.equals("updatemessages")) {
			JSONObject result = new JSONObject();
			String fname = request.getParameter("fname");
			String messages = request.getParameter("messages");

			try {
				Connection connection = DriverManager.getConnection("jdbc:mysql://" + 
						DataBaseConstant.MYSQL_SERVER + "/" + DataBaseConstant.DATABASE_NAME, DataBaseConstant.USERNAME,
						DataBaseConstant.PASSWORD);
				Statement statement = connection.createStatement();
				String query = "update edit set messages='" + messages + "' where fname='" + fname + "'";
				statement.execute(query);
				result.put("status", "success");

			} catch (Exception e) {
				result.put("message", "error");

				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			response.getWriter().print(result);
		}
	}
}