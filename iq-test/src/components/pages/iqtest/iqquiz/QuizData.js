import iqtest1 from '../../../../assets/iq-test-images/iqtest1.png'
import './quizdata.css'
const quizData = [
  {
    questionImg: <img src={iqtest1} alt='iqtest1' class='images-quiz'/>,
    options: [
      { optionText: "A", isCorrect: true },
      { optionText: "Б", isCorrect: false },
      { optionText: "В", isCorrect: false },
      { optionText: "Г", isCorrect: false },
      { optionText: "Д", isCorrect: false },
      { optionText: "Е", isCorrect: false }
    ]
  },
  {
    questionImg: <img src={iqtest1} alt='iqtest1' class='images-quiz'/>,
    options: [
      { optionText: "A", isCorrect: true },
      { optionText: "Б", isCorrect: false },
      { optionText: "В", isCorrect: false },
      { optionText: "Г", isCorrect: false },
      { optionText: "Д", isCorrect: false },
      { optionText: "Е", isCorrect: false }
    ]
  },
  {
    questionImg: <img src={iqtest1} alt='iqtest1' class='images-quiz'/>,
    options: [
      { optionText: "A", isCorrect: true },
      { optionText: "Б", isCorrect: false },
      { optionText: "В", isCorrect: false },
      { optionText: "Г", isCorrect: false },
      { optionText: "Д", isCorrect: false },
      { optionText: "Е", isCorrect: false }
    ]
  },
  // Add more questions here
];

export default quizData;
