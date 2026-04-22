const BERTHA_BIRTH_YEAR_BCE = 3400000000;

function formatYears(years) {
  if (years >= 1e9) {
    return `${(years / 1e9).toFixed(3)} billion years`;
  }
  if (years >= 1e6) {
    return `${(years / 1e6).toFixed(1)} million years`;
  }
  return `${years.toLocaleString()} years`;
}

function updateBerthaAge() {
  const currentYear = new Date().getFullYear();
  const estimatedAgeYears = BERTHA_BIRTH_YEAR_BCE + currentYear;
  const ageElement = document.getElementById("ageCounter");

  if (ageElement) {
    ageElement.textContent = formatYears(estimatedAgeYears);
    ageElement.title = `${estimatedAgeYears.toLocaleString()} total years`;
  }
}

function updateToday() {
  const today = new Date();
  const todayElement = document.getElementById("today");
  if (todayElement) {
    todayElement.textContent = today.toLocaleDateString();
  }
}

updateBerthaAge();
updateToday();
