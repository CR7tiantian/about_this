(function() {
	age = 'aaa';	//此处age为全局变量
	var age = 'bbb';		//使用var 将age变成局部变量
	var obj = {
		getAge: function() {
			alert(this.age);
		}
	}
	obj.getAge();//undefined     因为this指向obj，obj无age属性
	var another = obj.getAge;	//
	another();	//undefined    因为this指向全局对象，无age属性
})();

//以下是重点

(function() {
	name = 'aaa';	//此处age为全局变量
	var name = 'bbb';		//使用var 将name变成局部变量
	var obj = {
		getAge: function() {
			alert(this.name);
		}
	}
	obj.getAge();//undefined     因为this指向obj，obj无name属性
	var another = obj.getAge;	//
	another();	//''    因为this指向全局window对象,window对象自带name属性,此时window.name为空
})();
