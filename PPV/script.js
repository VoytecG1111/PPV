function exportToJSON() {
    const userQuestion = document.getElementById("NazwaFirmy").value;
    const userAnswer = document.getElementById("NIP").value;
    
    const data = {
      "odpowiedzi": 
        {
          "nazwaFirmy": userQuestion,
          "NIP": userAnswer
        }
    };
    console.log(data)
}