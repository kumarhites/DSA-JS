// #
// ##
// ###
// ####
// #####
// ######
// #######

// pattern

function starPattern() {
  console.log("Star pattern - left aligned");
  for (let i = 1; i < 7; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "#";
    }
    console.log(row);
  }
}

starPattern();


