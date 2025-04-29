// quiz.js - prosty quiz o jeździe na nartach

const questions = [
    { question: "Jakie buty używa się do jazdy na nartach?", answers: ["Trampki", "Buty narciarskie", "Kozaki"], correct: 1 },
    { question: "Do czego służą kijki narciarskie?", answers: ["Do dekoracji", "Do podpierania się", "Nie mają zastosowania"], correct: 1 },
    { question: "Jaki teren jest najlepszy dla początkujących narciarzy?", answers: ["Stroma góra", "Łagodny stok", "Lodowiec"], correct: 1 },
    { question: "Jak nazywa się wyciąg, który ciągnie narciarza pod górę?", answers: ["Winda", "Talerzyk", "Lina wspinaczkowa"], correct: 1 },
    { question: "Co należy mieć na głowie podczas jazdy?", answers: ["Czapkę", "Hełm", "Kapelusz"], correct: 1 },
    { question: "Jaki element służy do zatrzymywania się na nartach?", answers: ["Ręce", "Krawędzie nart", "Kijki"], correct: 1 },
    { question: "Co oznacza niebieski kolor trasy narciarskiej?", answers: ["Trasa trudna", "Trasa łatwa", "Trasa zamknięta"], correct: 1 },
    { question: "Kiedy najlepiej uczyć się jazdy na nartach?", answers: ["W środku lata", "Zimą", "Jesienią"], correct: 1 },
    { question: "Jakie ubranie jest najlepsze na narty?", answers: ["Lekkie letnie", "Warstwowe zimowe", "Bawełniana koszulka"], correct: 1 },
    { question: "Co należy zrobić przed pierwszym zjazdem?", answers: ["Rozgrzewka", "Zjechać od razu", "Zjeść obiad"], correct: 0 },
    { question: "Jakie narty są odpowiednie dla początkującego?", answers: ["Długie sportowe", "Krótsze, łatwiejsze w prowadzeniu", "Biegowe"], correct: 1 },
    { question: "Jakie są zasady bezpieczeństwa na stoku?", answers: ["Zachowanie ostrożności", "Jechać szybko", "Nie patrzeć na innych"], correct: 0 },
    { question: "Jak transportować narty?", answers: ["Na plecach", "Na ramieniu lub w pokrowcu", "Pod pachą"], correct: 1 },
    { question: "Kto ma pierwszeństwo na stoku?", answers: ["Narciarz z tyłu", "Narciarz z przodu", "Instruktor"], correct: 1 },
    { question: "Czy kask jest obowiązkowy?", answers: ["Nie", "Tylko dla dzieci", "Zalecany dla wszystkich"], correct: 2 }
  ];
  
  const quizContainer = document.getElementById("quiz-container");
  const submitBtn = document.getElementById("submit-quiz");
  const resultContainer = document.getElementById("quiz-result");
  
  let quizFinished = false;
  
  function generateQuiz() {
    questions.forEach((q, index) => {
      const questionElem = document.createElement("div");
      questionElem.className = "question";
      questionElem.innerHTML = `<p>${index + 1}. ${q.question}</p>`;
  
      q.answers.forEach((answer, i) => {
        const label = document.createElement("label");
        label.innerHTML = `<input type="radio" name="q${index}" value="${i}"> ${answer}<br>`;
        questionElem.appendChild(label);
      });
  
      quizContainer.appendChild(questionElem);
    });
  }
  
  function disableQuiz() {
    const inputs = quizContainer.querySelectorAll("input[type='radio']");
    inputs.forEach(input => input.disabled = true);
    quizFinished = true;
  }
  
  function enableQuiz() {
    const inputs = quizContainer.querySelectorAll("input[type='radio']");
    inputs.forEach(input => input.disabled = false);
    quizFinished = false;
  }
  
  function checkAnswers() {
    if (quizFinished) return;
  
    let score = 0;
    questions.forEach((q, index) => {
      const selected = document.querySelector(`input[name='q${index}']:checked`);
      if (selected && parseInt(selected.value) === q.correct) {
        score++;
      }
    });
  
    disableQuiz();
    submitBtn.disabled = true;
    resultContainer.innerHTML = `<p>Twój wynik: ${score} / ${questions.length}</p><button id="restart-btn">Zrób quiz jeszcze raz</button>`;
  
    document.getElementById("restart-btn").addEventListener("click", () => {
      location.reload();
    });
  }
  
  submitBtn.addEventListener("click", checkAnswers);
  generateQuiz();
  
