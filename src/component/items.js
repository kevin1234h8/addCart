import { nanoid } from "nanoid";

const items = [
  {
    id: nanoid(),
    name: "Camera",
    price: 100,
    amount: 1,
    description: "This is a camera",
    img: "https://images.unsplash.com/photo-1534131707746-25d604851a1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FtZXJhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: nanoid(),
    name: "Phone",
    price: 200,
    amount: 1,
    description: "This is a phone",
    img: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: nanoid(),
    name: "Laptop",
    price: 300,
    amount: 1,
    description: "This is a laptop",
    img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: nanoid(),
    name: "TV",
    price: 400,
    amount: 1,
    description: "This is a TV",
    img: "https://images.unsplash.com/photo-1595935736128-db1f0a261263?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHRlbGV2aXNpb258ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
  },
];

export default items;
