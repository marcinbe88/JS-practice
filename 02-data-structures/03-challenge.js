const students = [
    {
        id: 1,
        name: "Jacek",
        grades: [5, 3, 4, 2, 5, 5]
    },
    {
        id: 2,
        name: "Ewa",
        grades: [2, 3, 3, 3, 2, 5]
    },
    {
        id: 3,
        name: "Zygmunt",
        grades: [2, 2, 4, 3, 3, 3]
    },
    {
        id: 4,
        name: "Alfonso",
        grades: []
      }
]

let result = []

function getStudentTopGrades() {
    for (let i = 0; i < students.length; i++) {
        if (students[i].grades == 0) {
            result.push(0)
        } else {
            const maxGrade = Math.max(...students[i].grades)
            result.push(maxGrade)
        }
    }
    console.log(result)
}

getStudentTopGrades()