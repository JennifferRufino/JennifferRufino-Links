//Dark mode
const alterarTema = document.querySelector(
    '.mudar-tema input[type="checkbox"]'
  );
    
  const temaAtual = localStorage.getItem("tema");
  
  if (temaAtual) {
    document.documentElement.setAttribute("data-tema", temaAtual);
    if (temaAtual === "dark") {
      alterarTema.checked = true;
    }
  }
    
  function mudarTema(e) {
    if (e.target.checked) {
      document.documentElement.setAttribute("data-tema", "dark");
      localStorage.setItem("tema", "dark");
    }else {
      document.documentElement.setAttribute("data-tema", "light");
      localStorage.setItem("tema", "light");
    }
  }
    
  alterarTema.addEventListener("change", mudarTema, false);
    