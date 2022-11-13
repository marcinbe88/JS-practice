const monthMapping = {
    January: "The Evil",
    February: "The Vile",
    March: "The Cruel",
    April: "The Trashy",
    May: "The Despicable",
    June: "The Embarrassing",
    July: "The Disreputable",
    August: "The Atrocious",
    September: "The Twirling",
    October: "The Orange",
    November: "The Terrifying",
    December: "The Awkward"
}

const dayMapping = {
0: "Mustache",
1: "Pickle",
2: "Hood Ornament",
3: "Raisin",
4: "Recycling Bin",
5: "Potato",
6: "Tomato",
7: "House Cat",
8: "Teaspoon",
9: "Laundry Basket",
}

function getVillainName(str) {
    let result = []
    const month = str.split(" ")[0]
    const day = str.split(" ")[1].split("").pop()
    for (let i = 0; i < Object.getOwnPropertyNames(monthMapping).length; i++) {
        if (Object.getOwnPropertyNames(monthMapping)[i] === month) {
            result.push(Object.values(monthMapping)[i])
        }
    }
    for (let i = 0; i < Object.getOwnPropertyNames(dayMapping).length; i++) {
        if (Object.getOwnPropertyNames(dayMapping)[i] === day) {
            result.push(Object.values(dayMapping)[i])
        }
    }
    console.log(result.join(' '))
}

getVillainName("May 3") 
getVillainName("November 30")
getVillainName("April 21")