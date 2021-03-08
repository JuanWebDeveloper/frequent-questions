const categories = document.querySelectorAll('#categories .category');
const questionsContainer = document.querySelectorAll('.questions');
const questions = document.querySelectorAll('.questionsContainer .questions .question');
let activeCategory = null;

categories.forEach((category) => {
    category.addEventListener('click', (e) => {
        categories.forEach((element) => {
            element.classList.remove('active');
        });

        e.currentTarget.classList.toggle('active');
        activeCategory = category.dataset.category;

        questionsContainer.forEach((container) => {
            if (container.dataset.category === activeCategory) {
                container.classList.add('activo');
            } else {
                container.classList.remove('activo');
            }
        });
    });
});

questions.forEach((question) => {
    question.addEventListener('click', (e) => {
        e.currentTarget.classList.toggle('active');

        const answer = question.querySelector('.answer');
		const realHeight = answer.scrollHeight;

        if (!answer.style.maxHeight) {
            answer.style.maxHeight = realHeight + "px";
        } else {
            answer.style.maxHeight = null;
        }

        questions.forEach((element) => {
            if (question !== element) {
                element.classList.remove('active');
                element.querySelector('.answer').style.maxHeight = null;
            }
        });
    });
});

