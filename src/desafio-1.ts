let heroName: string = "BigHero"
let heroNivel: string = ""
let heroXP: number = 1000090

if (heroXP <= 1000){
    heroNivel = "Nível Ferro"
}
else if (heroXP <= 2000){
    heroNivel ="Nível Bronze"
}
else if (heroXP <= 5000){
    heroNivel ="Nível Prata"
}
else if (heroXP <= 7000){
    heroNivel ="Nível Ouro"
}
else if (heroXP <= 8000){
    heroNivel ="Nível Platina"
}
else if (heroXP <= 9000){
    heroNivel ="Nível Ascendente"
}
else if (heroXP <= 10000){
    heroNivel ="Nível Imortal"
}
else if (heroXP >= 10000){
    heroNivel ="Nível Radiante"
}

console.log("O heói com nome de " + heroName + " está no nível " + heroNivel)