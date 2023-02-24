console.log(reverseInGroupsOfFour("Lorem at")); // Output: "eroLta m"
console.log(reverseInGroupsOfFour("Tempor ip")); // Output: "pmeTi rop"
function reverseInGroupsOfFour(S) {
    let result = "";
    for (let i = 0; i < S.length; i += 4) {
      // Extract the next group of four characters
      let group = S.substr(i, 4);
  
      // Reverse the group and add it to the result string
      result += group.split("").reverse().join("");
    }
    return result;
  }