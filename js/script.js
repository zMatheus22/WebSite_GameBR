const URL_Location = window.location.href;
const TITLE = document.title;
const TEXT = document.getElementById("title_text").textContent.trim();

function shareAll() {
  if (navigator.share !== undefined) {
    navigator
      .share({
        title: TITLE,
        text: TEXT,
        url: URL_Location,
      })
      .then(() => console.log("Successful share"))
      .catch((error) => console.log("Error sharing", error));
  }
}

function facebook_share() {
  const btn_facebook = document.getElementById("facebook-share");
  btn_facebook.href = `https://www.facebook.com/sharer/sharer.php?u=${URL_Location}`;
}

function linkdIn_share() {
  const btn_linkedin = document.getElementById("linkedin-share");
  btn_linkedin.href = `https://www.linkedin.com/shareArticle?mini=true&url=${URL_Location}`;
}

function whatsapp_share() {
  const btn_whatsapp = document.getElementById("whatsapp-share");
  const text_share = `Site: ${TITLE}\n Título: ${TEXT}\n Link: ${URL_Location}`;

  btn_whatsapp.href = `https://api.whatsapp.com/send?text=${text_share}`;
}
