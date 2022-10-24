export const NEW = 'NEW';
export const NEW_COLOR = 'NEW_COLOR';

export const newQuote = () => ({ type: NEW, });
export const newColor = (color) => ({
  type: NEW_COLOR,
  newColor: color
});

