function getvalue(){
	var a = document.forms["form1"]["text1"].value;
	var b = document.forms["form1"]["text2"].value;
	var c = document.forms["form1"]["text3"].value;
	var d = document.forms["form1"]["text4"].value;
	var e = document.forms["form1"]["text5"].value;
	var f = document.forms["form1"]["text6"].value;

	localStorage.setItem("ENTER LASTNAME",a);
	localStorage.setItem("ENTER FIRSTNAME",b);
	localStorage.setItem("ENTER MIDDELENAME",c);
	localStorage.setItem("ENTER COURSE",d);
	localStorage.setItem("ENTER YEAR AND SECTION",e);
	localStorage.setItem("ENTER YOUR ADDRESS",f);
};

