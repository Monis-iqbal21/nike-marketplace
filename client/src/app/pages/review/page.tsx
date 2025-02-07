'use client';

import { useState } from 'react';
import './review.css';

export default function ReviewPage() {
  const [reviews, setReviews] = useState([
    { name: 'John Doe', review: 'Great experience! Highly recommended.' },
    { name: 'Jane Smith', review: 'Very user-friendly and well-designed.' },
  ]);
  const [name, setName] = useState('');
  const [review, setReview] = useState('');

  const handleSubmit = (e : any) => {
    e.preventDefault();
    if (name && review) {
      setReviews([...reviews, { name, review }]);
      setName('');
      setReview('');
    }
  };

  return (
    <div className="container">
      <h1>Customer Reviews</h1>
      <div className="review-box">
        <form onSubmit={handleSubmit} className="review-form">
          <input
            type="text"
            placeholder="Your Name"
            className="input-field"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <textarea
            placeholder="Write a review..."
            className="textarea-field"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            required
          />
          <button type="submit" className="submit-button">Submit Review</button>
        </form>
        <div className="review-list">
          {reviews.map((r, index) => (
            <div key={index} className="review-item">
              <p className="review-name">{r.name}</p>
              <p className="review-text">{r.review}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
