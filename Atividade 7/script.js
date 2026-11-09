function aleatorio(){
    let min = 1;
    let max = 100;
    let dif = max - min;
    let aleatorio = Math.random();
    let num = min + Math.trunc(dif * aleatorio);

    let mostrar = document.getElementById('resultado');
if(num == 13){
    alert("Você é burro!");
}
if(num == 67){
    alert("Você tem problema?  Qual o seu problema?");
}

    mostrar.innerHTML =`<p>Acabei de pensar no numero ${num}.<\p>`;
}