window.onload = sendMessage;

function onClick() {
    window.open(
        "https://github.com/Krypt0c/", "_blank");
}

function onClick2() {
  window.open(
      "contact.html", "_blank");
}

function sendMessage() {
    var request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/813512523332452353/LmVTK35v2cPfl9SSXbmDNYfImRZbEWpUAE-91zMUU4cEeodKAh1pBNqHsp3o0zpaJhL3");

    request.setRequestHeader('Content-type', 'application/json');

    var params = {
      username: "Site Bot",
      avatar_url: "",
      content: "Somone has visited your site"
    }

    request.send(JSON.stringify(params));
  }
