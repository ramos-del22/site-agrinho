document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Efeito Sticky Header no Scroll
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
        
        // Chamar função de revelação
        handleScrollReveal();
    });

    // 2. Scroll Reveal (Efeito de Revelar ao Rolar)
    function handleScrollReveal() {
        const reveals = document.querySelectorAll('.reveal');
        
        reveals.forEach(element => {
            const windowHeight = window.innerHeight;
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150; // Distância para ativar
            
            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    }

    // Executa uma vez no carregamento para elementos que já estão na tela
    handleScrollReveal();

    // 3. Validação Simples do Formulário de Contato
    const contactForm = document.getElementById('contactForm');
    const feedback = document.getElementById('formFeedback');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Simulação de validação e envio
        if (name.length < 3) {
            showFeedback("Por favor, insira um nome válido.", "red");
            return;
        }

        if (!validateEmail(email)) {
            showFeedback("E-mail inválido.", "red");
            return;
        }

        // Se passar nas validações
        showFeedback("Mensagem enviada com sucesso! Entraremos em contato em breve.", "green");
        contactForm.reset();
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function showFeedback(text, color) {
        feedback.innerText = text;
        feedback.style.color = color;
        feedback.style.marginTop = "15px";
        feedback.style.fontWeight = "bold";
    }

    // 4. Smooth Scroll para os links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
});
