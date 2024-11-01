document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const errorDescription = document.getElementById('error-description').value;
    const email = document.getElementById('email').value;

    const responseMessage = document.getElementById('responseMessage');
    responseMessage.style.display = 'block';
    responseMessage.innerHTML = 'Cảm ơn bạn đã gửi phản hồi!';

    this.reset();
});