function nextPage(page) {
    document.querySelectorAll('.container').forEach(container => {
        container.style.display = 'none';
    });
    document.getElementById(`page${page}`).style.display = 'block';
}

function prevPage(page) {
    document.querySelectorAll('.container').forEach(container => {
        container.style.display = 'none';
    });
    document.getElementById(`page${page}`).style.display = 'block';
}

document.getElementById("valentineForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let response = document.querySelector('input[name="valentine"]:checked');
    if (response) {
        document.getElementById("response").innerText = `She said: ${response.value}`;
    } else {
        document.getElementById("response").innerText = "Please make a selection!";
    }
});


