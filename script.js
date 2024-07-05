console.log('hello welcome to my portfolio')
//typing text
document.addEventListener('DOMContentLoaded', function() {
    var typedText = document.getElementById('type-effect');

    var typingEffect = new Typed(typedText, {
        strings: ["Designer", "Developer", "Programmer"],
        loop: true,
        typeSpeed: 100, 
        backSpeed: 80,
        backDelay: 2000,
        onStringTyped: function(arrayPos, self) {
            var currentString = self.strings[arrayPos];
            typedText.className = ''; // Reset class
            if (currentString === "Designer") {
                typedText.classList.add('designer');
            } else if (currentString === "Developer") {
                typedText.classList.add('developer');
            } else if (currentString === "Programmer") {
                typedText.classList.add('programmer');
            }
        }
    });
});