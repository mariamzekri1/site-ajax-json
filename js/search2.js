
 function getJ() {
   var myReaquest=new XMLHttpRequest();
   myReaquest.onreadystatechange=function(){
       if(this.readyState==4 && this.status==200){
        var users=JSON.parse(this.responseText);
        var tit=document.getElementById("search").value;
        for(var i=0;i<=users.length;i++){
        if(users[i].titre===tit){

        document.getElementById("1").innerHTML=users[i].titre;
       document.getElementById("2").innerHTML=users[i].date;
       document.getElementById("3").innerHTML=users[i].tags;
       document.getElementById("4").innerHTML=users[i].lien;
       document.getElementById("5").innerHTML=users[i].aprenants[0];
       document.getElementById("6").innerHTML=users[i].aprenants[1];}
       }}
   
   }
   myReaquest.open("GET","./users.json");
   myReaquest.send();
}
getJ();
function rech(){
   getJ();

}
