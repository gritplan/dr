function getRandomInt(max) {
    return Math.floor(Math.random() *  max)
}
function next(){
    document.write("You choose to edit a plan");
    //document.write("<p>You are now creating a new plan</p>")
}
function validationEvent (){
    var name = document.getElementById("name").value;
    alert (unqnum + " " + name)
}
var unqnum=getRandomInt(301);
var nameValue = document.getElementById("uniqueID").value;
document.getElementById("uniqueID").value = unqnum;
document.write("<p>unqnum = " + unqnum + "</p>");
let submit = () => {
    let values = "";
    values += "Street = " + document.getElementsByName("street")[0].value + "\n";
    values += "City = " + document.getElementsByName("city")[0].value + "\n";
    values += "State = " + document.getElementsByName("state")[0].value + "\n";
    alert (values)
}
//let next = () => {
 //   let plan_path = "";
    //plan_path += document.getElementsByName("radopt")[0].value +"\n";
    //alert(plan_path);}
