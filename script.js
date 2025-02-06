document.getElementById("jogForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let selectedOption = document.querySelector('input[name="jog"]:checked');
    let response = document.getElementById("response");

    if (selectedOption) {
        response.textContent = "You selected: " + selectedOption.value;
    } else {
        response.textContent = "Please select an option!";
    }
});
