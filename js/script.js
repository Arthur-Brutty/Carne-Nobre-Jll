const formChurrasco = document.getElementById("form-churrasco");

// O mesmo script também é carregado nas páginas sem calculadora.
if (formChurrasco) {
  const peso = formChurrasco.elements.peso;
  const preco = formChurrasco.elements.preco;
  const resultado = document.getElementById("resultado");
  const moeda = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  });

  formChurrasco.addEventListener("submit", (evento) => {
    evento.preventDefault();

    try {
      if (!peso.validity.valid) {
        throw new Error("Informe um peso maior que zero, com até 3 casas decimais.");
      }
      if (!preco.validity.valid) {
        throw new Error("Informe um preço maior que zero, com até 2 casas decimais.");
      }

      const total = peso.valueAsNumber * preco.valueAsNumber;
      if (!Number.isFinite(total)) {
        throw new Error("Os valores são grandes demais para calcular.");
      }
      resultado.textContent = "Total: " + moeda.format(total);
    } catch (erro) {
      resultado.textContent = erro.message;
    }
  });
}