package com.smartglossa.pixeleditor;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONArray;
import org.json.JSONObject;


public class FileServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doPost(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		String operation = request.getParameter("operation");
		if (operation.equals("addFile")) {
			JSONObject obj = new JSONObject();
			String fName = request.getParameter("fName");
			String messages = request.getParameter("messages");

			try {
				FileClass file = new FileClass();
				file.file(fName, messages);
				obj.put("status", 1);
			} catch (Exception e) {
				obj.put("status", 0);
				e.printStackTrace();
			}
			response.getWriter().print(obj);
		} else if (operation.equals("getall")) {
			JSONArray result = new JSONArray();
			try {
				FileClass get = new FileClass();
				result = get.getall();
			} catch (Exception e) {
				JSONObject get = new JSONObject();
				get.put("status", 0);
				result.put(get);
				e.printStackTrace();
			}
			response.getWriter().println(result);

		} else if (operation.equals("updateMsg")) {
			JSONObject obj = new JSONObject();
			String messages = request.getParameter("messages");
			String fName = request.getParameter("fName");

			try {
				FileClass update = new FileClass();
				update.update(messages, fName);
				obj.put("status", 1);
			} catch (Exception e) {
				obj.put("status", 0);
				e.printStackTrace();
				obj.put("message", e.getMessage());
			}
			response.getWriter().print(obj);
		} else if (operation.equals("getMsg")) {
			String fName = request.getParameter("fName");
			JSONObject one = new JSONObject();
			try {
				FileClass getmessage = new FileClass();
				one = getmessage.getmsg(fName);
			} catch (Exception e) {
				e.printStackTrace();
			}
			response.getWriter().println(one);

		}else if (operation.equals("getOne")) {
		    String fName =request.getParameter("fName");
		    JSONObject reslt = new JSONObject();
		    try {
		        FileClass get = new FileClass();
		        reslt = get.getone(fName);
		    } catch (Exception e) {
		        e.printStackTrace();
		    }
		    response.getWriter().println(reslt);
		}

	}
}
