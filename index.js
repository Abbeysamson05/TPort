const cardsData = [
  {
    title: "Severless python container on cloud run",

    description:
      "Build the foundations for a Software as a Service business by leveraging Django, Tailwind, htmx, Vue.js, and more. The goal of this project is to learn how to create a reusable foundation for building SaaS products. When release, this course will span multiple topics and give you a solid foundation into build your business.",
    url: "https://example.com/card1",
    imageUrl:
      "https://static.codingforentrepreneurs.com/media/courses/cross-platform-python-setup/0b3de746-2adf-483e-82c5-5374d98e8588.jpg",
  },
  {
    title: "Severless python container on cloud run",

    description:
      "Build the foundations for a Software as a Service business by leveraging Django, Tailwind, htmx, Vue.js, and more. The goal of this project is to learn how to create a reusable foundation for building SaaS products. When release, this course will span multiple topics and give you a solid foundation into build your business.",
    url: "https://example.com/card1",
    imageUrl:
      "https://static.codingforentrepreneurs.com/media/courses/cross-platform-python-setup/0b3de746-2adf-483e-82c5-5374d98e8588.jpg",
  },
  {
    title: "Severless python container on cloud run",

    description:
      "Build the foundations for a Software as a Service business by leveraging Django, Tailwind, htmx, Vue.js, and more. The goal of this project is to learn how to create a reusable foundation for building SaaS products. When release, this course will span multiple topics and give you a solid foundation into build your business.",
    url: "https://example.com/card1",
    imageUrl:
      "https://static.codingforentrepreneurs.com/media/courses/cross-platform-python-setup/0b3de746-2adf-483e-82c5-5374d98e8588.jpg",
  },
  {
    title: "Severless python container on cloud run",

    description:
      "Build the foundations for a Software as a Service business by leveraging Django, Tailwind, htmx, Vue.js, and more. The goal of this project is to learn how to create a reusable foundation for building SaaS products. When release, this course will span multiple topics and give you a solid foundation into build your business.",
    url: "https://example.com/card1",
    imageUrl:
      "https://static.codingforentrepreneurs.com/media/courses/cross-platform-python-setup/0b3de746-2adf-483e-82c5-5374d98e8588.jpg",
  },

  {
    title: "Severless python container on cloud run",
    description:
      "Build the foundations for a Software as a Service business by leveraging Django, Tailwind, htmx, Vue.js, and more. The goal of this project is to learn how to create a reusable foundation for building SaaS products. When release, this course will span multiple topics and give you a solid foundation into build your business.",
    url: "https://example.com/card1",
    imageUrl:
      "https://static.codingforentrepreneurs.com/media/courses/cross-platform-python-setup/0b3de746-2adf-483e-82c5-5374d98e8588.jpg",
  },
  {
    title: "Severless python container on cloud run",
    description:
      "Build the foundations for a Software as a Service business by leveraging Django, Tailwind, htmx, Vue.js, and more. The goal of this project is to learn how to create a reusable foundation for building SaaS products. When release, this course will span multiple topics and give you a solid foundation into build your business.",
    url: "https://example.com/card1",
    imageUrl:
      "https://static.codingforentrepreneurs.com/media/courses/cross-platform-python-setup/0b3de746-2adf-483e-82c5-5374d98e8588.jpg",
  },
  {
    title: "Severless python container on cloud run",
    description:
      "Build the foundations for a Software as a Service business by leveraging Django, Tailwind, htmx, Vue.js, and more. The goal of this project is to learn how to create a reusable foundation for building SaaS products. When release, this course will span multiple topics and give you a solid foundation into build your business.",
    url: "https://example.com/card1",
    imageUrl:
      "https://static.codingforentrepreneurs.com/media/courses/cross-platform-python-setup/0b3de746-2adf-483e-82c5-5374d98e8588.jpg",
  },
  {
    title: "Severless python container on cloud run",
    description:
      "Build the foundations for a Software as a Service business by leveraging Django, Tailwind, htmx, Vue.js, and more. The goal of this project is to learn how to create a reusable foundation for building SaaS products. When release, this course will span multiple topics and give you a solid foundation into build your business.",
    url: "https://example.com/card1",
    imageUrl:
      "https://static.codingforentrepreneurs.com/media/courses/cross-platform-python-setup/0b3de746-2adf-483e-82c5-5374d98e8588.jpg",
  },
  {
    title: "Severless python container on cloud run",
    description:
      "Build the foundations for a Software as a Service business by leveraging Django, Tailwind, htmx, Vue.js, and more. The goal of this project is to learn how to create a reusable foundation for building SaaS products. When release, this course will span multiple topics and give you a solid foundation into build your business.",
    url: "https://example.com/card1",
    imageUrl:
      "https://static.codingforentrepreneurs.com/media/courses/cross-platform-python-setup/0b3de746-2adf-483e-82c5-5374d98e8588.jpg",
  },
];

function createCards() {
  const container = document.getElementById("cardContainer");

  cardsData.forEach((card) => {
    const linkElement = document.createElement("a");
    linkElement.classList.add("shadow-sm", "card-element");
    linkElement.href = card.url;
    const cardElement = document.createElement("div");

    const imageElement = document.createElement("img");
    imageElement.classList.add("card-image");
    imageElement.src = card.imageUrl;
    imageElement.alt = "Card Image";

    const titleElement = document.createElement("h3");
    titleElement.classList.add("title", "p-4");
    titleElement.textContent = card.title;

    const descriptionElement = document.createElement("p");
    descriptionElement.classList.add("description", "p-4");
    descriptionElement.textContent = card.description;

    cardElement.appendChild(imageElement);
    cardElement.appendChild(titleElement);
    cardElement.appendChild(descriptionElement);

    linkElement.appendChild(cardElement);

    container.appendChild(linkElement);
  });
}
createCards();
