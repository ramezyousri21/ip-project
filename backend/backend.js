const data = require('./data.json')

const fs = require('fs')




function AddNewData(user){
    console.log("Adding")
    data.push(user)
    fs.writeFileSync('./data.json' , JSON.stringify(data))
    
}
function Search(searchname){
    var res = data.filter(
        (user)=>{
            return user.Name == searchname
        }
    )
    return res
}
function Delete(username){
    var res = data.filter(
        (user)=>{
            return user.Name != username
        }
    )
    fs.writeFileSync('./data.json' , '[]')
    fs.writeFileSync('./data.json' , JSON.stringify(res))
    return "Done"
    
}


function Update(username , new_data){
    var s = Delete(username)
    AddNewData(new_data)
}

module.exports ={Search, Update, AddNewData, Delete}
