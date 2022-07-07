function csv(test){
    let csvt = test
    .match(/(.+(?=\#))|(^(?!\#).+)/mg)
    .map(a => a.split(","))
    .map(a => {
        let b = {}
        b.x = a[0]
        b.y = a[1]
        b.name = a[2]
        b.population = a[3]
        return b
    })
    .sort((a,b)=> b.population- a.population)
    .slice(0,10)
    .reduce((obj = {},masobj,reit) => {
        console.log(obj)
        obj[masobj.name] = {
            population: masobj.population,
            rating:++reit
        }
        return obj
    })
    delete csvt[""]
    console.log(csvt)
    return (res) => {
        let mas = Object.keys(csvt)
        mas.forEach(a => {
            let reg = new RegExp(a,"gi")
            res = res.replace(reg, `${a} на ${csvt[a].rating} месте в топе самых крутейших городов в Украине с населением ${csvt[a].population} `)
        })
        return res
    }
}

let test=`44.38,34.33,Алушта,31440,
49.46,30.17,Біла Церква,200131,
49.54,28.49,Бердичів,87575,
46.49,36.58,Бердянськ,121692,
49.15,28.41,Вінниця,356665,
45.40,34.29,Джанкой,43343,`
let d = csv(test)
console.log(d("Біла Церква"))
