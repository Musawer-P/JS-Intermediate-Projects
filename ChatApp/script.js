const input = document.querySelector('.chat-input input');
const button = document.querySelector('.chat-input #send');
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


 const addBtn = document.getElementById('add-btn');
    const optionsMenu = document.getElementById('options-menu');

    addBtn.addEventListener('click', () => {
      optionsMenu.style.display = optionsMenu.style.display === 'flex' ? 'none' : 'flex';
    });

    // Optional: Click outside to close
    document.addEventListener('click', (e) => {
      if (!addBtn.contains(e.target) && !optionsMenu.contains(e.target)) {
        optionsMenu.style.display = 'none';
      }
    });

    feather.replace()