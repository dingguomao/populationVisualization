package Servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.alibaba.fastjson.JSON;

import DBUtil.DBMysql;


@WebServlet("/queryPeopleNum")
public class queryPeopleNum extends HttpServlet {
       
    

	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html;charset=utf-8");
		String city = request.getParameter("city");
		PrintWriter out = response.getWriter();
		DBMysql dbmysql = new DBMysql();
		if (city.equals("")) {
			city = "È«¹ú";
		}
		List<HashMap<String, Object>> rk = dbmysql.queryPeopNum(city);
		String rkString = JSON.toJSONString(rk);
//		System.out.println(rkString);
		out.println(rkString);
	}

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
