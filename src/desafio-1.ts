// Entendendo o Desafio

// Agora é a sua hora de brilhar e construir um perfil de destaque na DIO! Explore todos os conceitos explorados até aqui e replique (ou melhore, porque não?) este projeto prático. Para isso, crie seu próprio repositório e aumente ainda mais seu portfólio de projetos no GitHub, o qual pode fazer toda diferença em suas entrevistas técnicas 😎

// Neste repositório, insira todos os links e arquivos necessários para seu projeto, seja um arquivo de banco de dados ou um link para o template no Figma.

// Dica: Se o expert forneceu um repositório Github, você pode dar um "fork" no repositório dele para organizar suas alterações e evoluções mantendo uma referência direta ao código-fonte original.

// Instruções para entrega
// # 1️⃣ Desafio Classificador de nível de Herói

// **O Que deve ser utilizado**

// - Variáveis
// - Operadores
// - Laços de repetição
// - Estruturas de decisões

// ## Objetivo

// Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

// Se XP for menor do que 1.000 = Ferro
// Se XP for entre 1.001 e 2.000 = Bronze
// Se XP for entre 2.001 e 5.000 = Prata
// Se XP for entre 5.001 e 7.000 = Ouro
// Se XP for entre 7.001 e 8.000 = Platina
// Se XP for entre 8.001 e 9.000 = Ascendente
// Se XP for entre 9.001 e 10.000= Imortal
// Se XP for maior ou igual a 10.001 = Radiante

// ## Saída

// Ao final deve se exibir uma mensagem:
// "O Herói de nome **{nome}** está no nível de **{nivel}**"


// Bons estudos 😉

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