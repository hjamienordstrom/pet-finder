import tokenService from "./tokenService"
const BASE_URL = '/api/pets/'

 function addPet(form){
    // console.log(form)
    return fetch(BASE_URL + 'addpet', {
        method: 'POST',
        body: form,
        headers: {'Authorization': 'Bearer ' + tokenService.getToken()}
    }).then(res => res.json())
}
 function getAllPets(){
    return fetch(BASE_URL + 'index', {
        method: 'GET',
        headers: {'Authorization': 'Bearer ' + tokenService.getToken()}
    }).then(res => res.json())
}
function getOne(id){
    return fetch(BASE_URL + 'pet/' + id, {
        method: 'GET',
        headers: {'Authorization': 'Bearer ' + tokenService.getToken()}
    }).then(res => res.json())
}

function deletePet(id){
    console.log(id)
    return fetch(BASE_URL + 'delete/' + id,{
        method:'DELETE',   
        headers: {'Authorization': 'Bearer ' + tokenService.getToken()}
    }).then(res=> res.json())
}

export default{
    addPet,
    getAllPets,
    getOne,
    deletePet
}