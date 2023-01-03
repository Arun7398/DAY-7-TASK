var request = new XMLHttpRequest(); 
request.open("GET","https://restcountries.com/v3.1/all",true) 
request.send() 
request.onload = function() {
var data = request.response   
var result = JSON.parse(data)
var res = result.filter((ele)=>ele.population<200000)





console.log(res2)
var res2 = res.map((ele)=>ele.population)
console.log(res2) 
var res2 = result.forEach(ele=>{
console.log(ele.name.common+ele.capital+ele.flags.png)});
var res2 = result.reduce((acc,cv)=>acc+cv.population,0)
console.log(res2) 
var res2 = result.filter((ele)=>{
    for(let key in ele.currencies){
        if(ele.currencies[key].code ==="USD"){
            console.log(res2)
        }
    }
    })


}