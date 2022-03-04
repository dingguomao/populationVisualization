from py2neo import Graph,Node,Relationship
import csv
import os

def imp(start,end,relation):
    #账号密码改为自己的即�?
    g=Graph('http://116.62.232.244/:7474',user='neo4j',password='scz000614')
    # print("当前行数�?",reader.line_num,"当前内容�?",item)
    #创建图谱[given标准的数据集，都可以创建图]
    start_node=Node("People",name=start)
    end_node = Node("People", name=end)
    relation=Relationship(start_node,relation,end_node)
    g.merge(start_node,"People","name")
    g.merge(end_node, "People", "name")
    g.merge(relation, "People", "name")

if __name__=="__main__":
    with open('neo4j数据.csv','r', encoding='UTF-8' ) as f:
        reader = csv.reader(f)
        print(type(reader))
        
        for row in reader:
            # print(row[1])
            print(row[0],row[1],row[2])