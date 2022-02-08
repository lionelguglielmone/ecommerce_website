import bcrypt from "bcryptjs";
const data = {
  users: [
    {
      name: "Lionel",
      email: "lionel@guglielmone.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
    {
      name: "Juana",
      email: "juana@guglielmone.com",
      password: bcrypt.hashSync("4321", 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      _id: "1",
      name: " A New Dawn",
      category: "book",
      image: "/images/p1.jpg",
      price: 25.3,
      countInStock: 500,
      brand: " Lucas films",
      rating: 4.5,
      numReviews: 200,
      description:
        " A New Dawn is a canon novel written by John Jackson Miller, with a foreword by Dave Filoni.",
    },
    {
      _id: "2",
      name: " Force Collector",
      category: "book",
      image: "/images/p3.jpg",
      price: 22.3,
      countInStock: 100,
      brand: " Lucas films",
      rating: 2.3,
      numReviews: 300,
      description:
        " Force Collector is a canon novel written by Kevin Shinick.",
    },
    {
      _id: "3",
      name: " Light of the Jedi",
      category: "book",
      image: "/images/p4.jpg",
      price: 31.1,
      countInStock: 0,
      brand: " Lucas films",
      rating: 1,
      numReviews: 2200,
      description:
        " Light of the Jedi is a canon novel written by Charles Soule.",
    },
    {
      _id: "4",
      name: " Apocalypse",
      category: "book",
      image: "/images/p11.jpg",
      price: 11.3,
      countInStock: 5500,
      brand: " Lucas films",
      rating: 4.5,
      numReviews: 500,
      description: " Apocalyse is a SW-Legends novel written by Troy Denning.",
    },
    {
      _id: "5",
      name: " Into the Void",
      category: "book",
      image: "/images/p6.jpg",
      price: 9.99,
      countInStock: 0,
      brand: " Lucas films",
      rating: 3.5,
      numReviews: 2200,
      description: " Into the Void is a canon novel written by Tim Lebon.",
    },
  ],
};

export default data;
