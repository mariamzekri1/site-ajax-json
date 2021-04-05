function getJson() {
    var myReaquest=new XMLHttpRequest();
    myReaquest.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
         var users=JSON.parse(this.responseText);
         document.getElementById("titdrone").innerHTML=users[0].titre;
        document.getElementById("date").innerHTML=users[0].date;
        document.getElementById("tag").innerHTML=users[0].tags;
        document.getElementById("lien").innerHTML=users[0].lien;
        document.getElementById("ap1").innerHTML=users[0].aprenants[0];
        document.getElementById("ap2").innerHTML=users[0].aprenants[1];

        
        document.getElementById("tit1").innerHTML=users[1].titre;
        document.getElementById("date1").innerHTML=users[1].date;
        document.getElementById("tag1").innerHTML=users[1].tags;
        document.getElementById("lien1").innerHTML=users[1].lien;
        document.getElementById("ap11").innerHTML=users[1].aprenants[0];
        document.getElementById("ap21").innerHTML=users[1].aprenants[1];

        
        document.getElementById("tit2").innerHTML=users[2].titre;
        document.getElementById("date2").innerHTML=users[2].date;
        document.getElementById("tag2").innerHTML=users[2].tags;
        document.getElementById("lien2").innerHTML=users[2].lien;
        document.getElementById("ap12").innerHTML=users[2].aprenants[0];
        document.getElementById("ap22").innerHTML=users[2].aprenants[1]; 
        }
    }
    myReaquest.open("GET","./users.json");
    myReaquest.send();
}
getJson();

function add() {
   document.getElementById("button1").style.display="none";
   document.getElementById("parag").style.display="block";
   document.getElementById("moins1").style.display="block";
}
function moins() {
    document.getElementById("button1").style.display="block";
    document.getElementById("parag").style.display="none";
    document.getElementById("moins1").style.display="none";
 }
