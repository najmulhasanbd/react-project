import React from 'react';

const Error = () => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        {/* GIF Image */}
        <img 
          src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif" 
          alt="404 Error" 
          style={styles.gif}
        />
        
        {/* Text Content */}
        <div style={styles.textContainer}>
          <h1 style={styles.errorCode}>404</h1>
          <h2 style={styles.message}>ওহ! পেজটি পাওয়া যায়নি</h2>
          <p style={styles.description}>
            আপনি যে পেজটি খুঁজছেন তা সম্ভবত সরিয়ে ফেলা হয়েছে অথবা ভুল লিঙ্কে এসেছেন।
          </p>
          
          {/* Back to Home Button */}
          <button 
            onClick={() => window.location.href = '/'} 
            style={styles.button}
            onMouseOver={(e) => e.target.style.backgroundColor = '#2d8b27'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#39ac31'}
          >
            হোম পেজে ফিরে যান
          </button>
        </div>
      </div>
    </div>
  );
};

// স্টাইল অবজেক্ট
const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    padding: '20px'
  },
  content: {
    maxWidth: '600px',
  },
  gif: {
    width: '100%',
    maxHeight: '350px',
    objectFit: 'contain'
  },
  textContainer: {
    marginTop: '-20px'
  },
  errorCode: {
    fontSize: '72px',
    fontWeight: 'bold',
    color: '#333',
    margin: '0'
  },
  message: {
    fontSize: '24px',
    color: '#555',
    marginBottom: '10px'
  },
  description: {
    color: '#777',
    marginBottom: '30px'
  },
  button: {
    backgroundColor: '#39ac31',
    color: 'white',
    padding: '12px 25px',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: '0.3s',
    textDecoration: 'none'
  }
};

export default Error;