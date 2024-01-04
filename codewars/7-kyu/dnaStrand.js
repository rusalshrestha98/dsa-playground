// In DNA strings, symbols "A" and "T" are complements of each other,
// as "C" and "G". Your function receives one side of the DNA
// (string, except for Haskell); you need to return the other complementary side.
// DNA strand is never empty or there is no DNA at all (again, except for Haskell).

const DNAStrand = (dna) => {
  let result = [];
  dna.split("").map((x) => {
    if (x == "A") result.push("T");
    if (x == "T") result.push("A");
    if (x == "C") result.push("G");
    if (x == "G") result.push("C");
  });
  return result.join("");
};

// var pairs = {'A':'T','T':'A','C':'G','G':'C'};

// function DNAStrand(dna){
//   return dna.split('').map(function(v){ return pairs[v] }).join('');
// }

console.log(DNAStrand("AAAA"));
console.log(DNAStrand("ATGC"));
