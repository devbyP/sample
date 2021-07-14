(function(){
  const button = document.getElementById("button");
  const resetBtn = document.getElementById("reset");
  let state = 0;

  button.addEventListener("click", () => {
    state = state + 1;
    button.innerHTML = state;
  });

  resetBtn.addEventListener("click", () => {
    state = 0;
    button.innerHTML = "0!";
  });

  const form = document.getElementById("test-form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    fetch("/", {
      method: "POST",
      headers: {"content-type": "application/json"},
      body: JSON.stringify({
        test: document.getElementById("test").value
      })
    })
  })

})();
