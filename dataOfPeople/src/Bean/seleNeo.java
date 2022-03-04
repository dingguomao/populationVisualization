package Bean;

import java.sql.ResultSet;
import java.sql.SQLException;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;

import DBUtil.DBUtil;

public class seleNeo {

	public String seleNeo(String city) {
		DBUtil db=new DBUtil();
//		System.out.println(city);
        ResultSet rs = null;
		try {
			rs = db.rs("match p=(n:People{name:\""+city+"\"})-[r]-(m) return p,n,type(r),m");
		} catch (SQLException e) {
			e.printStackTrace();
		}
        String rlt = "{";
        int count = 0;
        try {
			while(rs.next())

			{

			    String rString=rs.getString("type(r)");
			    String mString = rs.getString("m");
			    String nString = rs.getString("n");
			    rlt = rlt+count+":["+nString+",{\"type\":\""+rString+"\"},"+mString+"],";
			    count++;
			    


			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
        rlt = rlt+"}";
//        System.out.println(rlt);



        db.close();
        return rlt;

    
	}

}
