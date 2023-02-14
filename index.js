// Iteration 1: Name// Iteration 1: Names and Input

let hacker1 = 'James';
console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'Anna';
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker2.length > hacker1.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
for (let i = 0; i < hacker1.length; i++) {
  console.log(hacker1[i].toUpperCase());
}

let hacker2reversed = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  hacker2reversed += hacker2[i];
}
console.log(hacker2reversed);

if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// Bonus 1

let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus elementum consectetur dui, id pulvinar est luctus in. Nunc consequat enim eros, nec varius enim dictum congue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam fermentum lectus blandit ex auctor porta. Ut maximus enim sed ullamcorper convallis. Suspendisse et convallis neque. Suspendisse potenti.

Pellentesque imperdiet eget nunc a aliquam. Donec egestas erat nec nisi vulputate, eu volutpat neque fermentum. Phasellus mollis mi mauris, et gravida massa convallis eget. Donec varius suscipit est. Integer tempor condimentum sapien a egestas. Ut feugiat lacus orci, lacinia consequat ante tincidunt non. Duis luctus, elit a efficitur bibendum, massa ante mattis est, sed laoreet elit magna ut est. Pellentesque quis lectus non nulla ornare luctus eget vel dolor. Cras feugiat sem in urna vehicula, et suscipit leo sagittis. Donec egestas nibh sit amet hendrerit aliquet. Nullam vehicula viverra massa, ut ullamcorper velit imperdiet quis. Curabitur consectetur lorem id neque tempus, at ultrices mauris dapibus. Curabitur nisl felis, venenatis eu justo nec, consequat blandit urna.

Suspendisse convallis vulputate tortor, tincidunt maximus diam tincidunt eget. Nulla tempor massa quis quam imperdiet, eget iaculis magna suscipit. Donec condimentum massa sed tortor faucibus fringilla sit amet nec metus. Duis facilisis, erat nec efficitur maximus, erat arcu iaculis eros, eu auctor risus neque at ex. Nullam tincidunt placerat libero et vehicula. Morbi feugiat massa ac orci aliquet, pulvinar aliquet nulla luctus. Donec non justo dignissim, vehicula neque sit amet, accumsan massa. Praesent sapien lacus, lobortis sed felis eget, condimentum ultrices orci. Ut ultrices augue in mollis rutrum. Nam sodales lobortis lectus vel placerat. Suspendisse feugiat facilisis turpis id iaculis.`

const arrSplit = longText.split(' ');
let nrWords = 0;
let nrEt = 0;
for (let i = 0; i < arrSplit.length; i ++) {
  if ( arrSplit[i] !== ' ' ) {
    nrWords += 1;
  }
  if (arrSplit[i] === 'et') {
    nrEt += 1;
  }
}

console.log(nrWords);
console.log(nrEt);


// Bonus 2 
let phraseToCheck = "Amor, Roma";

let phraseReverse = '';
let phraseToCompare = phraseToCheck.toLowerCase().split(' ,');

for (let i = phraseToCompare.length -1; i >= 0; i--) {
  phraseReverse += phraseToCompare[i];
}

if (phraseReverse == phraseToCompare) {
  console.log("It's Palindrome");
}






