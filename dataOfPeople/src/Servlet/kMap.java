package Servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;

import Bean.seleNeo;
import DBUtil.DBMysql;

/**
 * Servlet implementation class kMap
 */
@WebServlet("/kMap")
public class kMap extends HttpServlet {
	
	@SuppressWarnings("unlikely-arg-type")
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		seleNeo neo = new seleNeo();
		request.setCharacterEncoding("utf-8");
		String city = request.getParameter("city");
		response.setContentType("text/html;charset=utf-8");

		PrintWriter out = response.getWriter();

		DBMysql mysql = new DBMysql();
//		List<HashMap<String, Object>> rk = mysql.queryPeopNum();
		
//		String rkString = JSON.toJSONString(rk);
//        System.out.println(rkString);
//
		String jo = neo.seleNeo(city);
		Object object = jo;
//		System.out.println(jo);
		JSONObject json = JSON.parseObject(jo);  
//        System.out.println("parseJsonObject()·½·¨£ºjson==" + json); 
//        System.out.println(json.get(1));
		out.println(json);

		
		
		
	
	
	}

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
