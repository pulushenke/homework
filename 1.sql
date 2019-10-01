SHOW DATABASES;

DROP DATABASE IF EXISTS tarena;

CREATE DATABASE tarena CHARSET=UTF8;

SHOW DATABASES;

USE tarena;

##插入一个部门表指定其中包含的例
CREATE TABLE feng(
    don INT,
    dname VARCHAR(16),
    loc VARCHAR(32),
    PRIMARY KEY(don)  ##一个表中应该有一例为主键


);
##向部门表中插入记录行字符串只能用‘引起来’

INSERT INTO feng(don,dname,loc) VALUES(10,'Research','BJ');
INSERT INTO feng(don,dname,loc) VALUES(20,'Market','BJ');
INSERT INTO feng(don,dname,loc) VALUES(30,'Market','SH');
INSERT INTO feng(don,dname,loc) VALUES(40,'Operation','TJ');


##查询所有的部门数据
SELECT don,dname,loc FROM feng;

#删除表中的记录行
DELETE FROM feng WHERE don=30;

SELECT don,dname,loc FROM feng;

##修改某行记录
UPDATE feng SET dname='Developmen',loc='JN';

SELECT don,dname,loc FROM feng WHERE don=10;


##创建一个员工表
CREATE TABLE emp(
    eon INT AUTO_INCREMENT, ##自增例
    ename VARCHAR(32),
    gender VARCHAR(6),
    salary FLOAT(8,2),
    birthday DATE,
    isMarried BOOLEAN,
    PRIMARY KEY(eon)
    
);

##向员工表插入记录行

INSERT INTO emp(ename,gender,salary,birthday,isMarried)
VALUES('dd','rf',37,'1990-1-4',TRUE);

SELECT eon,ename,gender,salary,birthday,isMarried FROM emp;















