const handleSubmit = async (event) => {
  event.preventDefault();
  const email = event.target.email.value;
  const password = event.target.password.value;

  try {
    const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    });

      if (response.ok) {
          const data = await response.json();
          alert(data.message); // Login successful
      } else {
          const error = await response.json();
          alert(error.error || "An error occurred"); // Invalid credentials or other errors
      }
  } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while trying to log in. Please try again.");
  }
};
