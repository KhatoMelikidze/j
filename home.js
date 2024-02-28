const translations = {
  english: {
      title: "Aurora",
      description: "The latest fashion news, beauty coverage, celebrity style, fashion week updates, culture reviews, and videos on Aurora.com.",
      buttonText:"Learn more",
      sectionTitle:"Our Team",
      sectionTitleTitle:"Barbora Polednová",
      sectionDescription:"EDITOR IN CHIEF",
      titleTwo:"Manny moreno",
      descriptionTwo:"PUBLISHER",
      titleThree:"Darya Sythnyk",
      descriptionThree:"HEAD OF EDITORIAL CONTENT",
      buttonTwo:"View more",
      sectionTitleTwo:"Today’s Stories",
      sectionTitleThree:"More on Aurora",
      footerTitle:"Aurora",
      footerDescription:"The latest fashion news, beauty coverage, celebrity style, fashion week updates, culture reviews, and videos on Aurora.com."
  
  },
  French: {
      title: "Aurora",
      description: "Les dernières nouvelles de la mode, la couverture beauté, le style des célébrités, les mises à jour de la semaine de la mode, les critiques culturelles et les vidéos sur Aurora.com.",
      buttonText:"Apprendre encore plus",
      sectionTitle:"Notre équipe",
      sectionTitleTitle:"Barbora Polednova",
      sectionDescription:"ÉDITEUR EN CHEF",
      titleTwo:"Manny Moreno",
      descriptionTwo:"ÉDITRICE",
      titleThree:"Daria Sythnyk",
      descriptionThree:"RESPONSABLE DU CONTENU EDITORIAL",
      buttonTwo:"Voir plus",
      sectionTitleTwo:"Les histoires d'aujourd'hui",
      sectionTitleThree:"En savoir plus sur Aurore",
      footerTitle:"Aurora",
      footerDescription:"Les dernières nouvelles de la mode, la couverture beauté, le style des célébrités, les mises à jour de la semaine de la mode, les critiques culturelles et les vidéos sur Aurora.com."
  
  },
  georgian: {
      title: "ავრორა",
      description: "უახლესი მოდის სიახლეები, სილამაზის გაშუქება, ცნობილი ადამიანების სტილი, მოდის კვირეულის განახლებები, კულტურის მიმოხილვები და ვიდეოები Aurora.com-ზე.",
      buttonText:"გაიგე მეტი",
      sectionTitle:"ჩვენი გუნდი",
      sectionTitleTitle:"ბარბორა პოლედნოვა",
      sectionDescription:"ᲛᲗᲐᲕᲐᲠᲘ ᲠᲔᲓᲐᲥᲢᲝᲠᲘ",
      titleTwo:"მენი მორენო",
      descriptionTwo:"გამომცემელი",
      titleThree:"დარია სითნიკი",
      descriptionThree:"სარედაქციოს ხელმძღვანელი",
      buttonTwo:"გაიგე მეტი",
      sectionTitleTwo:"დღევანდელი სიახლეები",
      sectionTitleThree:"მეტი ავრორას შესახებ",
      footerTitle:"ავრორა",
      footerDescription:"უახლესი მოდის სიახლეები, სილამაზის გაშუქება, ცნობილი ადამიანების სტილი, მოდის კვირეულის განახლებები, კულტურის მიმოხილვები და ვიდეოები Aurora.com-ზე."
  }
};

function changeLanguage(language) {
  const { title, description,buttonText,sectionTitle,sectionTitleTitle,sectionDescription,
       titleTwo,descriptionTwo,titleThree,descriptionThree,buttonTwo,sectionTitleTwo,sectionTitleThree,
       footerTitle,footerDescription} = translations[language];
  document.getElementById('title').textContent = title;
  document.getElementById('description').textContent = description;
  document.getElementById('buttonText').textContent = buttonText;
  document.getElementById('sectionTitle').textContent = sectionTitle;
  document.getElementById('sectionTitleTitle').textContent =sectionTitleTitle;
  document.getElementById('sectionDescription').textContent =sectionDescription;
  document.getElementById('titleTwo').textContent = titleTwo;
  document.getElementById('descriptionTwo').textContent = descriptionTwo;
  document.getElementById('titleThree').textContent = titleThree;
  document.getElementById('descriptionThree').textContent = descriptionThree;
  document.getElementById('buttonTwo').textContent = buttonTwo;
  document.getElementById('sectionTitleTwo').textContent = sectionTitleTwo;
  document.getElementById('sectionTitleThree').textContent = sectionTitleThree;
  document.getElementById('footerTitle').textContent = footerTitle;
  document.getElementById('footerDescription').textContent = footerDescription;
}

// --------------------------------------------------------------------------------------------

const questions = [
{ question: "რომაულ მითოლოგიაში რისი ქალღმერთი იყო avrora?", answer: "განთიადის" },
{ question: "რომელ მომღერალს მიანიჭეს ‘The Digital Download Queen’-ის წოდება, რადგან მისი სიმღერები ყველაზე მეტად იყო გადმოტვირთული ინტერნეტ რესურსებიდან, დაახლოებით 75,000,000-ჯერ.", answer: "რიანა" },
{ question: "ფილმში 'ნათლა' რომელ ხილზე საუბარი? 'როდესაც კადრში (ამ ხილს) დაინახავთ გახსოვდეთ რომ მალე სიკვდილის ან ხიფათის მომსწრე გახდებით'", answer: "ფორთოხალი" }
];

let currentQuestionIndex = -1;
let selectedWord = "";
let guessedWord = [];
let wrongLetters = [];
const maxWrongAttempts = 6;
let currentQuestion = "";
let isProcessingGuess = false;

function selectQuestion() {
currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
const questionObj = questions[currentQuestionIndex];
currentQuestion = questionObj.question;
selectedWord = questionObj.answer;
guessedWord = Array(selectedWord.length).fill("_");
wrongLetters = [];
}

function initialize() {
selectQuestion();
updateDisplay();
}

function updateDisplay() {
document.getElementById("question").innerText = currentQuestion;
document.getElementById("word").innerText = guessedWord.join(" ");
document.getElementById("letters").innerText = wrongLetters.join(", ");
}

function handleGuess(letter) {
if (isProcessingGuess) return; 
isProcessingGuess = true;

if (selectedWord.includes(letter)) {
    for (let i = 0; i < selectedWord.length; i++) {
        if (selectedWord[i] === letter) {
            guessedWord[i] = letter;
        }
    }
} else {
    wrongLetters.push(letter);
}
updateDisplay();
setTimeout(() => { 
    checkGameOver();
    isProcessingGuess = false; 
}, 500); 
}

function checkGameOver() {
if (guessedWord.join("") === selectedWord) {
    alert("გილოცავ! ეს სწორი პასუხია!");
    initialize();
} else if (wrongLetters.length === maxWrongAttempts) {
    alert("თამაში დასრულდა! სიტყვა იყო: " + selectedWord);
    initialize();
}
}

function startGame() {
initialize();
}

document.getElementById("startButton").addEventListener("click", startGame);
document.addEventListener("keypress", function(event) {
let letter = String.fromCharCode(event.keyCode).toLowerCase();
if (letter.match(/[a-z\u10D0-\u10F1]/u)) {
    handleGuess(letter);
}
});

startGame();
