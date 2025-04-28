const senhaCorretaHash = "81dc9bdb52d04dc20036dbd8313ed055"; // Hash do MD5 para "1234"

function desbloquear() {
  const senhaDigitada = document.getElementById("senha").value;
  const senhaHashDigitada = md5(senhaDigitada);

  if (senhaHashDigitada === senhaCorretaHash) {
    document.getElementById("momentos").classList.remove("hidden");

    // Habilita o link apenas após o desbloqueio
    const link = document.querySelector(".btn-acessar");
    link.classList.remove("desativado");
    link.removeAttribute("onclick"); // Remove a restrição do clique

    alert("Caixa do Futuro desbloqueada! 💖");
  } else {
    alert("Senha incorreta! ❌");
  }
}

// Desativa o link até que a senha seja inserida corretamente
document.addEventListener("DOMContentLoaded", () => {
  const link = document.querySelector(".btn-acessar");
  link.classList.add("desativado");
  link.setAttribute("onclick", "return false;"); // Impede clique antes da senha correta
});

function playPause() {
  let audio = document.getElementById("audio");
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}
