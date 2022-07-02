import { createSpeech, SpeechOptions } from "./speech/speech";

export async function speak(options: SpeechOptions): Promise<void> {
  var speech = await createSpeech(options);
  window.speechSynthesis.speak(speech);
}

export function pauseSpeech(): void {
  window.speechSynthesis.pause();
}

export function resumeSpeech(): void {
  window.speechSynthesis.resume();
}
