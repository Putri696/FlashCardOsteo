document.addEventListener('DOMContentLoaded', () => {
  const flashcards = [
    { question: 'Siap?', 
      answer: 'Mulai' },
    { question: 'Tulang Dahi', 
      answer: 'Frontal' },
    { question: 'Tulang Ubun-ubun', 
      answer: 'Parietal' },
    { question: 'Tulang Kepala Belakang', 
      answer: 'Oksipital' },
    { question: 'Tulang Pelipis', 
      answer: 'Temporal' },
    { question: 'Tulang Baji', 
      answer: 'Sphenoid' },
    { question: 'Tulang Tapis', 
      answer: 'Ethmoid' },
    { question: 'Tulang Hidung', 
      answer: 'Nasal' },  
    { question: 'Tulang Tengah Hidung', 
      answer: 'Vomer' },
    { question: 'Tulang Karang Hidung', 
      answer: 'Concha nasalis inferior' },
    { question: 'Tulang Air Mata', 
      answer: 'Lakrimal' },
    { question: 'Tulang Pipi', 
      answer: 'Zygomatic' },
    { question: 'Tulang Langit-langit mulut', 
      answer: 'Palatum' },
    { question: 'Tulang Rahang Atas', 
      answer: 'Maksila' },
    { question: 'Tulang Rahang Bawah', 
      answer: 'Mandibula' },
    { question: 'Tulang Hulu', 
      answer: 'Manubrium sterni' },
    { question: 'Tulang Badan', 
      answer: 'Corpus sterni' },
    { question: 'Tulang Taju Pedang', 
      answer: 'Xiphoid Process' },
    { question: 'Tulang Rusuk Sejati', 
      answer: 'Costa vera' },
    { question: 'Tulang Rusuk Palsu', 
      answer: 'Costa spuria' },
    { question: 'Tulang Rusuk Melayang', 
      answer: 'Costa fluctuantes' },
    { question: 'Tulang Leher', 
      answer: 'Cerviks' },
    { question: 'Tulang Punggung', 
      answer: 'Toraks' },
    { question: 'Tulang Pinggang', 
      answer: 'Lumbal' },
    { question: 'Tulang Pinggul', 
      answer: 'Sacrum' },
    { question: 'Tulang Kelangkang', 
      answer: 'Coccyx' },
    { question: 'Tulang Belikat', 
      answer: 'Klavikula' },
    { question: 'Tulang   Selangka', 
      answer: 'Skapula' },
    { question: 'Tulang lengan Atas', 
      answer: 'Humerus' },
    { question: 'Tulang Pengumpil', 
      answer: 'Radius' },
    { question: 'Tulang Hasta', 
      answer: 'Ulna' },
    { question: 'Tulang Pergelangan Tangan', 
      answer: 'Karpal' },
    { question: 'Tulang Telapak Tangan', 
      answer: 'Metakarpal' },
    { question: 'Tulang Jari Tangan', 
      answer: 'Falanges' },
    { question: 'Tulang Usus', 
      answer: 'Ilium' },
    { question: 'Tulang Duduk', 
      answer: 'Ischium' },
    { question: 'Tulang Kemaluan', 
      answer: 'Pubis' },
    { question: 'Tulang Paha', 
      answer: 'Femur' },
    { question: 'Tulang Tempurung Lutut', 
      answer: 'Patella' },
    { question: 'Tulang Kering', 
      answer: 'Tibia' },
    { question: 'Tulang Betis', 
      answer: 'Fibula' },
    { question: 'Tulang Pergelangan kaki', 
      answer: 'Tarsal' },
    { question: 'Tulang Telapak Kaki', 
      answer: 'Metatarsal' },
    { question: 'Tulang Jari Kaki', 
      answer: 'Falanges' },
    { question: 'Selesai', 
      answer: 'Good Job!' },

  ];

  let currentCard = 0;

  const flashcardElement = document.getElementById ('flashcard'); 
  const questionElement = document.getElementById ('question');
  const answerElement = document.getElementById ('answer');

  function displayCard() {
    questionElement.textContent = flashcards[currentCard].question;
    answerElement.textContent = flashcards[currentCard].answer;
    flashcardElement.classList.removed('is-flipped');
  }

  document.getElementById('flip-card').addEventListener('click', () => {
    flashcardElement.classList.toggle('is-flipped');
  });

  document.getElementById('next-card').addEventListener('click', () => {
    currentCard = (currentCard + 1) % flashcards.length;
    displayCard();
  })

  displayCard()
});


