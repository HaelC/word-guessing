import {
  FETCH_WORDS,
  CREATE_DICT,
  GENERATE_TARGETS,
  SHUFFLE_LIST
} from "./types";

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

// export const generateTargets = level => dispatch => {
//   dispatch({
//     type: GENERATE_TARGETS,
//     payload: {
//       wordLength: level + 5,
//       wordNumber: level + 7
//     }
//   });
// };

export const generateTargets = (len, num) => dispatch => {
  dispatch({
    type: GENERATE_TARGETS,
    payload: {
      wordLength: len,
      wordNumber: num
    }
  });
};

export const testGenerating = level => dispatch => {
  dispatch({
    type: GENERATE_TARGETS,
    payload: {
      wordLength: level + 5,
      wordNumber: level + 7
    }
  });
};

export const shuffleList = () => dispatch => {
  dispatch({
    type: SHUFFLE_LIST
  });
};

// export const generateTargets = (wordLength, wordNumber) => dispatch => {
//   dispatch({
//     type: GENERATE_TARGETS,
//     // payload: {
//     //   wordLength: wordLength,
//     //   wordNumber: wordNumber
//     // }
//     wordLength: wordLength,
//     wordNumber: wordNumber
//   });
// };
