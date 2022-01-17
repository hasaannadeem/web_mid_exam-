function myValidation(){

    console.log('code start here');

    var name = document.getElementById("name");
    var rollno = document.getElementById("rollno");
    var email = document.getElementById("email");
    var semester = document.getElementById("semester");
    var section = document.getElementById("section");
    var course = document.getElementsByName("course");
    
    var courseName = "";
    for(var i = 0; i < course.length; i++){
        if(course[i].checked){
        courseName = course[i].value;
        }
    }

    console.log(courseName);

    var assign = document.getElementById("assign");
    var quiz = document.getElementById("quiz");
    var mid = document.getElementById("mid");
    var final = document.getElementById("final");
    var validation = true;

    //alert(course.value);

    if(name.value != ""){
        name.style.borderColor = "#ebebeb";
        
    }else{
        name.style.borderColor = "red";
        validation = false;
        
    }

    var regular_expression_rollno = /^(S1|F1){1}BSCS[0-9]{4}$/;
    if(regular_expression_rollno.test(rollno.value)){
        rollno.style.borderColor = "#ebebeb";
        
    }else{
        rollno.style.borderColor = "red";
        validation = false;
    }

    var regular_expression_email = /\S+@\S+\.\S+/;
    if(regular_expression_email.test(email.value)){
        email.style.borderColor = "#ebebeb";
        
    }else{
        email.style.borderColor = "red";
        validation = false;
    }

    var regular_expression_section = /^WAD \([A-Z]{1}\)$/;
    if(regular_expression_section.test(section.value)){
        section.style.borderColor = "#ebebeb";
        
    }else{
        section.style.borderColor = "red";
        validation = false;
    }

    if(parseInt(assign.value) >= 0 && parseInt(assign.value) < 11){
        assign.style.borderColor = "#ebebeb";
        
    }else{
        assign.style.borderColor = "red";
        validation = false;
    }

    if(parseInt(quiz.value) >= 0 && parseInt(quiz.value) < 11){
        quiz.style.borderColor = "#ebebeb";
        
    }else{
        quiz.style.borderColor = "red";
        validation = false;
    }

    if(parseInt(mid.value) >= 0 && parseInt(mid.value) < 31){
        mid.style.borderColor = "#ebebeb";
        
    }else{
        mid.style.borderColor = "red";
        validation = false;
    }

    if(parseInt(final.value) >= 0 && parseInt(final.value) < 51){
        final.style.borderColor = "#ebebeb";
        
    }else{
        final.style.borderColor = "red";
        validation = false;
    }
   
    // validation = true;
    // console.log(validation);
    if(validation == false){
        document.getElementById("message").innerHTML = 'Please fill the form correctly';
        console.log('Please fill the form correctly');

        var form = document.getElementById("userform");
        var result = document.getElementById("result");
        form.style.display = "block";
        result.style.display = "none";

        document.getElementById("resName").innerHTML = '';
        document.getElementById("resRollno").innerHTML = '';
        document.getElementById("resEmail").innerHTML = '';
        document.getElementById("resSemester").innerHTML = '';
        document.getElementById("resSection").innerHTML = '';
        document.getElementById("resCourse").innerHTML = '';
        document.getElementById("resTotalMarks").innerHTML = '';
        document.getElementById("resStatus").innerHTML = '';

    }else{
        console.log('validation is true');
        document.getElementById("message").innerHTML = '';
        
        var form = document.getElementById("userform");
        var result = document.getElementById("result");
        form.style.display = "none";
        result.style.display = "block";
        
        document.getElementById("resName").innerHTML = name.value;
        document.getElementById("resRollno").innerHTML = rollno.value;
        document.getElementById("resEmail").innerHTML = email.value;
        document.getElementById("resSemester").innerHTML = semester.value;
        document.getElementById("resSection").innerHTML = section.value;
        document.getElementById("resCourse").innerHTML = courseName;

        var total = parseInt(assign.value) + parseInt(quiz.value) + parseInt(mid.value) + parseInt(final.value);
        document.getElementById("resTotalMarks").innerHTML = total;
        
        if(total < 50){
            document.getElementById("resStatus").innerHTML = 'Fail';
        }else{
            document.getElementById("resStatus").innerHTML = 'Pass';
        }
        
        
    }
    console.log('code end here');
    return true;
}

function formRest(){
    var name = document.getElementById("name");
    var rollno = document.getElementById("rollno");
    var email = document.getElementById("email");
    var semester = document.getElementById("semester");
    var section = document.getElementById("section");
    var assign = document.getElementById("assign");
    var quiz = document.getElementById("quiz");
    var mid = document.getElementById("mid");
    var final = document.getElementById("final");

    name.value="";
    rollno.value="";
    email.value="";
    semester.value="";
    section.value="";
    assign.value="";
    quiz.value="";
    mid.value="";
    final.value="";

}
