document.addEventListener('DOMContentLoaded', function () {
    var destinationArticles = document.querySelectorAll('.destination-list article');
    destinationArticles.forEach(function (article) {
        article.addEventListener('click', function () {
            var heading = article.querySelector('h3');
            if (heading) {
                var destinationName = heading.innerText;
                var message_1 = document.createElement('div');
                message_1.innerText = "You clicked on ".concat(destinationName, "!");
                message_1.style.position = 'fixed';
                message_1.style.top = '20px';
                message_1.style.right = '20px';
                message_1.style.backgroundColor = '#35424a';
                message_1.style.color = '#ffffff';
                message_1.style.padding = '10px';
                message_1.style.borderRadius = '5px';
                document.body.appendChild(message_1);
                setTimeout(function () {
                    document.body.removeChild(message_1);
                }, 3000);
            }
        });
    });
});
