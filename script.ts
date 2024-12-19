document.addEventListener('DOMContentLoaded', () => {
    const destinationArticles = document.querySelectorAll('.destination-list article');

    destinationArticles.forEach(article => {
        article.addEventListener('click', () => {
            const heading = article.querySelector('h3');
            if (heading) {
                const destinationName = heading.innerText;
                const message = document.createElement('div');
                message.innerText = `You clicked on ${destinationName}!`;
                message.style.position = 'fixed';
                message.style.top = '20px';
                message.style.right = '20px';
                message.style.backgroundColor = '#35424a';
                message.style.color = '#ffffff';
                message.style.padding = '10px';
                message.style.borderRadius = '5px';
                document.body.appendChild(message);
                
                setTimeout(() => {
                    document.body.removeChild(message);
                }, 3000);
            }
        });
    });
});
