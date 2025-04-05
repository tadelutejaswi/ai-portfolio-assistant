function sendMessage() {
    const userInput = document.getElementById("userInput").value;
    const output = document.getElementById("chatOutput");
    const response = `🤖 Sorry! AI responses are simulated for now. Try typing: "show skills" or "what are your projects?"`;
  
    const message = document.createElement("p");
    message.textContent = `🧑: ${userInput}`;
    output.appendChild(message);
  
    const botReply = document.createElement("p");
    botReply.textContent = response;
    botReply.style.color = 'cyan';
    output.appendChild(botReply);
  
    document.getElementById("userInput").value = "";
  }
  