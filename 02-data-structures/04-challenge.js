const groups = [
    { 
      id: 1,
      name: "Grupa 1",
      studentIds: [4, 2, 1]
    }
]

const students = [
    { 
        id: 1,
        name: "John"
    },
    {
        id: 2,
        name: "Steve"
    },
    {
        id: 4,
        name: "Marcin"
    }
]

const result = []
    result.id = groups[0].id,
    result.name = groups[0].name,
    result.studentsNames = []

function getGroupsWithStudents() {
    for (let i = 0; i < groups[0].studentIds.length; i++) {
        for (let j = 0; j < students.length; j++) {
            if (groups[0].studentIds[i] === students[j].id) {
                result.studentsNames.push(students[j])
            }
        }
    }
    console.log(result)
}

getGroupsWithStudents()
