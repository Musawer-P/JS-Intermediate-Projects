const input = document.querySelector('.chat-input input');
const button = document.querySelector('.chat-input button');
const messagesContainer = document.querySelector('.chat-messages');

button.addEventListener('click', () => {
  const text = input.value.trim();

  if (text !== '') {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', 'sent');
    messageDiv.textContent = text;

    messagesContainer.appendChild(messageDiv);

    input.value = '';

    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    setTimeout(() => {
      const reply = document.createElement('div');
      reply.classList.add('message', 'received');
      reply.textContent = 'Thanks for your message!';
      messagesContainer.appendChild(reply);
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }, 1000);
  }
});
