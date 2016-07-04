<script>
	var lis=document.getElementsByTagName("li");
	for (var i=0;i<=lis.length;i++){
		var text=lis[i].getAttribute("title");
		document.write(text+"<br />");
		if(text=="null"){
			var text=lis[i].setAttribute("title","web前端技术");
			document.write(lis[i].getAttribute('title')+"<br />");
		}
	}
	var lis=document.getElementsByTagName("ul")[0].childNodes;
	document.write(lis.length);
	document.write(lis[0].nodeType);
	var p=document.getElementById("con");
	document.write(p.parentNode);
	p.parentNode.parentNode;
	var otest=document.getElementById("text");
	var newnode=document.creatElement("p");
	newnode.innerHTML="PHP";
	otest.appendChild(newnode);
	var otest=document.getElementById('test');
	var newnode=document.creatElement("p");
	newnode.innerHTML="web前端技术";
	otest.appendChild(newnode);

	var otest=document.getElementById("test");
	var node=document.getElementById("box");
	var newnode=document.creatElement("p");
	newnode.innerHTML="web前端技术";
	otest.insertBefore(newnode,node);

	var box=document.getElementById("div1");
	var node=document.getElementById("p1");
	var nnode=document.creatElement("p");
	nnode.innerHTML="JAVA";
	box.insertBefore(nnode,node);

	var box=document.getElementById("div1");
	var nodes=box.childNodes;
	for(var i=0;i<=nodes.length;i++){
		var childnode=nodes[i];
		box.removeChild(nodes[i]);
	}

	var newnode=document.creatElement("p");
	var newnodetext=document.creatTextNode("web前端技术");
	newnode.appendChild(newnodetext);
	var oldnode=document.getElementById("p1");
	oldnode.parentNode.replaceChild(newnode,oldnode);

	var element=document.creatElement("div");
	element.className="message";
	var textnode=document.creatTextNode("hello world");
	element.appendChild(textnode);
	body.appendChild(element);
	var w=document.documentElement.clientWidth || document.body.clientWidth;
	var h=document.documentElement.clientHeight || document.body.clientHeight;
</script>	