const students = [
  {
    name: "mehedy bro",
    email: "mehedy@gamil.com",
    avg: 56,
    fiftyPercent: true,
  },
  { name: "rokib bro", email: "rokib@gamil.com", avg: 57, fiftyPercent: false },
  { name: "sakib bro", email: "sakib@gamil.com", avg: 42, fiftyPercent: false },
  { name: "sojib bro", email: "sojib@gamil.com", avg: 52, fiftyPercent: true },
  { name: "sunny bro", email: "sunny@gamil.com", avg: 32, fiftyPercent: false },
  { name: "saki bro", email: "sunny@gamil.com", avg: 37, fiftyPercent: true },
  {
    name: "jackie bro",
    email: "jackie@gamil.com",
    avg: 57,
    fiftyPercent: true,
  },
];

// scic = avg = 48, fiftyPercent = true

// const findSCIC = (students) => {
//   const scic = students.filter(
//     (person) => person.avg >= 48 && person.fiftyPercent );
//   const names = scic.map((p) => p.name)
//   return names;
// };
const findSCIC = (students) => students.filter((person) => person.avg >= 48 && person.fiftyPercent).map((p) => p.name);
 

const results = findSCIC(students);
console.log(results);
