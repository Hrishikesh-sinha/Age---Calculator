const button = document.getElementById("btn");
const result = document.getElementById("result");
const toggle = document.getElementById("toggle");
const body = document.body;

button.addEventListener("click", () => {
  const dobValue = document.getElementById("dob").value;

  if (dobValue === "") {
    result.innerText = "Please select your date of birth";
    return;
  }

  const dob = new Date(dobValue);
  const today = new Date();

  let years = today.getFullYear() - dob.getFullYear();
  let months = today.getMonth() - dob.getMonth();
  let days = today.getDate() - dob.getDate();

  if (days < 0) {
    months--;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  result.innerText = `You are ${years} years, ${months} months, and ${days} days old`;
});

toggle.addEventListener("click", () => {
  if (body.classList.contains("light")) {
    body.classList.remove("light");
    body.classList.add("dark");
    toggle.innerText = "🌞 Light Mode";
  } else {
    body.classList.remove("dark");
    body.classList.add("light");
    toggle.innerText = "🌙 Dark Mode";
  }
});

