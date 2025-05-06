function Grade() {
	let sub1 = parseInt(document.getElementById("Science").value);
	let sub2 = parseInt(document.getElementById("SS").value);
	let sub3 = parseInt(document.getElementById("Math").value);
	let grade = (sub1 + sub2 + sub3) / 3;
	let round_grade = grade.toFixed (2);

	if (grade >= 70 && grade<= 74.99) {
		window.alert('Your performance is ' + round_grade +'. Which is Poor.');
	}
	else if (grade >= 75 && grade <=79.99){
		window.alert('Your performance is ' + round_grade +'. Which  Needs Improvement.');
	}
	else if (grade >= 80 && grade <= 86.99){
		window.alert('Your performance is ' + round_grade +'. Which is Satisfactory.');
	}
	else if (grade >= 87 && grade <= 93.99){
		window.alert('Your performance is ' + round_grade +'. Which is Above Satisfactory.');
	}
	else if (grade >= 94 && grade <= 100){
		window.alert('Your General Average is ' + round_grade +'. Which is Excellent.');
	}
	else {
		window.alert('Invalid Input');
	}

}