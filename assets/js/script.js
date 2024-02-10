function executar() {
  const result_ano = document.getElementById("an");
  const result_mes = document.getElementById("me");
  const result_dia = document.getElementById("di");

  const DateInput = parseInt(document.getElementById("dia_nasc").value);
  const MonthInput = parseInt(document.getElementById("mes_nasc").value);
  const YearInput = parseInt(document.getElementById("ano_nasc").value);

  // Verifica se os valores inseridos são números e estão dentro dos limites válidos
  if (isNaN(DateInput) || DateInput < 1 || DateInput > 31) {
    alert("Data inválida. Por favor, insira um dia válido.");
    result_dia.textContent = "--";
    result_mes.textContent = "--";
    result_ano.textContent = "--";
    return;
  }

  if (isNaN(MonthInput) || MonthInput < 1 || MonthInput > 12) {
    alert("Mês inválido. Por favor, insira um mês válido.");
    result_dia.textContent = "--";
    result_mes.textContent = "--";
    result_ano.textContent = "--";
    return;
  }

  if (isNaN(YearInput) || YearInput < 1900 || YearInput > 2024) {
    alert("Ano inválido. Por favor, insira um ano válido.");
    result_dia.textContent = "--";
    result_mes.textContent = "--";
    result_ano.textContent = "--";
    return;
  }

  const birthDateInput = YearInput + "-" + MonthInput + "-" + DateInput;
  const birthDate = new Date(birthDateInput);
  const currentDate = new Date();

  let ageYears = currentDate.getFullYear() - birthDate.getFullYear();
  let ageMonths = currentDate.getMonth() - birthDate.getMonth();
  let ageDays = currentDate.getDate() - birthDate.getDate();

  if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
    ageYears--;
    ageMonths += 12;
  }

  if (ageDays < 0) {
    const lastMonthDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
    ageMonths--;
    ageDays += lastMonthDate.getDate();
  }

  result_mes.textContent = ageDays;
  result_dia.textContent = ageMonths;
  result_ano.textContent = ageYears;
}