const typeWriter = document.getElementById('typewriter-text');
const text = 'Front end Developer';

typeWriter.innerHTML = text;
typeWriter.style.setProperty('--characters', text.length);

