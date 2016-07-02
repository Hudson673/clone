var Subjects = [
"Math", "Reading", "Science", "Health", "PE", "Lunch", "Social Studies"];

function pickSubject(){
	// Sets avariablle called subjectNumber that will have a random Whole Number
	// Based on the length of the Subjects array
	var subjectNumber = Math.floor(Math.random()*Subjects.length);
// Sets avariablle called subjectNumber2 that will have a random Whole Number
	// Based on the length of the Subjects array
	var subjectNumber2 = Math.floor(Math.random()*Subjects.length);
// Sets avariablle called subjectNumber3 that will have a random Whole Number
	// Based on the length of the Subjects array
	var subjectNumber3 = Math.floor(Math.random()*Subjects.length);
// Sets avariablle called subjectNumber4 that will have a random Whole Number
	// Based on the length of the Subjects array
	var subjectNumber4 = Math.floor(Math.random()*Subjects.length);
// Sets avariablle called subjectNumber5 that will have a random Whole Number
	// Based on the length of the Subjects array
	var subjectNumber5 = Math.floor(Math.random()*Subjects.length);
document.getElementById('Subject').innerHTML = "<h1>"=Subjects[subjectNumber]+" and ="+Subjects[subjectNumber2]+" and ="+Subjects[subjectNumber3]+" and ="+Subjects[subjectNumber4]+" and ="+Subjects[subjectNumber5]+" and ="+
}