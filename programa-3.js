const arregloMixto = [4, "dos", 8, "tres", 5, 9, 1, "cero"];

for (let i = 0; i < arregloMixto.length; i++) {
  if (typeof arregloMixto[i] === "number") {
    console.log(arregloMixto[i]);
  }
}
