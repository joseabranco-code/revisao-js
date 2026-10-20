const idades = [12, 17, 18, 22, 15, 30]

let filter = idades.filter((idade) => idade > 20);

let map = idades.map ((idade) => idade * 20);

let filterEhMapJuntos = idades
    .map((idade) => idades * 2)
    .filter((idade) => idades > 20)

console.log(filterEhMapJuntos);
    
