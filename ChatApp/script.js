const input = document.querySelector('.chat-input input');
const button = document.querySelector('.chat-input #send');
const messagesContainer = document.querySelector('.chat-messages');

const typingIndicator = document.createElement('div');
typingIndicator.classList.add('message', 'typing');
typingIndicator.textContent = 'Bot is typing...';

function getBotReply(userMessage) {
  const message = userMessage.toLowerCase();

  if (message.includes('hello') || message.includes('hi')) {
    return 'Hi there! 👋';
  }
  if (message.includes('how are you')) {
    return "I'm just code, but I'm running well! 🤖";
  }
  if (message.includes('time')) {
    return `The current time is ${new Date().toLocaleTimeString()}`;
  }
  if (message.includes('bye')) {
    return "Goodbye! Have a great day!";
  }

  return 'Thanks for your message!';
}

button.addEventListener('click', () => {
  const text = input.value.trim();

  if (text !== '') {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', 'sent');
    messageDiv.innerHTML = `<span class="avatar user">🧑</span><span class="text">${text}</span>`;
    messagesContainer.appendChild(messageDiv);

    input.value = '';
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    messagesContainer.appendChild(typingIndicator);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    setTimeout(() => {
      typingIndicator.remove();

      const replyText = getBotReply(text);

      const reply = document.createElement('div');
      reply.classList.add('message', 'received');
      reply.innerHTML = `<span class="avatar bot">🤖</span><span class="text">${replyText}</span>`;
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

document.addEventListener('click', (e) => {
  if (!addBtn.contains(e.target) && !optionsMenu.contains(e.target)) {
    optionsMenu.style.display = 'none';
  }
});

feather.replace();
