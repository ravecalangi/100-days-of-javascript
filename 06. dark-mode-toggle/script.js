
const icon = document.getElementById("icon");
const body = document.body;
const toggleBtn = document.querySelector(".toggle-button");

icon.addEventListener('click', () => {

    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-toggle-off');
        icon.classList.add('fa-toggle-on');
    } else {
        icon.classList.remove('fa-toggle-on');
        icon.classList.add('fa-toggle-off');
    }

});