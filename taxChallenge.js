
function calculateTax(income) {

    if(typeof(income)!=='number') return 'income value not accepted, please enter a number'

    let tax = 0

    if (income<=18200) return tax.toFixed(2).toString()
    else if (income >=18201 && income <=37000) return lvl2Tax(income)
    else if (income >=37001 && income <=87000) return lvl3Tax(income)
    else if (income >=87001 && income <=180000) return lvl4Tax(income)
    else if (income >=180001) return lvl5Tax(income)
    

    function lvl5Tax(income) {
        tax = (income-180000)*.45 + (180000-87000)*.37 + (87000-37000)*.325 + (37000-18200)*.19
        return tax.toFixed(2).toString()
    }

    function lvl4Tax(income) {
        tax = (income-87001)*.37 + (87000-37000)*.325 + (37000-18200)*.19
        return tax.toFixed(2).toString()
    }
    function lvl3Tax(income) {
        tax = (income-37000)*.325 + (37000-18200)*.19
        return tax.toFixed(2).toString()
    }
    function lvl2Tax(income) {
        tax = (income-18200)*.19
        return tax.toFixed(2).toString()
    }


    
}


console.log(calculateTax(180001.00))
console.log(calculateTax(37009))
console.log(calculateTax(37001))
console.log(calculateTax(1.00))
