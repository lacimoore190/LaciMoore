var displayScript = document.getElementById("scriptReturned");
var scriptBtn = document.getElementById("scriptBtn");

if (scriptBtn) {
  scriptBtn.addEventListener("click", generateScript);
}

var factlist = [
  "In New York City in 2018, 73% of shooting victims were Black, athough Black residents comprise only 24% of the city's population",
  "African Americans are incarcerated in state prisons at five times the rate of whites",
  "African Americans between the ages of 10 and 34 die from homicide at 13 times the rate of White Americans",
  "Innocent Black people spend an average of 13.8 years wrongly imprisoned before being exonerated - about 45% longer than innocent White people",
];

var fact = document.getElementById("fact");
var factBtn = document.getElementById("factBtn");
var count = 0;

if (factBtn) {
  factBtn.addEventListener("click", displayFact);
}

function displayFact() {
  fact.innerHTML = factlist[count];
  count++;
  if (count == factlist.length) {
    count = 0;
  }
}
