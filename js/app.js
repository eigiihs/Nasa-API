const btnSearch = document.getElementById("btnBusca");

btnSearch.addEventListener("click", () => {
  
  const data = document.getElementById("campoBusca").value;

  window.location.href = `result.html?search=${encodeURIComponent(data)}`;

}); 