<script>
      let button = document.querySelector(".button-next-page");
      if (button) {
            button.addEventListener("click", function () {
                  window.location.href = "/home";
            });
      }
      console.log(button);
      fetch("https://pokeapi.co/api/v2/pokemon/ditto")
            .then((response) => response.json())
            .then((data) => console.log(data));
</script>