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

}

function nextPageController(){

    if(localStorage.getItem("ischecked")=="true"){
        $("#girisSayfasi").hide();
        $("#buttonArea").show();
        $("#fullModelArea").hide();
        $("#shortModelArea").hide();
    }else{
        $("#girisSayfasi").show();
        $("#buttonArea").hide();
        $("#fullModelArea").hide();
        $("#shortModelArea").hide();
    }

    $("#btnIntro").click(function(){
        $("#girisSayfasi").hide();
        $("#fullModelArea").hide();
        $("#shortModelArea").hide();
        $("#buttonArea").show();
    });

    $("#btnFullModel").click(function(){
        $("#fullModelArea").show();
        $("#shortModelArea").hide();
        $("#buttonArea").hide();
    });

    $("#btnShortModel").click(function(){
        $("#fullModelArea").hide();
        $("#shortModelArea").show();
        $("#buttonArea").hide();
    });

}

