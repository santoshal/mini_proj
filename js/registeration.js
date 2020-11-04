$(document).ready(() => {

    $("form").submit((a) => {
        a.preventDefault();  //to prevent auto submission of form
        var name = $("#name").val();
        var mail = $("#mail").val();
        console.log(name + " " + mail);


        $.ajax({
            url: "http://localhost:3000/profile",
            method: "POST",
            data: {
                "name": name,
                "email": mail,
            },
            success: (x) => {
                // alert(x.name +" posted");
                console.log(x);


            }
        })
    })


})