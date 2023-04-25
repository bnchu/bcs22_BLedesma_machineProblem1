


const students = [];
const grades = [];

for (let i = 0; i < 5; i++) {
  const studentName = prompt("Enter the name of the student:");
  const enablingAssessments = [];
  
  for (let j = 0; j < 5; j++) {
    const enablingAssessment = Number(prompt(`Enter enabling assessment ${j + 1} for ${studentName}:`));
    enablingAssessments.push(enablingAssessment);
  }
  
  const classParticipation = enablingAssessments.reduce((total, grade) => total + grade) / enablingAssessments.length;
  
  const sumAssessments = [];
  
  for (let j = 0; j < 3; j++) {
    const sumAssessment = Number(prompt(`Enter summative assessment ${j + 1} for ${studentName}:`));
    sumAssessments.push(sumAssessment);
  }
  
  const summativeGrade = sumAssessments.reduce((total, grade) => total + grade) / sumAssessments.length;
  
  const finalExam = Number(prompt(`Enter major exam grade for ${studentName}:`));
  const finalGrade = (classParticipation * 0.3) + (summativeGrade * 0.3) + (finalExam * 0.4);
  
  let letterGrade;
  
  switch (true) {
    case finalGrade >= 90:
      letterGrade = "A";
      break;
    case finalGrade >= 80:
      letterGrade = "B";
      break;
    case finalGrade >= 70:
      letterGrade = "C";
      break;
    case finalGrade >= 60:
      letterGrade = "D";
      break;
    default:
      letterGrade = "F";
  }
  
  const studentGrade = {
    "Name": studentName,
    "Class Participation": classParticipation.toFixed(0),
    "Summative Grade": summativeGrade.toFixed(0),
    "Final Exam Grade": finalExam.toFixed(0),
    "Final Grade": finalGrade.toFixed(0),
    "Letter Grade": letterGrade
  };
  
  grades.push(studentGrade);
}

console.table(grades);
