document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".nav button");
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            alert(`Has hecho clic en ${button.textContent}`);
        });
    });
});
buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.2)';
    });
    button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)';
    });
});


buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.border = '3px dashed black';
        button.style.transform = 'scale(1.1)';
    });

    button.addEventListener('mouseout', () => {
        button.style.border = '3px solid black';
        button.style.transform = 'scale(1)';
    });

    button.addEventListener('click', () => {
        button.style.border = '3px dotted black';
        setTimeout(() => {
            button.style.border = '3px solid black';
        }, 200);
    });
});