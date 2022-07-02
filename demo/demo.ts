import { speak } from "../src/speak";

const form = document.getElementById("speech-form") as HTMLFormElement;

const textToSayInput = document.getElementById(
  "text-to-say"
) as HTMLInputElement;

const voiceInput = document.getElementById("voice") as HTMLInputElement;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log({ event });

  var text = textToSayInput.value || "Demo text.";
  var voice = parseInt(voiceInput.value);

  speak({ text, voice });
});
