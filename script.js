async function handleUserInput() {
    const input = document.getElementById("user-input").value;
    const chatLog = document.getElementById("chat-log");
  
    if (input.trim() === "") return;
  
    appendMessage("You", input);
  
    const response = await getAIResponse(input);
    appendMessage("AI", response);
  
    document.getElementById("user-input").value = "";
  }
  
  function appendMessage(sender, message) {
    const chatLog = document.getElementById("chat-log");
    chatLog.innerHTML += `<p><strong>${sender}:</strong> ${message}</p>`;
    chatLog.scrollTop = chatLog.scrollHeight;
  }
  
  async function getAIResponse(userInput) {
    const responseMap = await fetch("data.json").then(res => res.json());
  
    const lowerInput = userInput.toLowerCase();
    if (lowerInput.includes("project")) {
      return responseMap.projects;
    } else if (lowerInput.includes("skills")) {
      return responseMap.skills;
    } else if (lowerInput.includes("contact")) {
      return responseMap.contact;
    } else {
      return "I'm your portfolio assistant. Try asking about my projects, skills, or how to contact me!";
    }
  }
  