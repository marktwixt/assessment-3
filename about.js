console.log("hello world");

function handleSubmit(evt) {
  evt.preventDefault();

  alert(
    "Form has been successfully submitted"
  );
}

let form = document.querySelector("#contact");

form.addEventListener("submit", handleSubmit);

const coolCat = document.querySelector('#coolCat');

coolCat.addEventListener("mouseover", () => {
  alert(
    "Looking great as usual!"
  );
});
