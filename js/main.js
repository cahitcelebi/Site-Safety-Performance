/**
 * Created by cahit on 21.3.2015.
 */

$(document).ready(function(){
initialize();

});


function initialize(){

    messageControler();
    nextPageController();

}

function messageControler(){
    $('input[type="checkbox"]').click(function(){
        if($(this).prop("checked") == true){
            localStorage.setItem("ischecked",true);
        }
        else if($(this).prop("checked") == false){
            localStorage.setItem("ischecked",false);
        }
    });

    $("#btnIntro").click(function(){
        alert(localStorage.getItem("ischecked"));
    });

}

function nextPageController(){

    if(localStorage.getItem("ischecked")=="true"){
        $("#girisSayfasi").hide();
    }else{
        $("#girisSayfasi").show();
    }
}

