const course = [
    {
      id: 1,
      name: '[HTML] Narzędzia i podstawy składni',
      length: '03:00:00'
    },
    {
      id: 2,
      name: '[HTML] Semantyka i dostępność',
      length: '01:02:33'
    },
    {
      id: 3,
      name: '[CSS] Kaskada i precyzyjność selektorów',
      length: '02:30:00'
    },
    {
      id: 4,
      name: '[CSS] Box model i position',
      length: '01:00:12'
    },
    {
      id: 5,
      name: '[CSS] Flexbox',
      length: '01:11:33'
    },
      {
      id: 6,
      name: '[JS] Zmienne, stałe, funkcje, scope',
      length: '01:09:43'
    },
    {
      id: 7,
      name: '[JS] Wyrażenia i instrukcje warunkowe',
      length: '02:37:20'
    },
    {
      id: 8,
      name: '[JS] Funkcje wyższego rzędu i domknięcia',
      length: '01:30:42'
    },
    {
      id: 9,
      name: '[JS] Fetch API',
      length: '01:14:48'
    },
]

function getModulesDuration() {
    let htmlTimeInSeconds = []
    let cssTimeInSeconds = []
    let jsTimeInSeconds = []

    for (let i = 0; i < course.length; i++) {
        let separateHoursMinutesSeconds = course[i].length.split(":")
        separateHoursMinutesSeconds = [
            +separateHoursMinutesSeconds[0], 
            +separateHoursMinutesSeconds[1],
            +separateHoursMinutesSeconds[2]
        ]
        let seconds = separateHoursMinutesSeconds[0]*3600 + separateHoursMinutesSeconds[1]*60 + separateHoursMinutesSeconds[2]
       
        if (course[i].name.includes("[HTML]")) {
            htmlTimeInSeconds = +htmlTimeInSeconds + +seconds  
        } else if (course[i].name.includes("[CSS]")) {
            cssTimeInSeconds = +cssTimeInSeconds + +seconds 
        }
        if (course[i].name.includes("[JS]")) {
            jsTimeInSeconds = +jsTimeInSeconds + +seconds  
        }
        
    }
    const courseTotalTimeInSeconds = htmlTimeInSeconds + cssTimeInSeconds + jsTimeInSeconds
    console.log(
        `
        Kurs Frontend trwa:
        ${Math.floor(courseTotalTimeInSeconds/3600)} godzin, 
        ${Math.floor((courseTotalTimeInSeconds%3600)/60)} minut i 
        ${(courseTotalTimeInSeconds%3600)%60} sekund.
        Moduł HTML: ${Math.floor(htmlTimeInSeconds/3600)} godzin ${Math.floor((htmlTimeInSeconds%3600)/60)} minut
        Moduł CSS: ${Math.floor(cssTimeInSeconds/3600)} godzin ${Math.floor((cssTimeInSeconds%3600)/60)} minut
        Moduł JavaScript: ${Math.floor(jsTimeInSeconds/3600)} godzin ${Math.floor((jsTimeInSeconds%3600)/60)} minut
        `
    )
}

getModulesDuration()