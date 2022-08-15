var Name = document.logInform.personName;
var email = document.logInform.personEmail;
var password = document.logInform.personPassword;
var conPassword = document.logInform.personRePassword;
var passwordLogin=document.passwordCheck.password
var forGo='hello'
document.logInform.addEventListener('submit', function (e) {
    e.preventDefault()

    // check Name
    if (Name.value == '') {
        document.getElementById('forName').style.display = "block"
        document.getElementById('forName').innerHTML = "Please , Enter your Name"
    } else if (Name.value.length > 20) {
        document.getElementById('forName').style.display = "block"
        document.getElementById('forName').style.width = "300px"
        document.getElementById('forName').innerHTML = "Chracter length is always between (1-20)"
    }
    else {
        document.getElementById('forName').style.display = "none"
        document.getElementById('forName').innerHTML = ""
        emailChecker()
    }

    // check Email

    function emailChecker() {

        if (email.value == '') {
            document.getElementById('forEmail').style.display = "block"
            document.getElementById('forEmail').innerHTML = "Please , Enter your Email"
        } else {
            function ValidateEmail(mail) {
                if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
                    return (true)
                }
                return (false)
            }
            var checkmail = ValidateEmail(email.value)

            if (checkmail == false) {
                document.getElementById('forEmail').style.display = "block"
                document.getElementById('forEmail').innerHTML = "Please , Enter your right Email (example: abc@gmail.com)"
            } else {
                document.getElementById('forEmail').style.display = "none"
                passwordChecker()
            }
        }

    }

    // password check

    function passwordChecker() {
        if (password.value == '') {
            document.getElementById('forPassword').style.display = "block"
            document.getElementById('forPassword').innerHTML = "Please , Enter your passowrd"
            document.getElementById('forName').style.width = "300px"
        }
        else if (password.value.length < 8) {

            document.getElementById('forPassword').style.display = "block"
            document.getElementById('forPassword').innerHTML = "Password must be greater than 8 character"
        } else {
            document.getElementById('forPassword').style.display = "none"
            document.getElementById('forPassword').innerHTML = ""

            confirmPassword()
        }
    }

    function confirmPassword(){
        if (conPassword.value == '') {
            document.getElementById('forConfirmPassword').style.display="block"
            document.getElementById('forConfirmPassword').innerHTML="please,Re-Enter password"
        }
        else if(password.value != conPassword.value){
            document.getElementById('forConfirmPassword').style.display = "block"
            document.getElementById('forConfirmPassword').innerHTML = "Wrong passowrd"
            document.getElementById('forConfirmPassword').style.width = "300px"
        }
        else{
            document.getElementById('forConfirmPassword').style.display = "none"
            document.getElementById('forConfirmPassword').innerHTML = ""
            okay()
        }
    }

    function okay(){
        document.getElementById('submit').style.background='gray'
        document.getElementById('submit').style.cursor="wait"
        
        setTimeout(function(){
            location.replace('https://arannabarua1971.github.io/beatles/')
        },1000)
    }

})


document.passwordCheck.addEventListener('submit',function(e){
    e.preventDefault()

    if(passwordLogin.value == forGo){
        document.getElementById("overlay").style.transform="scaleX(0)"
    }
    else{
        document.getElementById("wrongPassword").style.display="block"
        
        setTimeout(function(){
            document.getElementById("wrongPassword").style.display="none"

        },2000)
    }
    
})

