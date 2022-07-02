import { VoiceNotFoundError } from "../errors/VoiceNotFoundError";

const VOICE_TIMEOUT = 1000;

export function getVoice(index: number): Promise<SpeechSynthesisVoice> {
  return getVoicePromise(index).then((voice) => {
    if (!voice) {
      throw new VoiceNotFoundError();
    }
    return voice;
  });
}

function getVoicePromise(
  index: number
): Promise<SpeechSynthesisVoice | undefined> {
  return new Promise<SpeechSynthesisVoice>((resolve, reject) => {
    const voice = selectVoiceFromSpeechSynthesis(index);
    if (voice) {
      resolve(voice);
      return;
    }

    window.speechSynthesis.onvoiceschanged = () => {
      resolve(selectVoiceFromSpeechSynthesis(index));
    };

    setTimeout(() => reject(), VOICE_TIMEOUT);
  });
}

function selectVoiceFromSpeechSynthesis(index: number): SpeechSynthesisVoice {
  var voices = window.speechSynthesis.getVoices();
  return voices[index];
}
