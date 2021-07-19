function addUser(){
    var player1=document.getElementById("p1").value;
    var player2=document.getElementById("p2").value;
    localStorage.setItem("p1",player1);
    localStorage.setItem("p2",player2);
    window.location="game_page.html";
}