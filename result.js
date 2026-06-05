let marks = 75;

const getGrade = function(marks) {
  if (marks >= 80) {
    return "A+";
  } else if (marks >= 70 && marks <= 79) {
    return "A";
  } else if (marks >= 60 && marks <= 69) {
    return "B";
  } else if (marks >= 50 && marks <= 59) {
    return "C";
  } else {
    return "F";
  }
};

console.log("Based on your Marks:", marks,"Your Grade is:", getGrade(marks));