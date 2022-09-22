// HIGHER ORDER FUNCTION
const doBaguette = (ingredients, options, preparation) => {
  console.log('Doing baguette...');
  const baguette = preparation(ingredients, options);
  console.log('Baguette done!', baguette);
};

// CALLBACK DECLARATION
const myPreparation = (ingredients, options) => {
  let baguette = '🥖';

  for (const ing of ingredients) {
    baguette += ing;
  }

  if (options.cheese) {
    baguette += '🧀';
  }

  if (options.protein) {
    baguette += options.protein;
  }

  return baguette;
};

const myIngredients = ['🥬', '🍅', '🥒'];
const myOptions = {
  cheese: true,
  protein: '🍗'
};

// CALLING CALLBACK AS A DECLARED FUNCTION
doBaguette(myIngredients, myOptions, myPreparation);

const otherIngredients = ['🥦', '🥕', '🥑'];
const otherOptions = {
  cheese: false,
  protein: '🍣'
};

// CALLING CALLBACK AS AN ANONYMOUS FUNCTION
doBaguette(otherIngredients, otherOptions, (ingredients, options) => {
  let baguette = '🥖🧂';

  if (options.cheese) {
    baguette += '🧀';
  }

  if (options.protein) {
    baguette += options.protein;
  }

  for (const ing of ingredients) {
    baguette += ing;
  }

  return baguette;
});
