function form_Validate() {
    let name = document.getElementById('ename').value
    //alert(name)
    if (name == "" && name.length <= 5) {
        document.getElementById('ename_Message').innerHTML = "Please Enter User Name"
        //alert("Pls Enter Name")
    }

    let email = document.getElementById('eemail').value;
    if (email == "") {
        document.getElementById('eemail_Message').innerHTML = "Pleae Enter Email Id"
    }


    return false
}