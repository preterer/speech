async function speak({ lang = "pl", text, voice = 16, volume = 0.1 }) {
  var speech = await createSpeech({ lang, text, voice, volume });
  window.speechSynthesis.speak(speech);

  class VoiceNotFoundError extends Error {
    constructor() {
      super("Voice not found.");
    }
  }

  async function createSpeech({ lang, text, voice, volume }) {
    var speech = new SpeechSynthesisUtterance("Test");
    var voicePromise = getVoice(voice).then((voice) => (speech.voice = voice));
    speech.lang = lang;
    speech.text = text;
    speech.volume = volume;
    await voicePromise;

    return speech;
  }

  function getVoice(index) {
    return new Promise((resolve) => {
      if (window.speechSynthesis.pending) {
        window.speechSynthesis.onvoiceschanged = () => {
          resolve(_getVoice(index));
        };
      }
      resolve(_getVoice(index));
    }).then((voice) => {
      if (!voice) {
        throw new VoiceNotFoundError();
      }
      return voice;
    });
  }

  function _getVoice(index) {
    var voices = window.speechSynthesis.getVoices();
    return voices[index];
  }
}

var text = "Testowy tekst przeczytać umiem.";
var englishText = `Let's try something in english, maybe this will be better.`;

speak({ text });
