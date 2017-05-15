

	var rand = 0;	
	var lives = 10;

	var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];

	var spaceWords = ['star', 'planet', 'saturn', 'pluto', 'mars', 'earth', 'galaxy', 'nebula','satellite', 'rocket', 'gravity', 'blackhole', 'atmosphere', 'moon', 'asteroid', 'supernova'];  

	var spaceWord = spaceWords[Math.floor(Math.random()*spaceWords.length)];
	console.log(spaceWord);
	
	function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index+1);
	}
	
	window.onload = function () {
		var spaces = "";
		for (i =0; i < spaceWord.length; i++){
			spaces = spaces + "_";
		}
		document.getElementById("spaces").innerHTML=spaces;

		//creating button letters
		for (i = 0; i < alphabet.length; i++){
			var letter = alphabet[i];
			var btn = document.createElement("BUTTON");
			var t = document.createTextNode(letter);      
			btn.appendChild(t);
			btn.value = letter;

			//Button function!!
			btn.onclick = function() {
				var foundLetter = false;
				var testLetter = this.value;
				this.disabled = true;
				var solution = document.getElementById("spaces").innerHTML;
				for (i = 0; i < solution.length; i++){
					if (testLetter == spaceWord[i]) {
						foundLetter = true;
						solution = setCharAt(solution,i,testLetter);
						document.getElementById("spaces").innerHTML = solution;
					}
				}
				//if letter guessed is not in word
				if (foundLetter == false){
					lives = lives - 1;
					document.getElementById("lives").innerHTML = lives;
				}
				//game over!
				if (lives == 0){
					document.getElementById("livesMessage").innerHTML = "Game Over!";
				}
				//Win condition
				if (solution.indexOf('_') == -1){
					document.getElementById("livesMessage").innerHTML = "You Win!!!";
				}
			};
			var buttonDiv = document.getElementById("letterBank");
			buttonDiv.appendChild(btn);

		}
	}
	
	
