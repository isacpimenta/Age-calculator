function calc(){
  const num1_str = document.getElementById('dia_nasc').value
  const num2_str = document.getElementById('mes_nasc').value
  const num3_str = document.getElementById('ano_nasc').value
  
  const relogio = setInterval(function time(){
    let dateToday = new Date();
    let dia = dateToday.getDate();
    let mes = dateToday.getMonth();
    let ano = dateToday.getFullYear();
    
    const anos_vivo = ano - num3_str;
    anos_vivo.textContent = an;

    if (num2_str > mes) {
      mes.textContent = me;
    }
    
    if (num2_str = mes){
      mes.textContent = me;
    }
    
    if (mes > num2_str){
      mes.textContent = me;
    }

    if (num1_str > dia) {
      dia.textContent = di;
    }
    
    if (num1_str = dia){
      dia.textContent = di;
    }
    
    if (dia > num1_str){
      dia.textContent = di;
    }
    
  })
}