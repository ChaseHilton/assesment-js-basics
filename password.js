let password = "taylortaylor1"
console.log('step 1 check to see it we are longer then 10 characters')

if(password.length >= 10 && password.length <= 20 && password.indexOf('password') === -1){
    console.log('password has more than 10 characters and no more than 20 characters')
    console.log('step 2 check to see if the password has a number:')
    console.log(containsnumber(password))
    
}else{
    console.log('password needs at least 10 characters and no more than 20 characters to meet requirments ')
} 
function containsnumber(str){
    var hasNumber = /\d/.test(str);

    if (hasNumber) {
        console.log('pass: password contains at a number')
        console.log('step 3 check to see if the password contains a letter:')
        console.log(containsAnyletter(str))
        return hasNumber
    } else {
        console.log('fail: this password is missing a number')
    }
}


function containsAnyletter(str) {
    var hasLetter = /[a-zA-Z]/.test(str)
    if (hasLetter) {
        console.log('pass: this password contains a letter')
        console.log('success')
        return hasLetter
    } else {
        console.log('this password is missing a letter')
    }
}