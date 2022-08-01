// Create login Function here.
function Login()
{
    player_name = document.getElementById("player").vlayer;
    localStorage.setItem("player_name", player_name);

    window.location = "gampage.html";
}