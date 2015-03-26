/**
 * Created by cahit on 21.3.2015.
 */

$(document).ready(function(){
initialize();
});

var fnaName,fnaValue;


function initialize(){
    objectController();
}


function objectController(){
    //intro check controller
    $('#introCheck').click(function(){
        if($(this).prop("checked") == true){
            localStorage.setItem("introChecked",true);
        }
        else if($(this).prop("checked") == false){
            localStorage.setItem("introChecked",false);
        }
    });

    if(localStorage.getItem("introChecked")=="true"){
        window.location.assign("index.html#mainMenu");
    }

    //full Model içerisindeki checkBox değerinin bulunduğu ve localStorage set edildiği satırlar
    $('#fullModelPage input[type="checkbox"]').click(function(){
        fnaName=$(this).attr("name");
        fnaValue=fnaName.substr(3);
        if($(this).prop("checked") == true){
            localStorage.setItem("fna"+fnaValue,true);
            $("#slider"+fnaValue).hide();
            localStorage.setItem("f"+fnaValue,"na");
        }
        else if($(this).prop("checked") == false){
            localStorage.setItem("fna"+fnaValue,false);
            $("#slider"+fnaValue).show();
            localStorage.setItem("f"+fnaValue,$("#fslider"+fnaValue).val());
        }
    });

    //fullModel Page event handlers
    if(window.location.hash=="#fullModelPage"){
        fullModelPageLoaded();
    }
    $("#fullBtnClicked").click(function(){
        fullModelPageLoaded();
    });
    $("#fullBtnClicked2").click(function(){
        fullModelPageLoaded();
    });
}


function fullModelPageLoaded(){

   //na checkbox getItem controller
    for(var i=101;i<=112;i++){
        if(localStorage.getItem("fna"+i)=="true"){
            $("#fna"+i).prop("checked",true);
            $("#slider"+i).hide();
        }

        if(localStorage.getItem("f"+i)==""){
            if(localStorage.getItem("f"+i)!="na"){
                localStorage.setItem("f"+i,50);
            }
        }
        else{
           //slider position getItem
        }
    }


    $("#frecordsBtn").click(function(){
        setLocalStorageFullRecords();
    });
}

function setLocalStorageFullRecords(){
   //fill the records tables
    for(var i=101;i<=112;i++){
        if(localStorage.getItem("f"+i)!="na"){
            localStorage.setItem("f"+i,$("#fslider"+i).val());
            $("#"+i).html("<i>Your answer:</i> "+"<b>"+localStorage.getItem("f"+i)+"</b>");
        }else{
            localStorage.setItem("f"+i,"na");
            $("#"+i).html("<i>Your answer:</i> "+"<b>NA</b>");
        }
    }


}



