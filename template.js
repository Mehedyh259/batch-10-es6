// const Name = 'mehedy'
// const age = 43
// const job = "bekar"

// // amar name mehedy. aamr boyos 43. ami akhon bekar

// const sentence = "amar name "+Name+". amar boyos "+age+". ami akhon "+job;

// const sentence1 = `amar name ${Name}. amar boyos ${age}. ami akhon ${job}`;


// console.log(sentence)
// console.log(sentence1)

const myInfo = {
    name: "mehedy",
    age: 25,
    address: "rajshahi",
    sosurName: "Katappa",
    sosurBari: "B.Baria", 
    subjects: ["bangla","english","math"]
  };

  const sentence = `amar naam ${myInfo.name}. amar subjects gulo ${myInfo.subjects.map((sub) => sub).join(" ")} `
  console.log(sentence)