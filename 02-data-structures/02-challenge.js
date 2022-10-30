const students = [
    { name: "Zbigniew", tasksDone: 150, hoursSpent: 160 },
    { name: "Krystyna", tasksDone: 1, hoursSpent: 1 },
    { name: "Krzysztof", tasksDone: 100, hoursSpent: 80 },
    { name: "Seba", tasksDone: 200, hoursSpent: 40 },
    { name: "Dagmara", tasksDone: 50, hoursSpent: 100 },
  ];
  
  const requirements = {
    minHoursSpent: 80,
    minTasksDone: 100,
  };

  function checkJuniorReq() {
    let passedStudents = []
    let failedStudents =[]
        for (let i = 0; i < students.length; i++) {
            if (students[i].tasksDone >= requirements.minTasksDone && 
                students[i].hoursSpent >= requirements.minHoursSpent) {
                passedStudents.push(students[i].name)
            } else {
                failedStudents.push(students[i].name)
            }
        }
        console.log(`${passedStudents.join(", ")} dobra robota!`)
        console.log(`${failedStudents.join(", ")} do roboty gamonie!`)
  }

  checkJuniorReq()