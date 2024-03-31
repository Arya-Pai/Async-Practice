const recipeSteps = [
    "Boil water in a large pot.",
    "Add salt to the boiling water.",
    "Add spaghetti to the boiling water.",
    "Stir occasionally and cook until spaghetti is al dente.",
    "Drain the spaghetti and set aside.",
    "In a separate pan, heat olive oil over medium heat.",
    "Add minced garlic and cook until fragrant.",
    "Add canned tomatoes and cook until the sauce thickens.",
    "Season with salt, pepper, and any desired herbs.",
    "Add the cooked spaghetti to the sauce and toss to coat evenly.",
    "Serve hot and garnish with grated cheese and fresh basil leaves."
  ];

  // Function to simulate asynchronous behavior
  function asyncStep(step, callback) {
    setTimeout(() => {
      const stepElement = document.createElement('p');
      stepElement.textContent = step;
      document.getElementById('recipe-steps').appendChild(stepElement);
      callback();
    }, Math.random() * 2000); // Simulate varying cooking times
  }


  // Function to iterate through the recipe steps asynchronously
  function cookRecipe(steps, index) {
    if (index === steps.length) {
      const finishedElement = document.createElement('p');
      finishedElement.textContent = "Finished cooking!";
      document.getElementById('recipe-steps').appendChild(finishedElement);
      return;
    }

    asyncStep(steps[index], () => {
      cookRecipe(steps, index + 1);
    });
  }

  // Start cooking the recipe
  document.getElementById('start-cooking').addEventListener('click', () => {
    document.getElementById('recipe-steps').innerHTML = ''; // Clear previous steps
    cookRecipe(recipeSteps, 0);
  });
      function asyncStep(step) {
      return new Promise(resolve => {
        setTimeout(() => {
          const stepElement = document.createElement('p');
          stepElement.textContent = step;
          document.getElementById('recipe-steps').appendChild(stepElement);
          resolve();
        }, Math.random() * 2000); // Simulate varying cooking times
      });
    }

    // Function to iterate through the recipe steps asynchronously
    async function cookRecipe(steps) {
      for (let step of steps) {
        await asyncStep(step);
      }
      const finishedElement = document.createElement('p');
      finishedElement.textContent = "Finished cooking!";
      document.getElementById('recipe-steps').appendChild(finishedElement);
    }

    // // Start cooking the recipe
    // document.getElementById('start-cooking').addEventListener('click', () => {
    //   document.getElementById('recipe-steps').innerHTML = ''; // Clear previous steps
    //   cookRecipe(recipeSteps);
    // });


    // function asyncStep(step) {
    //     return new Promise(resolve => {
    //       setTimeout(() => {
    //         const stepElement = document.createElement('p');
    //         stepElement.textContent = step;
    //         document.getElementById('recipe-steps').appendChild(stepElement);
    //         resolve();
    //       }, Math.random() * 2000); // Simulate varying cooking times
    //     });
    //   }
      
    //   // Function to iterate through the recipe steps asynchronously
    //   async function cookRecipe(steps) {
    //     for (let step of steps) {
    //       await asyncStep(step);
    //     }
    //     const finishedElement = document.createElement('p');
    //     finishedElement.textContent = "Finished cooking!";
    //     document.getElementById('recipe-steps').appendChild(finishedElement);
    //   }
  
    //   // Start cooking the recipe
    //   document.getElementById('start-cooking').addEventListener('click', () => {
    //     document.getElementById('recipe-steps').innerHTML = ''; // Clear previous steps
    //     cookRecipe(recipeSteps);
    //   });