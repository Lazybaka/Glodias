 const menuToggle = document.getElementById('menuToggle');
        const mainNav = document.getElementById('mainNav');

        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('is-active');
        });

        // Sentence carousel functionality
        const sentences = document.querySelectorAll('.sentence');
        let currentSentenceIndex = 0;

        function showNextSentence() {
            sentences[currentSentenceIndex].classList.remove('active');
            currentSentenceIndex = (currentSentenceIndex + 1) % sentences.length;
            sentences[currentSentenceIndex].classList.add('active');
        }

        sentences[currentSentenceIndex].classList.add('active');
        setInterval(showNextSentence, 5000);

          // Quotes carousel functionality
        const quotes = document.querySelectorAll('.quotes-section-container .quote-content');
        let currentQuoteIndex = 0;

        function showNextQuote() {
            quotes[currentQuoteIndex].classList.remove('active');
            currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
            quotes[currentQuoteIndex].classList.add('active');
        }

        if (quotes.length > 0) {
            quotes[currentQuoteIndex].classList.add('active');
            setInterval(showNextQuote, 7000);
        }
