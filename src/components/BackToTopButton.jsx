import  { useState, useEffect } from "react";

function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Show or hide the button based on the scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          style={styles.button}
          className="btn btn-primary"
        >
          <i className="bi bi-arrow-up"></i>
        </button>
      )}
    </div>
  );
}

// Inline styles for the button
const styles = {
  button: {
    position: "fixed",
    bottom: "30px",
    right: "30px",
    padding: "10px 15px",
    borderRadius: "50%",
    fontSize: "20px",
    zIndex: 1000,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

export default BackToTopButton;
