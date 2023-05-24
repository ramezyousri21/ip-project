var data  = [
    {"Name":"Ramez"},
    {"Name":"Hitler"}
]

console.log(data)
var index = data.indexOf((obj)=>{
    return obj.Name === "Ramez"
})

console.log("Data",data[index])