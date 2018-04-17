
var lastInputs = document.getElementById('lastInputs')

var ol = document.createElement('ol');

lastInputs.appendChild(ol);

//This functioned is called when the process button is clicked
function palinIdentifier() {

  var the_palindrome = document.palinForm.inputWord.value;

// set the output to the value gotten from reversethe_palindrome()
  document.palinForm.outputWord.value = reversethe_palindrome(the_palindrome);

  //checks to see if the input is empty or number.

  if (the_palindrome == '' || typeof the_palindrome == "number") {

    alert("You must enter a word or phrase");

  } else {

    if (isPalindrome(the_palindrome)) {

      alert("Yaaay!!! It is a palindrome.");
      //save to local Storage
      ItemList(the_palindrome);

    }

    else {

      alert("Oops!!! That is not a palindrome!");
      ItemList(the_palindrome);

    }

  }

}

//checks if the upper-case and punctuation removed is reverse

//of the input the_palindrome is equal to itself reversed.

function isPalindrome(inputthe_palindrome) {

  var reversedthe_palindrome = reversethe_palindrome(inputthe_palindrome);

  //this will perform the punctuation elimination on both the_palindromes

  return (reversedthe_palindrome == reversethe_palindrome(reversedthe_palindrome));

}
//uppercases, reverses, and removes all non-alphabetic

//chars from the input the_palindrome

function reversethe_palindrome(the_palindromeToReverse) {

  the_palindromeToReverse = the_palindromeToReverse.toUpperCase();

  var reversedthe_palindrome = "";

  var length = the_palindromeToReverse.length - 1;

  var ch;

  for (var i = length; i >= 0; i--) {

    ch = the_palindromeToReverse.charAt(i)

    if (ch >= 'A' && ch <= 'Z') {

      reversedthe_palindrome += ch;

    }

  }

  return reversedthe_palindrome;

}
//*Not needed
function palinGetter() {

  palinIdentifier();

  document.palinForm.inputWord.value = "";
}

// creates the list items

//of the input words

var list_of_words_or_phrase = []; 

function ItemList(the_palindrome) {

  //insert the item at the front of the array instead of the end. 

  list_of_words_or_phrase.unshift(the_palindrome.toLowerCase());

  localStorage.setItem('wordsOrPhrase', JSON.stringify(list_of_words_or_phrase));

}
//get the button that will display the last inputs and add it to an event listener as below

var display = document.getElementById('display');

// this event listener gets all the items from the local storage

display.addEventListener('click', function () {

  var min = 0;

  var max = 5

  var results = JSON.parse(localStorage.getItem('wordsOrPhrase'));

  if (results == null) {

    lastInputs.textContent = "nothing to show";

  } else {

    // removes each list element

    function removeLastFiveInputs() {

      while (ol.firstChild) {

        ol.removeChild(ol.firstChild);

      }

    }



    // removes all existing list element

    // before recreating the list

    // to avoid duplicating the last inputs

    removeLastFiveInputs();

    //this code slices out the last five items

    var lastfive = results.slice(min, max);


  
    //display the last five
    lastfive.forEach(function (result) {

      var li = document.createElement('li');

      li.innerHTML = result;

      ol.appendChild(li);



    });
  }

});

