import React from 'react';

const Base64Service = {
  encode: (inputText) => {
    return btoa(inputText);
  },
};

export default Base64Service;
