name_students=[];
function Submit(){
    var name_1=document.getElementById("student_1").value;
    var name_2=document.getElementById("student_2").value;
    var name_3=document.getElementById("student_3").value;
    var name_4=document.getElementById("student_4").value;

name_students.push(name_1);
name_students.push(name_2);
name_students.push(name_3);
name_students.push(name_4);

document.getElementById("display_name").innerHTML=name_students;

document.getElementById("submit").style.display="none";


}
function sorting(){
name_students.sort();
document.getElementById("display_name").innerHTML=name_students; 

}

