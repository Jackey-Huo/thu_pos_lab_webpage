// JavaScript Document
function switchstyle01(obj){	

	obj.className="guidlevel01_style1";
}
function switchstyle02(obj){

	obj.className="guidlevel01_style2";
}

function switchstyle03(obj){	

	obj.className="guidlevel02_style1";
}
function switchstyle04(obj){

	obj.className="guidlevel02_style2";
}

function doGo(obj){
  var urlstr = window.location.href;
  var jumpvalue = document.getElementById("jumpvalue").value;
  if(jumpvalue==null || jumpvalue==""){
  alert("请输入跳转页值！");
  document.getElementById("jumpvalue").focus();
  return;
  }
  if(jumpvalue>obj||jumpvalue==0){
  alert("您输入的页码值不在页码范围内！");
  document.getElementById("jumpvalue").value="";
  document.getElementById("jumpvalue").focus();
  return;
  }
  if(1==jumpvalue){
  urlstr = urlstr.substr(0,urlstr.lastIndexOf('/')+1)+'index.html';
  }else{
  urlstr = urlstr.substr(0,urlstr.lastIndexOf('/')+1)+'index_'+jumpvalue+'.html';
  }
  window.location = urlstr;
  }