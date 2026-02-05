function validateForm(){
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    var mobile=document.getElementById("mobile").value;

    if(name=""){
        alert("Name Cannot Be Empty");
        return false;
    }
    
    if(email=""){
        alert("Email Cannot be empty");
        return false;
    }
    if(password.length<6){
        alert("Password should have more than 6 characters");
        return false;
    }
    if(!/^\d{10}$/.test(mobile)){
        alert("Phone No is not valid");
        return false;
    }
    alert("Form submitted successfully!");
    return true;

}