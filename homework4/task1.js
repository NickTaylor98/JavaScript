var phone=prompt("Введите номер телефона");
var pattern=phone.match(/^[\+\s]?(375)[\-\s\(]?(29)|(33)|(44)|(25)[\)\s\-]?\d{3}[\s\-]?\d{2}[\s\-]?\d{2}$/);
if(pattern){
	alert("Введенный номер является номером телефона");
}
else{
	alert("Введенный номер не является номером телефона");
}
