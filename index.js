// Write your solution in this file!
let employee = {
    
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
const newObject = Object.assign({}, employee)
newObject[key] = value
return newObject
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    const newObject = Object.assign(employee)
newObject[key] = value
return newObject
}
function deleteFromEmployeeByKey(employee, key) {
    const newObject = Object.assign({}, employee)
    delete newObject [key]
    return newObject
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    const newObject = Object.assign(employee)
newObject[key] = 'name'
delete newObject [key]
return newObject
}