import GameSavingLoader from "./gameSavingLoader";

console.log("worked");

(async () => {
  try {
    const saving = await GameSavingLoader.load();
    console.log(saving);
  } catch (err) {
    console.log(err);
  }
})();
