window.onload = sendMessage;

function sendMessage() {
    var request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/835027613834805268/gFEgtAJkiIb-rdpoUFVPUL4Y3-oZSLp4gI262SHUI6_1gSLryfbpxAsqG-Fn0rSlMAhQ");
  
    request.setRequestHeader('Content-type', 'application/json');
  
    var params = {
      username: "Site Bot",
      avatar_url: "",
      content: "Somone has been got"
    }
  
    request.send(JSON.stringify(params));
  }