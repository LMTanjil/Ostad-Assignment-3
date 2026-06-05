const student = {
  firstName: "Tanjil",
  lastName: "Hossain",
  age: 25,
  district: "Jamalpur",
  IsStudent: true
}

const age = student.age;
let district = student.district;
let Student = student.IsStudent;

const getFullName = function(student) {
  return student.firstName + " " + student.lastName;
};

console.log("Name:", getFullName(student));
console.log("Age:", age);
console.log("District:", district);
console.log("Student:",   Student);

console.log("All Information:", student);