import { getVoice } from "../voice/voice";

const DEFAULT_VOICE = 16;
const DEFAULT_LANG = "pl";
const DEFAULT_VOLUME = 0.1;

export async function createSpeech(
  options: SpeechOptions
): Promise<SpeechSynthesisUtterance> {
  var speech = new SpeechSynthesisUtterance();
  var voicePromise = getVoice(options.voice || DEFAULT_VOICE).then(
    (voice) => (speech.voice = voice)
  );
  speech.lang = options.lang || DEFAULT_LANG;
  speech.text = options.text;
  speech.volume = options.volume || DEFAULT_VOLUME;
  await voicePromise;

  return speech;
}

export interface SpeechOptions {
  /**
   * The text to be read
   */
  text: string;
  /**
   * Language of the text
   * On chrome not sure if it changes anything
   * Defaults to `pl`
   */
  lang?: string;
  /**
   * Voice selection
   * On chrome it changes voice language as well
   * Default selection is `16` for pl language
   */
  voice?: number;
  /**
   * Voice volume
   * Defaults to `0.1`
   * Not recommended to go higher on first try
   */
  volume?: number;
}
