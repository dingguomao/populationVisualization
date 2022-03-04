package Servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.alibaba.fastjson.JSON;

import DBUtil.DBMysql;

@WebServlet("/getCountryServlet")
public class getCountryServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
  
    public getCountryServlet() {
        super();
    }

	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		response.setContentType("text/html;charset=utf-8");
		response.setCharacterEncoding("utf-8");
		PrintWriter out = response.getWriter();
		DBMysql dbMysql = new DBMysql();
		List<List<List<String>>> allCountry = dbMysql.getAllCountry();
//		System.out.println(allCountry);
		String rkString = JSON.toJSONString(allCountry);
		out.println(rkString);
		
	}


	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
