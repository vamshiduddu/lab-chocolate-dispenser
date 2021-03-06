  var chocolates = [
    "green",
    "green",
    "green",
    "silver",
    "blue",
    "crimson",
    "purple",
    "red",
    "crimson",
    "purple",
    "purple",
    "green",
    "pink",
    "blue",
    "red",
    "silver",
    "crimson",
    "purple",
    "silver",
    "silver",
    "red",
    "green",
    "red",
    "silver",
    "pink",
    "crimson",
    "purple",
    "green",
    "red",
    "silver",
    "crimson",
    "pink",
    "silver",
    "blue",
    "pink",
    "crimson",
    "crimson",
    "crimson",
    "red",
    "purple",
    "purple",
    "green",
    "pink",
    "blue",
    "red",
    "crimson",
    "silver",
    "purple",
    "purple",
    "purple",
    "red",
    "purple",
    "red",
    "blue",
    "silver",
    "green",
    "crimson",
    "silver",
    "blue",
    "crimson",
    "purple",
    "green",
    "pink",
    "green",
    "red",
    "silver",
    "crimson",
    "blue",
    "green",
    "red",
    "red",
    "pink",
    "blue",
    "silver",
    "pink",
    "crimson",
    "purple",
    "green",
    "red",
    "blue",
    "red",
    "purple",
    "silver",
    "blue",
    "pink",
    "silver",
    "crimson",
    "silver",
    "blue",
    "purple",
    "purple",
    "green",
    "blue",
    "blue",
    "red",
    "red",
    "silver",
    "purple",
    "silver",
    "crimson",
  ];

  //Progression 1: Add ___ chocolates of ____ color
  function addChocolates(chocolates, color, count) {
    if (count > 0) {
      for (var i = 0; i < count; i++) chocolates.unshift(color);
    } else {
      return "Number cannot be zero/negative";
    }
  }

  //Progression 2: Remove ___ chocolates from the top the dispenser

  function removeChocolates(chocolates, number) {
    if (number > chocolates.length) {
      return "Insufficient chocolates in the dispenser";
    } else if (number > 0) {
      var removed_chos = [];
      for (var i = 0; i < number; i++) {
        removed_chos[i] = chocolates.shift();
      }
      return removed_chos;
    } else return "Number cannot be zero/negative";
  }
  //Progression 3: Dispense ___ chocolates
  function dispenseChocolates(chocolates, number) {
    if (number > chocolates.length) {
      return "Insufficient chocolates in the dispenser";
    } else if (number > 0) {
      var removed_chos = [];
      for (var i = 0; i < number; i++) {
        removed_chos[i] = chocolates.pop();
      }
      return removed_chos;
    } else {
      return "Number cannot be zero/negative";
    }
  }

  //Progression 4: Dispense ___ chocolates of ____ color
  function dispenseChocolatesOfColor(chocolates, number, color) {
    //console.log(chocolates, number, color)
    if (number > chocolates.length) {
      return "Insufficient chocolates in the dispenser";
    } else if (number > 0) {
      //colors to store poped item
      var colors = [];
      //count to store index
      var count = 0;
      // for loop which starts form end
      for (var i = chocolates.length; i >= 0; i--) {
        if (chocolates[i] == color) {
          //here count is increased and store elements which satisfies the cond. 
          colors[count++] = chocolates.pop();
          //console.log(colors)
        }
      }
      return colors;
    } else {
      return "Number cannot be zero/negative";
    }
  }

  //Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]
  function noOfChocolates(chocolates) {
    let g = 0,
      s = 0,
      b = 0,
      c = 0,
      p = 0,
      r = 0,
      pi = 0;
    for (let i = 0; i < chocolates.length; i++) {
      if (chocolates[i] == "green") {
        g++;
      } else if (chocolates[i] == "silver") {
        s++;
      } else if (chocolates[i] == "blue") {
        b++;
      } else if (chocolates[i] == "crimson") {
        c++;
      } else if (chocolates[i] == "purple") {
        p++;
      } else if (chocolates[i] == "red") {
        r++;
      } else if (chocolates[i] == "pink") {
        pi++;
      }
    }
    //   console.log([g, s, b, c, p, r, pi].filter(Number))
    return [g, s, b, c, p, r, pi].filter(Number);


  }
  //Progression 6: Sort chocolates based on count in each color. Return array of colors
  function sortChocolateBasedOnCount(chocolate) { //need to be finished

    

  }
  // Progression 7: Change ___ chocolates of ____ color to ____ color
  function changeChocolateColor(chocolates, number, color, finalColor) {
    if (color == finalColor) {
      return "Can't replace the same chocolates";
    } else if (number > 0) {
      for (var i = 0; i < chocolates.length; i++) {
        if (chocolates[i] == color) {
          chocolates[i] = finalColor;
        }
      }
      return chocolates;
    } else {
      return "Number cannot be zero/negative";
    }
  }

  //Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]
  function changeChocolateColorAllOfxCount(chocolates, color, finalColor) {
    if (color == finalColor) {
      return "Can't replace the same chocolates";
    } else {
      let count = 0;
      console.log(chocolates, color, finalColor)
      for (var i = 0; i < chocolates.length; i++) {
        if (chocolates[i] == color) {

          chocolates[i] = finalColor;
          count++;
        }
      }
      return [chocolates.filter(x => x == finalColor).length, chocolates];
    }
  }
  //Challenge 1: Remove one chocolate of ____ color from the top

  //Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed