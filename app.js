
const questions =  [{
    "question": "A flashing red traffic light signifies that a driver should do what?",
    "A": "stop",
    "B": "speed up",
    "C": "proceed with caution",
    "D": "honk the horn",
    "answer": "A"
  }, {
    "question": "A knish is traditionally stuffed with what filling?",
    "A": "potato",
    "B": "creamed corn",
    "C": "lemon custard",
    "D": "raspberry jelly",
    "answer": "A"
  }, {
    "question": "A pita is a type of what?",
    "A": "fresh fruit",
    "B": "flat bread",
    "C": "French tart",
    "D": "friend bean dip",
    "answer": "B"
  }, {
    "question": "A portrait that comically exaggerates a person's physical traits is called a what?",
    "A": "landscape",
    "B": "caricature",
    "C": "still life",
    "D": "Impressionism",
    "answer": "B"
  }, {
    "question": "A second-year college student is usually called a what?",
    "A": "sophomore",
    "B": "senior",
    "C": "freshman ",
    "D": "junior ",
    "answer": "A"
  }, {
    "question": "A student who earns a J.D. can begin his or her career as a what?",
    "A": "lawyer",
    "B": "bricklayer",
    "C": "doctor",
    "D": "accountant",
    "answer": "A"
  }]

  let index = 0;
  let total = questions.length
  let right = 0,
      wrong = 0;

const  quesBox = document.getElementById("quesBox")
const optionInput = document.querySelectorAll(".options")


  const leadQuestion = () =>{
    if(index === total){
        return endQuiz();
    }
    reset();
    const data = questions[index]
    quesBox.innerText = `${index+1}) ${data.question}`;
    optionInput[0].nextElementSibling.innerText = data.A    
    optionInput[1].nextElementSibling.innerText = data.B    
    optionInput[2].nextElementSibling.innerText = data.C    
    optionInput[3].nextElementSibling.innerText = data.D    
}


const submitQuiz=()=>{
      const data = questions[index]
    const ans = getAnswer()
    if(ans=== data.answer){
        right ++;
    }else{
        wrong++;
    }
    index++
    leadQuestion()
    return;
  }

  const getAnswer =()=> {
    let ansr;
    optionInput.forEach(
        (input)=>{
            if(input.checked){
            ansr =  input.value;
            }
    })
    return ansr;
  }
  const reset = ()=> {
    optionInput.forEach(
        (input)=>{
            input.checked = false
        })
  }

  const endQuiz= ()=>{
    document.getElementById("box").innerHTML = `
    <h3>Thank you for Playing </h3>
    <h2>${right} / ${total} Are Currect </h2>`
  }
  leadQuestion()