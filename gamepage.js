// random value generated
  var y = Math.floor(Math.random() * 10 +1);

  // number guessed by user
  var x = document.getElementById("gussedField").ariaValueMax;

  if(x == y)
  {
      alert("CONGRATULATIONS!!!"+playername+" YOU GUESSED IT RIGHT IN "
              + gussed + "GUESS ");
       guess= 1;       
  }

  else if(x > y)
  {
      guess++;
      alert("OOPS SORRY!! TRY A SMALLER NUMBER");
  }
  else
  {
      guess++;
      alert("OOPS SORRY!! TRY A GREATER NUMBER")
  }

  function playAgain()
  {
      y = Math.floor(Math.random() * 10 + 1);
  }
// counting the number of guesses
// made for correct Guess

  
// function for number guessed by user     
