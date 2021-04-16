var student = (function(){
  var name = "Pesho";
  var getName = function(){
      return name;
  };
return { getName:getName}

})
student.getName = "Gosho";
console.log(student.name);
console.log(student.getName);