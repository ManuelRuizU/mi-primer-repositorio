
document.addEventListener("DOMContentLoaded", function() {
    var color1Elements = document.querySelectorAll('h1.color1');
    var color2Elements = document.querySelectorAll('p.color2');

    color1Elements.forEach(function(element) {
        element.addEventListener('click', function() {
            this.style.color = 'blue';
        });

        element.addEventListener('dblclick', function() {
            this.style.color = 'black';
        });
    });

    color2Elements.forEach(function(element) {
        element.addEventListener('click', function() {
            this.style.color = 'tomato';
        });

        element.addEventListener('dblclick', function() {
            this.style.color = 'black';
        });
    });
});



