/**
 * Created by cahit on 21.3.2015.
 */

$(document).ready(function(){
initialize();

});


function initialize(){

    $('input[type="checkbox"]').click(function(){
        if($(this).prop("checked") == true){
            alert("true");
        }
        else if($(this).prop("checked") == false){
            alert("false");
        }
    });

    $("#btnIntro").click(function(){



    });



}

