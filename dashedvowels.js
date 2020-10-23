function dashed(str) {
    let vowels = "aeiouAEIOU"
    let arr = [...str]
	for(let i = 0; i < arr.length; i++) {
        if(vowels.indexOf(arr[i]) > -1) {
            arr[i] = `-${arr[i]}-`
        }
    }
    return arr.join('')
}

function dashed2(str) {
    return str.replace(/[aeiou]/gi, (c) => `-${c}-`)
}

dashed("Edabit")
dashed("Carpe Diem")
dashed("Fight for your right to party!")

dashed2("Edabit")
dashed2("Carpe Diem")
dashed2("Fight for your right to party!")
