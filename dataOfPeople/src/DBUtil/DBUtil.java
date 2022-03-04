package DBUtil;

import java.sql.*;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;

import org.neo4j.jdbc.*;
public class DBUtil {

	   Connection con;

	    Statement stmt;

	    ResultSet rs;

	    public ResultSet rs(String sqlstring) throws SQLException {
	        try {
	            Class.forName("org.neo4j.jdbc.Driver").newInstance();

	            this.con = DriverManager.getConnection("jdbc:neo4j:http://116.62.232.244:7474","neo4j","scz000614");

	            this.stmt =  con.createStatement();

	            this.rs =  stmt.executeQuery(sqlstring);

	        } catch (InstantiationException e) {

	            e.printStackTrace();

	        } catch (IllegalAccessException e) {

	            e.printStackTrace();

	        } catch (ClassNotFoundException e) {

	            e.printStackTrace();

	        }

	        return rs;

	    }

	    public void close () {
	        if (this.rs != null) {
	            try {
	                this.rs.close();

	            } catch (SQLException e) {
	                e.printStackTrace();

	            }

	        }

	        if (this.stmt != null) {
	            try {
	                stmt.close();

	            } catch (SQLException e) {
	                e.printStackTrace();

	            }

	        }

	        if (this.con != null) {
	            try {
	                this.con.close();

	            } catch (SQLException e) {
	                e.printStackTrace();

	            }

	        }

	    }

}
