// app.js
// Sample job listings data
const jobListings = [
    {
      title: "Software Engineer Intern",
      company: "Acme Inc.",
      location: "New York, NY",
      industry: "Technology"
    },
    {
      title: "Marketing Coordinator",
      company: "Globex Corp.",
      location: "San Francisco, CA",
      industry: "Marketing"
    },
    // Add more job listings as needed
  ];
  
  // Sample company profiles data
  const companyProfiles = [
    {
      name: "Acme Inc.",
      description: "Leading technology company focused on innovative solutions.",
      website: "https://www.acmeinc.com"
    },
    {
      name: "Globex Corp.",
      description: "Global marketing agency with a diverse client portfolio.",
      website: "https://www.globexcorp.com"
    },
    // Add more company profiles as needed
  ];
  
  // Function to render job listings
  function renderJobListings() {
    const jobListingsContainer = document.getElementById("job-listings");
    jobListingsContainer.innerHTML = "";
  
    jobListings.forEach(job => {
      const jobListing = document.createElement("li");
      jobListing.textContent = `${job.title} - ${job.company} (${job.location})`;
      jobListingsContainer.appendChild(jobListing);
    });
  }
  
  // Function to render company profiles
  function renderCompanyProfiles() {
    const companyListContainer = document.getElementById("company-list");
    companyListContainer.innerHTML = "";
  
    companyProfiles.forEach(company => {
      const companyProfile = document.createElement("div");
      companyProfile.classList.add("company-profile");
      companyProfile.innerHTML = `
        <h3>${company.name}</h3>
        <p>${company.description}</p>
        <a href="${company.website}" target="_blank">Website</a>
      `;
      companyListContainer.appendChild(companyProfile);
    });
  }
  
  // Function to handle search and filter
  function handleSearch() {
    const searchInput = document.getElementById("search-input");
    const filterLocation = document.getElementById("filter-location");
    const filterIndustry = document.getElementById("filter-industry");
  
    const searchTerm = searchInput.value.toLowerCase();
    const locationFilter = filterLocation.value;
    const industryFilter = filterIndustry.value;
  
    const filteredJobListings = jobListings.filter(job => {
      const titleMatch = job.title.toLowerCase().includes(searchTerm);
      const locationMatch = locationFilter === "" || job.location === locationFilter;
      const industryMatch = industryFilter === "" || job.industry === industryFilter;
      return titleMatch && locationMatch && industryMatch;
    });
  
    renderJobListings(filteredJobListings);
  }
  
  // Event listeners
  document.getElementById("search-input").addEventListener("input", handleSearch);
  document.getElementById("filter-location").addEventListener("change", handleSearch);
  document.getElementById("filter-industry").addEventListener("change", handleSearch);
  
  // Initial render
  renderJobListings(jobListings);
  renderCompanyProfiles();