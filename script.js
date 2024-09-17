const button = document.getElementById('show-message-btn');
const hiddenMessage = document.getElementById('hidden-message');
const heartsContainer = document.getElementById('hearts-container');

button.addEventListener('click', function() {
    hiddenMessage.style.display = 'block';
    
    // Generar corazones flotantes
    for (let i = 0; i < 10; i++) {
        const heart = document.createElement('div');
        heart.classList.add('hearts');
        heart.style.left = `${Math.random() * 90}%`;
        heartsContainer.appendChild(heart);
    }
    
    // Desactivar el botón después de hacer clic
    button.disabled = true;
});
