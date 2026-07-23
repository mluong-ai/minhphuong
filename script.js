const output = document.getElementById("output");
const menu = document.getElementById("menu");

const bootText = [
    "> boot",
    "",
    "Initializing LoveOS...",
    "Loading memories...",
    "Scanning user...",
    "Connection established.",
    "",
    "Welcome back ❤️"
];

let i = 0;

function boot(){

    if(i < bootText.length){

        const line = document.createElement("div");
        line.className = "line";
        line.textContent = bootText[i];

        output.appendChild(line);

        output.scrollTop = output.scrollHeight;

        i++;

        setTimeout(boot,500);

    }else{

        menu.classList.remove("hidden");

    }

}

boot();

function clearScreen(){

    output.innerHTML="";

}

function showProfile(){

    clearScreen();

    output.innerHTML=`

<div class="line">
> profile

Name ............. Minh Phương

đáng iu ....... ██████████ 100%

Danger Level ..... ███████░░░ 70%

Favorite Food .... Cứt

Special Skill .... Nói nhiều vcl

Status ........... Online
</div>

`;

}

function showMemories(){

    clearScreen();

    output.innerHTML=`

<div class="line">
> memories

chưa có cái first date đéo nào
First Date x

chưa xem cùng bộ phim nào
Movie x

Bún ngon :3
Fought over food ✔

Today
Still together ✔
</div>

`;

}

function showSecret(){

    clearScreen();

    output.innerHTML=`

<div class="line">
> secret

Nhưng mò tui yêu bạn nhiều lắm 
❤️
</div>

`;

}