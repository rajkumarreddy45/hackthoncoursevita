import React, { useState } from "react";
import "./frontc.css"; // Import the CSS for styling

const FrontPage = () => {
  // Language options
  const languages = {
    en: "English",
    hi: "Hindi",
    ta: "Tamil",
    te: "Telugu",
    kn: "Kannada",
  };

  // Default language is English
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  // Store form data for each language
  const [formData, setFormData] = useState({
    en: {
      firstName: "",
      middleName: "",
      lastName: "",
      email: "",
      contactNo: "",
      image: "",
      about: "",
      linkedin: "",
      github: "",
      leetcode: "",
      experience: "",
      companyOrCollege: "",
      projects: [{ name: "", githubLink: "" }],
    },
    hi: {
      firstName: "",
      middleName: "",
      lastName: "",
      email: "",
      contactNo: "",
      image: "",
      about: "",
      linkedin: "",
      github: "",
      leetcode: "",
      experience: "",
      companyOrCollege: "",
      projects: [{ name: "", githubLink: "" }],
    },
    ta: {
      firstName: "",
      middleName: "",
      lastName: "",
      email: "",
      contactNo: "",
      image: "",
      about: "",
      linkedin: "",
      github: "",
      leetcode: "",
      experience: "",
      companyOrCollege: "",
      projects: [{ name: "", githubLink: "" }],
    },
    te: {
      firstName: "",
      middleName: "",
      lastName: "",
      email: "",
      contactNo: "",
      image: "",
      about: "",
      linkedin: "",
      github: "",
      leetcode: "",
      experience: "",
      companyOrCollege: "",
      projects: [{ name: "", githubLink: "" }],
    },
    kn: {
      firstName: "",
      middleName: "",
      lastName: "",
      email: "",
      contactNo: "",
      image: "",
      about: "",
      linkedin: "",
      github: "",
      leetcode: "",
      experience: "",
      companyOrCollege: "",
      projects: [{ name: "", githubLink: "" }],
    },
  });

  // Handle input changes for the selected language
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [selectedLanguage]: {
        ...prevFormData[selectedLanguage],
        [name]: value,
      },
    }));
  };

  // Handle project change
  const handleProjectChange = (index, event) => {
    const { name, value } = event.target;
    const newProjects = [...formData[selectedLanguage].projects];
    newProjects[index] = { ...newProjects[index], [name]: value };
    setFormData((prevFormData) => ({
      ...prevFormData,
      [selectedLanguage]: {
        ...prevFormData[selectedLanguage],
        projects: newProjects,
      },
    }));
  };

  const addProject = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [selectedLanguage]: {
        ...prevFormData[selectedLanguage],
        projects: [
          ...prevFormData[selectedLanguage].projects,
          { name: "", githubLink: "" },
        ],
      },
    }));
  };

  const removeProject = (index) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [selectedLanguage]: {
        ...prevFormData[selectedLanguage],
        projects: prevFormData[selectedLanguage].projects.filter(
          (_, i) => i !== index
        ),
      },
    }));
  };

  // Handle language change
  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Define the URL of your backend endpoint
    const url = "http://localhost:5000/";

    // Prepare the form data to be sent
    const dataToSend = formData[selectedLanguage];
    console.log(dataToSend);
    // Perform the fetch request
    fetch(url, {
      method: "POST", // Use POST to send data to the server
      headers: {
        "Content-Type": "application/json", // Specify the content type as JSON
      },
      body: JSON.stringify(dataToSend), // Convert the form data to JSON format
    })
      .then((response) => {
        if (response) {
          return response.json(); // Parse the JSON response from the server
        } else {
          throw new Error("Network response was not ok.");
        }
      })
      .then((data) => {
        console.log("Success:", data); // Handle the response data
        navigate("/portfolio");
        // Optionally, you can alert the user or clear the form
      })
      .catch((error) => {
        console.error("Error:", error); // Handle any errors
      });
  };

  // Label translations
  const translations = {
    en: {
      firstName: "First Name",
      middleName: "Middle Name",
      lastName: "Last Name",
      email: "Email",
      contactNo: "Contact No",
      image: "Image URL",
      about: "About",
      linkedin: "LinkedIn",
      github: "GitHub",
      leetcode: "LeetCode",
      experience: "Experience",
      companyOrCollege: "Company/College",
      projects: "Projects",
      addProject: "Add Project",
      remove: "Remove",
      submit: "Submit",
    },
    hi: {
      firstName: "प्रथम नाम",
      middleName: "मध्य नाम",
      lastName: "अंतिम नाम",
      email: "ईमेल",
      contactNo: "संपर्क नंबर",
      image: "छवि यूआरएल",
      about: "के बारे में",
      linkedin: "लिंक्डइन",
      github: "गिटहब",
      leetcode: "लीटकोड",
      experience: "अनुभव",
      companyOrCollege: "कंपनी/कॉलेज",
      projects: "परियोजनाएँ",
      addProject: "परियोजना जोड़ें",
      remove: "हटाएं",
      submit: "जमा करें",
    },
    ta: {
      firstName: "முதல் பெயர்",
      middleName: "நடுத்தர பெயர்",
      lastName: "கடைசி பெயர்",
      email: "மின்னஞ்சல்",
      contactNo: "தொடர்பு எண்",
      image: "பட URL",
      about: "பற்றி",
      linkedin: "லிங்க்டின்",
      github: "கிட்ஹப்",
      leetcode: "லீட்கோட்",
      experience: "அனுபவம்",
      companyOrCollege: "நிறுவனம்/கல்லூரி",
      projects: "திட்டங்கள்",
      addProject: "திட்டம் சேர்க்கவும்",
      remove: "அகற்று",
      submit: "சமர்ப்பிக்கவும்",
    },
    te: {
      firstName: "మొదటి పేరు",
      middleName: "మధ్య పేరు",
      lastName: "చివరి పేరు",
      email: "ఇమెయిల్",
      contactNo: "ఫోన్ నంబర్",
      image: "చిత్ర URL",
      about: "గురించి",
      linkedin: "లింక్డ్ఇన్",
      github: "గిట్హబ్",
      leetcode: "లీట్కోడ్",
      experience: "అనుభవం",
      companyOrCollege: "కంపెనీ/కాలేజ్",
      projects: "ప్రాజెక్టులు",
      addProject: "ప్రాజెక్టు జోడించండి",
      remove: "తొలగించు",
      submit: "సమర్పించు",
    },
    kn: {
      firstName: "ಮೊದಲ ಹೆಸರು",
      middleName: "ಮಧ್ಯ ಹೆಸರು",
      lastName: "ಕೊನೆಯ ಹೆಸರು",
      email: "ಇಮೇಲ್",
      contactNo: "ಸಂಪರ್ಕ ಸಂಖ್ಯೆ",
      image: "ಚಿತ್ರ URL",
      about: "ಬಗ್ಗೆ",
      linkedin: "ಲಿಂಕ್ಡ್‌ಇನ್",
      github: "ಗಿಥಬ್",
      leetcode: "ಲೀಟ್‌ಕೋಡ್",
      experience: "ಅನುಭವ",
      companyOrCollege: "ಕಂಪನಿ/ಕಾಲೇಜು",
      projects: "ಪ್ರಾಜೆಕ್ಟ್ಗಳು",
      addProject: "ಪ್ರಾಜೆಕ್ಟ್ ಸೇರಿಸಿ",
      remove: "ತೆಗೆದುಹಾಕಿ",
      submit: "ಸಲ್ಲಿಸು",
    },
  };

  return (
    <div className="frontpage-container">
      <header className="frontpage-header">
        <h1>Multi-language Portfolio Builder</h1>
        <div className="language-switcher">
          <label htmlFor="language-select">Select Language:</label>
          <select
            id="language-select"
            onChange={handleLanguageChange}
            value={selectedLanguage}
          >
            {Object.keys(languages).map((lang) => (
              <option key={lang} value={lang}>
                {languages[lang]}
              </option>
            ))}
          </select>
        </div>
      </header>

      <div className="form-container">
        <h2>Portfolio Form ({languages[selectedLanguage]})</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">
              {translations[selectedLanguage].firstName}:
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData[selectedLanguage].firstName}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="middleName">
              {translations[selectedLanguage].middleName}:
            </label>
            <input
              type="text"
              id="middleName"
              name="middleName"
              value={formData[selectedLanguage].middleName}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">
              {translations[selectedLanguage].lastName}:
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData[selectedLanguage].lastName}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">
              {translations[selectedLanguage].email}:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData[selectedLanguage].email}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="contactNo">
              {translations[selectedLanguage].contactNo}:
            </label>
            <input
              type="text"
              id="contactNo"
              name="contactNo"
              value={formData[selectedLanguage].contactNo}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="image">
              {translations[selectedLanguage].image}:
            </label>
            <input
              type="text"
              id="image"
              name="image"
              value={formData[selectedLanguage].image}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="about">
              {translations[selectedLanguage].about}:
            </label>
            <textarea
              id="about"
              name="about"
              value={formData[selectedLanguage].about}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="linkedin">
              {translations[selectedLanguage].linkedin}:
            </label>
            <input
              type="text"
              id="linkedin"
              name="linkedin"
              value={formData[selectedLanguage].linkedin}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="github">
              {translations[selectedLanguage].github}:
            </label>
            <input
              type="text"
              id="github"
              name="github"
              value={formData[selectedLanguage].github}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="leetcode">
              {translations[selectedLanguage].leetcode}:
            </label>
            <input
              type="text"
              id="leetcode"
              name="leetcode"
              value={formData[selectedLanguage].leetcode}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="experience">
              {translations[selectedLanguage].experience}:
            </label>
            <input
              type="text"
              id="experience"
              name="experience"
              value={formData[selectedLanguage].experience}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="companyOrCollege">
              {translations[selectedLanguage].companyOrCollege}:
            </label>
            <input
              type="text"
              id="companyOrCollege"
              name="companyOrCollege"
              value={formData[selectedLanguage].companyOrCollege}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>{translations[selectedLanguage].projects}:</label>
            {formData[selectedLanguage].projects.map((project, index) => (
              <div key={index} className="project-group">
                <input
                  type="text"
                  name="name"
                  placeholder={translations[selectedLanguage].addProject}
                  value={project.name}
                  onChange={(e) => handleProjectChange(index, e)}
                />
                <input
                  type="text"
                  name="githubLink"
                  placeholder={translations[selectedLanguage].github} // Updated placeholder
                  value={project.githubLink}
                  onChange={(e) => handleProjectChange(index, e)}
                />
                <button type="button" onClick={() => removeProject(index)}>
                  {translations[selectedLanguage].remove}
                </button>
              </div>
            ))}
            <button type="button" onClick={addProject}>
              {translations[selectedLanguage].addProject}
            </button>
          </div>

          <button type="submit">{translations[selectedLanguage].submit}</button>
        </form>
      </div>
    </div>
  );
};

export default FrontPage;
