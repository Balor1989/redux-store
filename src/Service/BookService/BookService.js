import pythonImg from "../../Images/python.jpg";
import gaImg from "../../Images/grokking-algorithms.jpg";
import JSImg from "../../Images/don't-know-JS.jpg";

class BookService {
  data = [
    {
      id: 1,
      title:
        "PYTHON: PROGRAMMING: A BEGINNER’S GUIDE TO LEARN PYTHON IN 7 DAYS",
      author: "Ramsey Hamilton",
      price: 29.99,
      img: pythonImg,
    },
    {
      id: 2,
      title:
        "Grokking Algorithms: An Illustrated Guide for Programmers and Other Curious People",
      author: "Aditya Bhargava",
      price: 34.99,
      img: gaImg,
    },
    {
      id: 3,
      title: "YOU DON`T KNOW JS 6 VOLUME SET",
      author: "Kyle Simpson",
      price: 159.99,
      img: JSImg,
    },
  ];
  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.data);
        // reject(new Error("Error"));
      }, 800);
    });
  }
}

export default BookService;
