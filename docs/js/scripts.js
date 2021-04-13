function showDescription(descript){
    $("#description").html("Description: " + descript);
}

function hideDescription(){
    $("#description").html("");
}

function validate(){
    var txtDob = $("#datearrive").val();
    var da = new Date(txtDob);
    if(da < new Date()){
        alert("Date of Arrival is not valid. Date has to be after today.");
        return false;
    }
    var phone = $("#phone").val();
    if(phone.length != 10 || isNaN(phone)){
        alert("Phone number is not valid or not in a valid format.");
        return false;
    }
}