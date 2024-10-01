// Configuración
const STORY_DURATIONS = [5000, 7000, 6000];
const TRANSITION_DELAY = 500;

// Elementos del DOM
const elements = {
    storiesContainer: document.querySelector('.stories-container'),
    storyItems: document.querySelectorAll('.story-item'),
    storyModal: document.getElementById('storyModal'),
    modalImage: document.getElementById('modalImage'),
    modalUsername: document.getElementById('modalUsername'),
    progressBar: document.querySelector('.progress-bar'),
    closeModal: document.getElementById('closeModal'),
    prevStory: document.getElementById('prevStory'),
    nextStory: document.getElementById('nextStory'),
    likeButton: document.getElementById('likeButton'),
    commentButton: document.getElementById('commentButton'),
    messageModal: document.getElementById('messageModal'),
    cancelMessage: document.getElementById('cancelMessage'),
    sendMessage: document.getElementById('sendMessage'),
    messageUsername: document.getElementById('messageUsername'),
    messageText: document.getElementById('messageText')
};

// Estado
let currentStoryIndex = 0;
let storyInterval;

// Funciones principales
function openStory(index) {
    currentStoryIndex = index;
    const storyItem = elements.storyItems[index];
    elements.modalImage.src = storyItem.querySelector('.story-image').src;
    elements.modalUsername.textContent = storyItem.querySelector('.story-username').textContent;
    elements.storyModal.style.display = 'flex';
    startProgressBar(STORY_DURATIONS[index]);
}

function closeStoryModal() {
    elements.storyModal.style.display = 'none';
    clearInterval(storyInterval);
    elements.progressBar.style.width = '0%';
}

function startProgressBar(duration) {
    let progress = 0;
    const increment = 100 / (duration / 100);
    elements.progressBar.style.width = '0%';
    
    clearInterval(storyInterval);
    storyInterval = setInterval(() => {
        progress += increment;
        elements.progressBar.style.width = `${Math.min(progress, 100)}%`;
        if (progress >= 100) {
            clearInterval(storyInterval);
            nextStoryIn();
        }
    }, 100);
}

function nextStoryIn() {
    setTimeout(() => {
        currentStoryIndex = (currentStoryIndex + 1) % elements.storyItems.length;
        openStory(currentStoryIndex);
    }, TRANSITION_DELAY);
}

// Manejadores de eventos
const handlers = {
    storyClick: (e) => openStory(Array.from(elements.storyItems).indexOf(e.currentTarget)),
    closeModal: closeStoryModal,
    commentButton: () => {
        console.log('Botón de comentario presionado');
        elements.messageUsername.textContent = elements.modalUsername.textContent;
        elements.messageModal.style.display = 'flex';
    },
    sendMessage: () => {
        const messageText = elements.messageText.value.trim();
        if (messageText) {
            alert(`Mensaje enviado a ${elements.messageUsername.textContent}: ${messageText}`);
            elements.messageModal.style.display = 'none';
            elements.messageText.value = '';
        } else {
            alert('Escribe un mensaje antes de enviar.');
        }
    },
    cancelMessage: () => {
        console.log('Botón de cancelar presionado');
        elements.messageModal.style.display = 'none';
    },
    navigation: (e) => {
        const direction = e.target.id === 'prevStory' ? -1 : 1;
        currentStoryIndex = (currentStoryIndex + direction + elements.storyItems.length) % elements.storyItems.length;
        openStory(currentStoryIndex);
    },
    likeButton: () => alert('Historia marcada como favorita')
};

// Asignación de eventos
elements.storyItems.forEach(item => item.addEventListener('click', handlers.storyClick));
elements.closeModal.addEventListener('click', handlers.closeModal);
elements.likeButton.addEventListener('click', handlers.likeButton);
elements.commentButton.addEventListener('click', handlers.commentButton);
elements.sendMessage.addEventListener('click', handlers.sendMessage);
elements.cancelMessage.addEventListener('click', handlers.cancelMessage);
elements.prevStory.addEventListener('click', handlers.navigation);
elements.nextStory.addEventListener('click', handlers.navigation);
