//-------------------SCROLLING(NAV)-------------------------
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
	var currentScrollPos = window.pageYOffset;
	if (prevScrollpos > currentScrollPos) {
		document.getElementById("nav").style.top = "0";
	} else {
		document.getElementById("nav").style.top = "-100px";
	}
	prevScrollpos = currentScrollPos;
};
//----------AUTO EXPANSION OF TXT FIELD---------------------

textarea = document.querySelector("#text-field");
textarea.addEventListener('input', autoResize, false);

function autoResize() {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
}

//------------------------FORM VALIDATION-----------------------------------
 
var nameError = document.getElementById("name-error")
var emailError = document.getElementById("email-error")
var messageError = document.getElementById("message-error")

function validateName(){
    var name =  document.getElementById("name-field").value;
    if(name.length == 0){
        nameError.innerHTML = "Name is required";
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-za-z]*$/)){
        nameError.innerHTML = "Enter full name";
        return false;
    }

    nameError.innerHTML = '<img src="./images/icons8-checkmark.svg" alt="">';
    return true;
    
}

function validateEmail(){
    var mail =  document.getElementById("email-field").value;
    if(mail.length == 0){
        emailError.innerHTML = "Email is required";
        return false;
    }
    if(!mail.match(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)){
        emailError.innerHTML = "Invalid Email";
        return false;
    }
    emailError.innerHTML = '<img src="./images/icons8-checkmark.svg" alt="">';

    return true;
    
}

function validateMessage(){
    var message =  document.getElementById("text-field").value;
    if(message.length == 0){
        messageError.innerHTML = "Message can't be empty";
        return false;
    }
    messageError.innerHTML = '<img src="./images/icons8-checkmark.svg" alt="">';
    
    return true;
    
}


// ----------------------------------Animate--------------------------------------------
$(document).ready(function(){
    $('[name="myname"]').focus(function(){
        $(this).animate({height:'30px', width:'150px', border:'5px solid blue'}); // default timer: 400ms
        $(this).animate({height:'30px', width:'150px', border:'5px solid blue'},1200,'linear',()=>{
            $(this).fadeTo(500,0.5);
        }); 
    });
});






























