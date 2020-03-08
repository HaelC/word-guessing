import { FETCH_WORDS, CREATE_DICT, SHOW_CANDIDATES } from "./types";

export const fetchWords = () => dispatch => {
  let dict = {};
  fetch(
    "https://gist.githubusercontent.com/hunterjorgensen167/4478cd2ca4bfa2062ed0f1d2dfb08ee1/raw/cd5a597fd303088903131134c76c91b8359c47b0/word_list"
  )
    .then(r => r.text())
    .then(text => text.split("\n"))
    .then(words => words.sort(() => 0.5 - Math.random()).slice(0, 2000)) //https://stackoverflow.com/a/38571132
    .then(sample => {
      dispatch({
        type: FETCH_WORDS,
        payload: sample
      });
      return sample;
    })
    .then(words => {
      for (let len = 4; len <= 15; len++) {
        dict[len] = words.filter(word => word.length === len);
      }
      dispatch({
        type: CREATE_DICT,
        payload: dict
      });
    });
};

export const generateTargets = level => dispatch => {
  console.log("Generating targets");
  dispatch({
    type: SHOW_CANDIDATES,
    payload: level + 5
  });
};
