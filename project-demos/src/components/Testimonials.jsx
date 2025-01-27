import React, { useState } from "react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "This is the best product I've ever used!",
      author: "Jane Doe",
    },
    {
      quote: "I highly recommend this product to everyone!",
      author: "John Smith",
    },
    {
      quote: "This product has completely changed my life!",
      author: "Bob Johnson",
    },
  ];

  //   The modulo operator (%) in setCurrentIndex((currentIndex + 1) % testimonials.length) serves a clever purpose - it creates a circular rotation through the testimonials array.

  // Here's how it works with the given testimonials array that has 3 items:

  // // When currentIndex is 0: (0 + 1) % 3 = 1
  // // When currentIndex is 1: (1 + 1) % 3 = 2
  // // When currentIndex is 2: (2 + 1) % 3 = 0  // Wraps back to start!

  // Copy

  // Apply

  // Testimonials.jsx
  // The modulo operation ensures that:

  // The index always stays within bounds of the array (0 to 2)
  // When reaching the end (index 2), it wraps back to 0
  // Creates an infinite carousel effect for the testimonials
  // This is a clean mathematical way to handle circular navigation without needing additional if/else conditions to check array boundaries. The same principle applies to the previous button logic, creating a seamless loop in both directions.

  const handlePrevClick = () => {
    setCurrentIndex(
      (currentIndex + testimonials.length - 1) % testimonials.length
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
    console.log(currentIndex);
  };

  return (
    <div className="testimonials">
      <div className="testimonials-quote">
        {testimonials[currentIndex].quote}
      </div>
      <div className="testimonials-author">
        - {testimonials[currentIndex].author}
      </div>
      <div className="testimonials-nav">
        <button onClick={handlePrevClick}>Prev</button>
        <button onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
};

export default Testimonials;
