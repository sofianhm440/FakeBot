const pertanyaan = document.getElementById("pertanyaan");
const jawaban = document.getElementById("jawaban");
const loaders = document.getElementById("loaders");
const container = document.getElementsByClassName("container");

let init = 0;

const botSay = (data) => {
    return [
        "Halo, perkenalkan nama saya gigabot. siapa nama kamu?",
        `Halo ${data?.nama}, berapa usia kamu?`,
        `Oalah ${data?.usia}, hobi kamu apa nih?`,
        `Wow sama dong aku juga suka ${data?.hobi}, btw kamu punya pacar?`,
        `Ohh ${data?.pacar}, yowes kalo begitu. Udah yaa?`,
    ]
}

pertanyaan.innerHTML = botSay()[0];

let usersData = [];

function botStart() {
    if (jawaban.value.length === 0) return alert("Isi jawaban dulu");
    init++
    if(init === 1) {
        botDelay({nama: jawaban.value})
    } else if (init === 2) {
        botDelay({usia: jawaban.value})
    } else if (init === 3) {
        botDelay({hobi: jawaban.value})
    } else if (init === 4) {
        botDelay({pacar: jawaban.value})
    } else if (init === 5) {
        finishing()
    } else {
        botEnd()
    }
}

function botDelay(jawabanUser) {
    loaders.style.display = "block";
    container[0].style.filter= "blur(8px)";
    setTimeout(() => {
        pertanyaan.innerHTML = botSay(jawabanUser)[init]
        loaders.style.display = "none";
        container[0].style.filter = "none";
    }, [1500]);
    usersData.push(jawaban.value);
    jawaban.value = "";
}

function finishing() {
    pertanyaan.innerHTML = `Thank you yaa ${usersData[0]} udah main ke gigabot, 
    next kita ${usersData[2]} bareng yukkk`;
    jawaban.value = "Okey, Thank u";
}

function botEnd() {
    alert(`Terimakasih ${usersData[0]}, kamu saya arahkan ke halaman utama yaa!`);
    window.location.reload();

}