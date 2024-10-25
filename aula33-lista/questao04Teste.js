const dividir = require("./questao04");

try {
  console.log(dividir(10, 2));
  console.log(dividir(10, 0));
} catch (error) {
  console.log(error.message);
}
