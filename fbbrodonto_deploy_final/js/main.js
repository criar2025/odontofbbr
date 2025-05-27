// Funcionalidades principais
document.addEventListener('DOMContentLoaded', function() {
    // Assistente Virtual (DON)
    const chatInput = document.querySelector('.chat-input input');
    const sendBtn = document.querySelector('.send-btn');
    const chatMessages = document.querySelector('.chat-messages');
    
    const assistantResponses = [
        "Essa é uma ótima pergunta! Na odontologia, é importante considerar que cada caso é único. Para esse tema específico, recomendo revisar os materiais sobre anatomia dental primeiro.",
        "De acordo com os estudos mais recentes, o tratamento recomendado para esse caso envolveria uma abordagem conservadora, começando com avaliação radiográfica completa.",
        "Existem várias abordagens para esse caso. A literatura sugere que a técnica de preparo cavitário minimamente invasivo tem mostrado excelentes resultados a longo prazo.",
        "Essa é uma dúvida comum! A melhor prática clínica indica que o diagnóstico precoce é fundamental. Recomendo revisar o resumo de Patologia Oral em nossa plataforma.",
        "Excelente pergunta! Em resumo, o procedimento correto envolve a remoção completa do tecido cariado, seguida de restauração com material adequado ao caso específico."
    ];
    
    function addMessage(text, isUser) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        messageDiv.classList.add(isUser ? 'user' : 'bot');
        
        const messageContent = document.createElement('div');
        messageContent.classList.add('message-content');
        
        const messagePara = document.createElement('p');
        messagePara.textContent = text;
        
        messageContent.appendChild(messagePara);
        messageDiv.appendChild(messageContent);
        chatMessages.appendChild(messageDiv);
        
        // Scroll para o final da conversa
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    function handleSendMessage() {
        const message = chatInput.value.trim();
        if (message) {
            addMessage(message, true);
            chatInput.value = '';
            
            // Simular resposta do assistente após 1 segundo
            setTimeout(() => {
                const randomResponse = assistantResponses[Math.floor(Math.random() * assistantResponses.length)];
                addMessage(randomResponse, false);
            }, 1000);
        }
    }
    
    if (sendBtn) {
        sendBtn.addEventListener('click', handleSendMessage);
    }
    
    if (chatInput) {
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                handleSendMessage();
            }
        });
    }
    
    // Lazy loading para imagens
    if ('IntersectionObserver' in window) {
        const lazyImages = document.querySelectorAll('img[loading="lazy"]');
        
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.removeAttribute('loading');
                    observer.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    // Modo escuro
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    if (prefersDarkScheme.matches) {
        document.body.classList.add('dark-mode');
    }
    
    // Acessibilidade - aumentar fonte
    const increaseFontBtn = document.querySelector('.increase-font');
    const decreaseFontBtn = document.querySelector('.decrease-font');
    let currentFontSize = 100;
    
    if (increaseFontBtn) {
        increaseFontBtn.addEventListener('click', function() {
            if (currentFontSize < 150) {
                currentFontSize += 10;
                document.body.style.fontSize = currentFontSize + '%';
                localStorage.setItem('fontSize', currentFontSize);
            }
        });
    }
    
    if (decreaseFontBtn) {
        decreaseFontBtn.addEventListener('click', function() {
            if (currentFontSize > 70) {
                currentFontSize -= 10;
                document.body.style.fontSize = currentFontSize + '%';
                localStorage.setItem('fontSize', currentFontSize);
            }
        });
    }
    
    // Recuperar tamanho de fonte salvo
    const savedFontSize = localStorage.getItem('fontSize');
    if (savedFontSize) {
        currentFontSize = parseInt(savedFontSize);
        document.body.style.fontSize = currentFontSize + '%';
    }
    
    // Service Worker para funcionalidade offline
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
            navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
                console.log('ServiceWorker registration successful');
            }, function(err) {
                console.log('ServiceWorker registration failed: ', err);
            });
        });
    }
});
