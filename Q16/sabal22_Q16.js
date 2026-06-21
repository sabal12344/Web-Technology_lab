function validateForm() {

    var name = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var phone = document.getElementById("phone").value;
    var course = document.getElementById("course").value;

   
    if(name == "" || /\d/.test(name)) {
        alert("Enter valid name");
        return false;
    }

    if(address == "") {
        alert("Address cannot be empty");
        return false;
    }

    
    if(username == "" || !/^[A-Za-z0-9_]+$/.test(username)) {
        alert("Invalid username");
        return false;
    }

    
    if(email == "" || email.indexOf("@") == -1) {
        alert("Invalid email");
        return false;
    }

   
    if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(password)) {
        alert("Invalid password");
        return false;
    }

    
    if(!/^(98|97|96)\d{8}$/.test(phone)) {
        alert("Invalid phone number");
        return false;
    }

  
    var gender = document.getElementsByName("gender");
    var selected = false;

    for(var i = 0; i < gender.length; i++) {
        if(gender[i].checked) {
            selected = true;
        }
    }

    if(!selected) {
        alert("Select gender");
        return false;
    }

 
    if(course == "") {
        alert("Select a course");
        return false;
    }

    alert("Form Submitted Successfully");
    return true;
}