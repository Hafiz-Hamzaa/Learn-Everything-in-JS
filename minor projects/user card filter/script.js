// Dummy user data
const users = [
  {
    name: "Amisha Rathore",
    pic: "https://i.pinimg.com/736x/cd/9b/1c/cd9b1cf5b96e8300751f952488d6c002.jpg",
    bio: "Silent chaos in a loud world 🌑🖤 | Not for everyone",
  },
  {
    name: "Amita Mehta",
    pic: "https://i.pinimg.com/736x/1f/2f/85/1f2f856bf3a020ed8ee9ecb3306ae074.jpg",
    bio: "Main character energy 🎬 | Coffee > everything ☕✨",
  },
  {
    name: "Isha Oberoi",
    pic: "https://i.pinimg.com/736x/23/48/7e/23487ef1268cfe017047a0640318c0d0.jpg",
    bio: "Walking through dreams in Doc Martens 💭🖤 | Late night thinker",
  },
  {
    name: "Ojin Oklawa",
    pic: "https://i.pinimg.com/736x/01/be/94/01be94b0b5bf03a50b5d6c4bfec78063.jpg",
    bio: "Too glam to give a damn 💅 | Filter free soul",
  },
  {
    name: "Diya Bansal",
    pic: "https://i.pinimg.com/736x/74/b0/67/74b067e6c5ece09d99f68c42c5f6754e.jpg",
    bio: "A little chaos, a lot of art 🎨✨ | Just vibes",
  },
  {
    name: "Tanay Rawat",
    pic: "https://i.pinimg.com/736x/9b/78/b9/9b78b95425278ee37e88869b8c5fb2c6.jpg",
    bio: "Don’t text, just vibe 🪩 | Soft heart, sharp mind",
  },
  {
    name: "Mohit Chhabra",
    pic: "https://i.pinimg.com/736x/22/8b/cf/228bcf5a0800f813cd1744d4ccbf01ea.jpg",
    bio: "Aesthetic overload 📸🕊️ | Living in lowercase",
  },
  {
    name: "Riya Sharma",
    pic: "https://images.unsplash.com/photo-1560087637-bf797bc7796a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29tZW58ZW58MHx8MHx8fDA%3D",
    bio: "Coffee lover ☕ | Bookworm 📚 | Dream chaser ✨",
  },
  {
    name: "Sana Malik",
    pic: "https://images.unsplash.com/photo-1639337187400-78fa385770e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdvbWVuJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",
    bio: "Dreamer & traveler ✈️ | Music junkie 🎧 | Always curious",
  },
  {
    name: "Zara Qureshi",
    pic: "https://plus.unsplash.com/premium_photo-1668127295858-552a0ef56309?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdvbWVuJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",
    bio: "Book lover 📚 | Coffee addict ☕ | Forever learning",
  },
  {
    name: "Ayan Khan",
    pic: "https://media.istockphoto.com/id/2073254261/photo/an-adult-man-is-using-his-smartphone.webp?a=1&b=1&s=612x612&w=0&k=20&c=Hj-JBhwzX2ur8YBqnjPHFnmMyj5Kvo2hm9ai0U7CfKU=",
    bio: "Coder by day 💻 | Gamer by night 🎮 | Tech enthusiast",
  }
];

// DOM references
const cardContainer = document.querySelector(".card-container")
const searchInput = document.querySelector(".search-input")

// Render cards
function renderCards(userArray) {
  // Clear previous cards
  cardContainer.innerHTML = "";

  if (userArray.length === 0) {
    cardContainer.innerHTML = "<p style='color:#aaa;'>No users found</p>";
    return;
  }

  userArray.forEach((user) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${user.pic}" alt="${user.name}" />
      <div class="info">
        <h3>${user.name}</h3>
        <p>${user.bio}</p>
      </div>
    `;

    cardContainer.appendChild(card);
  });
}
renderCards(users);

// Search logic
searchInput.addEventListener("input", function () {
  const query = searchInput.value.trim().toLowerCase();

  const filtered = users.filter((user) =>
    user.name.toLowerCase().startsWith(query)
  );

  renderCards(filtered);
});