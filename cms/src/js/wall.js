    // Abrir perfil (simulación)
    const openProfileBtn = document.querySelector('.open-profile-btn');
    openProfileBtn.addEventListener('click', function() {
        alert('Abriendo perfil de Offgrid...');
    });

    // Función de búsqueda
    const searchInput = document.querySelector('.search-bar input');
    const searchBtn = document.querySelector('.search-icon');

    searchBtn.addEventListener('click', function() {
        const searchTerm = searchInput.value;
        if (searchTerm) {
            alert(`Buscando jugador: ${searchTerm}`);
        } else {
            alert('Por favor, introduce un nombre para buscar.');
        }
    });

    // Simulación de búsqueda al presionar enter
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const searchTerm = searchInput.value;
            if (searchTerm) {
                alert(`Buscando jugador: ${searchTerm}`);
            } else {
                alert('Por favor, introduce un nombre para buscar.');
            }
        }
    });

    // Botón de VIP (simulación)
    const vipBtn = document.querySelector('.vip-btn');
    vipBtn.addEventListener('click', function() {
        alert('Unirse al Club VIP no está disponible en este momento.');
    });

    // Botones de fotos y temas
    const fotosBtn = document.querySelector('.action-btn:nth-child(1)');
    const temasBtn = document.querySelector('.action-btn:nth-child(2)');

    fotosBtn.addEventListener('click', function() {
        alert('Abriendo "Mis fotos"...');
    });

    temasBtn.addEventListener('click', function() {
        alert('Abriendo "Mis temas"...');
    });

    // Noticias interactivas (simulación)
    const newsItems = document.querySelectorAll('.news-item');
    newsItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            alert(`Abriendo noticia ${index + 1}...`);
        });
    });

    // Publicaciones interactivas
    const postItems = document.querySelectorAll('.post-item');
    postItems.forEach((post, index) => {
        post.addEventListener('click', function() {
            alert(`Abriendo publicación ${index + 1}...`);
        });
    });

    // Solicitudes de chat
    const chatRequest = document.querySelector('.chat-request');
    chatRequest.addEventListener('click', function() {
        alert('Abriendo chat con lNebula...');
    });