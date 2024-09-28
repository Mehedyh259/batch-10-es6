const people = [
  {
    id: 1,
    name: "John Doe",
    age: 30,
    occupation: "Software Engineer",
    contact: {
      email: "john.doe@example.com",
    },
    address: {
      street: "123 Main St",
      city: "San Francisco",
      state: "CA",
      zip: "94105",
    },
    social: {
      twitter: "@johndoe",
    },
    hobbies: ["Coding", "Hiking", "Photography"],
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 25,
    occupation: "Graphic Designer",
    contact: {
      email: "jane.smith@example.com",
      phone: "987-654-3210",
    },
    hobbies: ["Drawing", "Traveling"],
  },
  {
    id: 3,
    name: "Mark Johnson",
    age: 40,
    occupation: "Marketing Manager",
    contact: {
      email: "mark.johnson@example.com",
      phone: "123-456-7890",
    },
    address: {
      street: "789 Oak St",
      city: "Chicago",
      state: "IL",
      zip: "60607",
    },
    hobbies: ["Running", "Golf"],
  },
];

// console.log("connected js")

const peopleList = document.getElementById("people-list");
const personInfo = document.getElementById("person-info");

const renderPeopleList = (people) => {
  people.map((person) => {
    const li = document.createElement("li");
    li.classList.add("cursor-pointer", "text-blue-500", "p-2");
    li.textContent = person.name;

    li.addEventListener("click", () => {
      handlePersonClick(person.id);
    });

    peopleList.appendChild(li);
  });
};

const displayPersonInfo = (person) => {
  personInfo.classList.remove("hidden");
  document.getElementById("no-selection").classList.add("hidden");

  personInfo.innerHTML = `
    <h2 class="text-2xl font-bold mb-2"> ${person.name} </h2>
    <p>Number: ${person?.contact?.phone || "N/A"} </p>
    <p>City: ${person?.address?.city || "N/A"} </p>

    <p>Hobbies: ${person?.hobbies?.map((hobby) => hobby)} </p>
    
    `;
};

const handlePersonClick = (id) => {
  const person = people.find((p) => p.id == id);
  displayPersonInfo(person);
};

renderPeopleList(people);
