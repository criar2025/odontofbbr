// Funções para as especializações odontológicas
document.addEventListener('DOMContentLoaded', function() {
    // Abrir modal de apostilas
    const apostilaBtns = document.querySelectorAll('.especialidade-btn.apostila');
    apostilaBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const especialidade = this.getAttribute('data-especialidade');
            const modal = document.getElementById(`modal-apostilas-${especialidade}`);
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });

    // Abrir modal de questões
    const questoesBtns = document.querySelectorAll('.especialidade-btn.questoes');
    questoesBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const especialidade = this.getAttribute('data-especialidade');
            const modal = document.getElementById(`modal-questoes-${especialidade}`);
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });

    // Fechar modais
    const closeBtns = document.querySelectorAll('.close-modal');
    closeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const modal = this.closest('.modal');
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    });

    // Fechar modal ao clicar fora
    window.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Verificar respostas das questões de IA
    const iaOptions = document.querySelectorAll('.ia-option');
    iaOptions.forEach(option => {
        option.addEventListener('click', function() {
            const questionContainer = this.closest('.ia-question');
            const options = questionContainer.querySelectorAll('.ia-option');
            const explanation = questionContainer.querySelector('.ia-explanation');
            
            options.forEach(opt => {
                opt.classList.remove('selected');
                if (opt.getAttribute('data-correct') === 'true') {
                    opt.classList.add('correct');
                } else if (opt === this && opt.getAttribute('data-correct') !== 'true') {
                    opt.classList.add('incorrect');
                }
            });
            
            this.classList.add('selected');
            explanation.style.display = 'block';
        });
    });

    // Gerar novas questões de IA
    const generateBtns = document.querySelectorAll('.ia-generate-btn');
    generateBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const especialidade = this.getAttribute('data-especialidade');
            const questionsContainer = document.querySelector(`#modal-questoes-${especialidade} .ia-section`);
            
            // Aqui seria a chamada para gerar novas questões
            // Por enquanto, apenas mostra uma mensagem
            const loadingMsg = document.createElement('p');
            loadingMsg.textContent = 'Gerando novas questões...';
            loadingMsg.classList.add('loading-msg');
            questionsContainer.appendChild(loadingMsg);
            
            // Simular tempo de carregamento
            setTimeout(() => {
                questionsContainer.removeChild(loadingMsg);
                // Aqui seriam adicionadas as novas questões
            }, 1500);
        });
    });
});
