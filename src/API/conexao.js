import axios from 'axios'

axios.get('/user', {
    params: {

    }
})
    .then(function(response) {
        console.log(response)
    })
    .catch(function(error){
        console.log(error)
    })
    .then(function(){

    });

axios.post('/user', {
       
})
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });