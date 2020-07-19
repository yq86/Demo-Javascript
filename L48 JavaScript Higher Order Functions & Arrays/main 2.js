const companies = [
    {name: "Company One", category: "Finance", start: 1981, end:2003 },
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989},
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];



// forEach

/*
for(let i=0; i<companies.length; i++) {
    console.log(companies[i])
}
*/

// same as above

/*
companies.forEach(function(company){ // can also put in "index, companies"
    console.log(company);
})
*/
// same as above
/*
const company = companies.forEach(company => console.log(company))
*/

// filter get certain info from curent array
/*  get 21 and older
let canDrink = [];
for (let i = 0; i < ages.length; i++) {
    if(ages[i]>=21) {
        canDrink.push(ages[i]);
    }else{
        continue;
    }
}
console.log(canDrink);
*/

// same as above

/*
const canDrink = ages.filter(function(age){
    if (age >= 21){
        return true
    }
})

// const canDrink = ages.filter(age=> age >=21) // same as the if loop function above
console.log(canDrink);
*/

/*
// get Retail
const retailCompanies = companies.filter(function(company){
    if(company.category === "Retail"){
        return true
    }
})
// const retailCompanies = companies.filter(company => company.category === "Retail")
console.log(retailCompanies)
*/

/*
// get the 1980s
const yearCompanies = companies.filter(function(company){
    if(company.start >= 1980 && company.start < 1990){
        return true;
    }
})
// const yearCompanies = companies.filter(company => company.start >= 1980 && company.start < 1990)
console.log(yearCompanies)
*/

/* get companies lasted more than 10 years
const lCompany = companies.filter(long => (long.end - long.start) >= 10)
console.log(lCompany)
*/


// map //create new arrays from the current arrays
/*
//creat array of company names
const companyNames = companies.map(company => company.name)
console.log(companyNames)
*/
/*
// get the company names and years
const some = companies.map((company) => `${company.name} [${company.start} - ${company.end}]`);
console.log(some);
*/

/*
// 每个年龄的平方根
const squares = ages.map(each =>Math.sqrt(each) )
console.log(squares)
*/

/*
// 各年龄平方根乘以2
 const sq = ages
 .map(each => Math.sqrt(each))
 .map(ok => ok*2)
console.log(sq)
*/


// sort 按照新规则排序
// sort companies from early builded to later
/*
// way 1
const sortedCompanies = companies.sort(function(c1, c2){
    if(c1.start > c2.start){
        return 1;
    }else{
        return -1;
    }
})
console.log(sortedCompanies);
// way2
const sorts = companies.sort((c1, c2) => c1.start > c2.start ? 1 : -1)
console.log(sorts)
// way3
const sorted = companies.sort((c1,c2) => c1.start - c2.start)
console.log(sorted)
*/

/*
// sort 
const sorts = ages.sort((a, b) => a-b); // ages from low to high
const sorts = ages.sort((a, b) => b-a); // ages from high to low
console.log(sorts)
*/

// reduce
/*
let sum = 0;
for(let i = 0; i < ages.length; i++){
    sum+=ages[i]
}
console.log(sum);
*/
/*
const ageSum = ages.reduce(function(total, age){
    return total + age;
},0)
console.log(ageSum)
*/
/*
const ageSum = ages.reduce((total, age) => total + age, 0);
console.log(ageSum)
*/
/*
const ageSum = ages.reduce((a, b) => a + b, 0)
console.log(ageSum)
*/
/*
const year = companies.reduce(function(total,company){
    return total + (company.end-company.start)
}, 0);
console.log(year)
*/
/*
const years = companies.reduce((total,company) => total +(company.end-company.start), 0);
console.log(years)
*/

/*
const x = ages
.map(age=>age*2)
.filter(age => age >= 40)
.sort((a,b) => a-b)
.reduce((a,b)=>a+b,0)
console.log(x)
*/



