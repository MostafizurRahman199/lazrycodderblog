import React from 'react';
import styles from './about.module.css';
import Image from 'next/image';
import { BsStarFill } from 'react-icons/bs';

function slideReviews(direction) {
  const currentTransform = reviewListElement.style.transform.slice(13); // Extract current translation value
  const reviewWidth = reviewListElement.querySelector('.reviewList').offsetWidth;

  if (direction === 'next') {
    reviewListElement.style.transform = `translateX(${parseFloat(currentTransform) - reviewWidth}px)`;
  } else if (direction === 'prev') {
    reviewListElement.style.transform = `translateX(${parseFloat(currentTransform) + reviewWidth}px)`;
  }
}

const About = () => {
  const achievements = [
    'Achieved 10,000 website visitors in 6 months',
    'Featured in top 10 coding blogs of 2024',
    'Won the "Best Tech Blog" award in the XYZ competition',
  ];
  
  const reviews = [
  
    {
      name: 'William Chen',
      image: '/author2.webp', // Replace with appropriate image link
      review:
        'Lazy Coder has helped me take my coding skills to the next level. The articles and tutorials are well-structured and provide valuable insights into real-world coding practices.',
      rating: 4.9,
    }, {
      name: 'Alice Lee',
      image: '/author2.webp', // Replace with appropriate image link
      review:
        'Learning with Lazy Coder has been a fun and engaging experience. The articles are well-organized and easy to understand, even for beginners like me.',
      rating: 5,
    },
    {
      name: 'David Miller',
      image: '/author2.webp',  // Replace with appropriate image link
      review:
        'The tutorials on Lazy Coder are incredibly helpful. I\'ve been able to learn new programming languages and solve coding challenges thanks to their clear explanations and practical examples.',
      rating: 4.8,
    },
    {
      name: 'Emily Garcia',
      image: '/author2.webp',  // Replace with appropriate image link
      review:
        'The community at Lazy Coder is amazing. I\'ve learned so much from other coders through the comments section and forum discussions. Thank you for creating such a supportive environment!',
      rating: 5,
    },
    {
      name: 'Noah Brown',
      image: '/author2.webp',  // Replace with appropriate image link
      review:
        'Lazy Coder has become my go-to resource for all things coding. I appreciate the wide range of topics covered, from basic concepts to advanced programming techniques.',
      rating: 4.7,
    },
    {
      name: 'Olivia Johnson',
      image: '/author2.webp',  // Replace with appropriate image link
      review:
        'I highly recommend Lazy Coder to anyone who wants to learn about technology and coding. The website is user-friendly and visually appealing, making it a pleasure to explore.',
      rating: 5,
    },
    {
      name: 'William Chen',
      image: '/author2.webp',  // Replace with appropriate image link
      review:
        'Lazy Coder has helped me take my coding skills to the next level. The articles and tutorials are well-structured and provide valuable insights into real-world coding practices.',
      rating: 4.9,
    },
    
  ];
  return (
    <div className={styles.about}>
 <section className={styles.hero}>
    <h1 className={styles.heroTitle}>About Lazy Coder</h1>
    <p className={styles.heroText}>
      We are a team of passionate developers and writers dedicated to bringing you the
      latest technology and coding news, tutorials, and resources.
    </p>
    <h1>Our Vision</h1>
    <p>
      Our vision is to empower individuals of all skill levels to become
      confident and successful coders, ultimately bridging the gap between
      theoretical knowledge and practical application.
    </p>
    <h2>Our Mission</h2>
    <p>
      We strive to provide a comprehensive and accessible platform for
      learning and exploring the world of technology through:
    </p>
    <ul>
      <li>High-quality, informative, and engaging content</li>
      <li>Step-by-step tutorials and practical guides</li>
      <li>A supportive and inclusive community for learners</li>
    </ul>
    <h2>Our Achievements</h2>
    <ul>
      {achievements.map((achievement, index) => (
        <li key={index}>{achievement}</li>
      ))}
    </ul>
  </section>

  <Image
    src="/hero-background.jpg"
    alt="Hero background image"
    layout="fill"
    className={styles.heroImage}
  />

 

      <section className={styles.reviews}>
        <h2>What people are saying</h2>
        <div className={styles.reviewList}>
          {reviews.map((review, index) => (
            <div key={index} className={styles.reviewCard}>
              <Image className={styles.image}
                src={review.image}
                alt={review.name}
                width={100}
                height={100}
              />
              <div className={styles.reviewDetails}>
                <h3>{review.name}</h3>
                <p className={styles.rating}>
                  {[...Array(Math.floor(review.rating))].map((_, i) => (
                    <BsStarFill key={i} color="#f1c40f" />
                  ))}
                </p>
                <p>{review.review}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
