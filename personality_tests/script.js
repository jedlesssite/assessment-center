let currentQuestion = 0;
let answers = [];

// قاعدة البيانات (تقدر توسعها)
const questions = [
  {
    section: "الشخصية - Big Five",
    question: "أنا شخص أحب تجربة أشياء جديدة",
    options: [
      { text: "أوافق بشدة", score: { openness: 2 }, explanation: "يدل على انفتاح عالي" },
      { text: "أوافق", score: { openness: 1 }, explanation: "انفتاح متوسط" },
      { text: "لا أوافق", score: { openness: -1 }, explanation: "انفتاح منخفض" },
      { text: "لا أوافق بشدة", score: { openness: -2 }, explanation: "انغلاق واضح" }
    ]
  },
  {
    section: "الشخصية - يونغ",
    question: "أفضل العمل وحدي",
    options: [
      { text: "نعم", score: { introvert: 1 }, explanation: "يميل للانطواء" },
      { text: "لا", score: { extrovert: 1 }, explanation: "يميل للانفتاح" }
    ]
  },
  {
    section: "المهني",
    question: "هل تحب حل المشاكل التقنية؟",
    options: [
      { text: "نعم", score: { tech: 1 }, explanation: "ميول تقنية" },
      { text: "لا", score: { social: 1 }, explanation: "ميول اجتماعية" }
    ]
  },
  {
    section: "تفكير عددي",
    question: "إذا زاد العدد من 100 إلى 150، كم نسبة الزيادة؟",
    options: [
      { text: "50%", score: { correct: 1 }, explanation: "الإجابة صحيحة" },
      { text: "25%", score: {}, explanation: "خطأ" },
      { text: "100%", score: {}, explanation: "خطأ" },
      { text: "75%", score: {}, explanation: "خطأ" }
    ]
  },
  {
    section: "تفكير لفظي",
    question: "النص: أحمد يدرس يوميًا. هل أحمد مهمل؟",
    options: [
      { text: "صحيح", score: {}, explanation: "خطأ" },
      { text: "خطأ", score: { correct: 1 }, explanation: "الإجابة الصحيحة" }
    ]
  }
];

function showQuestion() {
  const q = questions[currentQuestion];
  const container = document.getElementById("quiz-container");

  container.innerHTML = `
    <h3>${q.section}</h3>
    <p>${q.question}</p>
    ${q.options.map((opt, index) => `
      <div class="answer" onclick="selectAnswer(${index})">
        ${opt.text}
      </div>
    `).join("")}
    <div id="explanation"></div>
  `;

  updateProgress();
}

function selectAnswer(index) {
  const q = questions[currentQuestion];
  const explanationDiv = document.getElementById("explanation");

  answers[currentQuestion] = q.options[index].score;

  explanationDiv.innerHTML = `<p>${q.options[index].explanation}</p>`;
}

document.getElementById("nextBtn").addEventListener("click", () => {
  if (!answers[currentQuestion]) {
    alert("اختر إجابة أولاً");
    return;
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
});

function updateProgress() {
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  document.getElementById("progress-bar").style.width = progress + "%";
}

function showResult() {
  let result = {};

  answers.forEach(ans => {
    for (let key in ans) {
      result[key] = (result[key] || 0) + ans[key];
    }
  });

  document.querySelector(".container").innerHTML = `
    <h2>النتيجة</h2>
    <pre>${JSON.stringify(result, null, 2)}</pre>
  `;
}

showQuestion();