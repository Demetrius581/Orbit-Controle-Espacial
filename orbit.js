var volume = 50;
var mudo = false;
var ativado = false;
var contextoAudio = null;
var ganhoAudio = null;
var somAtual = null;

function aumentarVolume() {
  volume = Math.min(100, volume + 5);
  mudo = false;
  atualizarPainel();
}

function diminuirVolume() {
  volume = Math.max(0, volume - 5);
  mudo = false;
  atualizarPainel();
}

function alternarMudo() {
  mudo = !mudo;
  atualizarPainel();
}

function iniciarSistema() {
  ativado = true;
  atualizarPainel();
}

function resetarSistema() {
  volume = 50;
  mudo = false;
  ativado = false;
  pararAudio();
  atualizarPainel();
}

function volumeAtual() {
  return mudo ? 0 : volume;
}

function atualizarPainel() {
  if (typeof document === "undefined") return;
  document.getElementById("volume").textContent = volumeAtual();
  document.getElementById("barra-volume").value = volumeAtual();
  document.getElementById("status").textContent = ativado
    ? "SISTEMA ATIVADO" : "SISTEMA ONLINE";
  document.getElementById("estado-audio").textContent = mudo
    ? "ÁUDIO SILENCIADO" : volume === 0 ? "VOLUME ZERO" : "CANAL DE ÁUDIO ATIVO";
  document.getElementById("mudo").textContent = mudo ? "◖)) RESTAURAR" : "◖× MUDO";
  document.getElementById("mudo").setAttribute("aria-pressed", String(mudo));
  document.getElementById("aumentar").disabled = volume === 100;
  document.getElementById("diminuir").disabled = volume === 0;
  document.getElementById("iniciar").disabled = ativado;
  if (ganhoAudio && contextoAudio) {
    ganhoAudio.gain.setTargetAtTime(volumeAtual() / 100 * 0.15, contextoAudio.currentTime, 0.02);
  }
}

function pararAudio() {
  if (somAtual) {
    somAtual.stop();
    somAtual = null;
  }
}

async function testarAudio() {
  try {
    if (!contextoAudio) contextoAudio = new AudioContext();
    await contextoAudio.resume();
    pararAudio();
    ganhoAudio = contextoAudio.createGain();
    ganhoAudio.gain.value = volumeAtual() / 100 * 0.15;
    ganhoAudio.connect(contextoAudio.destination);
    var som = contextoAudio.createOscillator();
    som.type = "sine";
    som.frequency.value = 440;
    som.connect(ganhoAudio);
    somAtual = som;
    document.getElementById("testar").textContent = "♫ SOM EM TESTE";
    som.onended = function () {
      if (somAtual === som) somAtual = null;
      som.disconnect();
      document.getElementById("testar").textContent = "♫ TESTAR ÁUDIO";
    };
    som.start();
    som.stop(contextoAudio.currentTime + 3);
  } catch (erro) {
    document.getElementById("estado-audio").textContent = "ÁUDIO INDISPONÍVEL NESTE NAVEGADOR";
  }
}

if (typeof document !== "undefined") {
  document.getElementById("aumentar").addEventListener("click", aumentarVolume);
  document.getElementById("diminuir").addEventListener("click", diminuirVolume);
  document.getElementById("mudo").addEventListener("click", alternarMudo);
  document.getElementById("iniciar").addEventListener("click", iniciarSistema);
  document.getElementById("resetar").addEventListener("click", resetarSistema);
  document.getElementById("testar").addEventListener("click", testarAudio);
  atualizarPainel();
}
