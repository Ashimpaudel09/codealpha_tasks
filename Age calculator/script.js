function ageCalculator() {
    let dob = new Date(document.getElementById('dob').value);
    let currentDate = new Date();

    let year = currentDate.getFullYear() - dob.getFullYear();
    let month = currentDate.getMonth() - dob.getMonth();
    let day = currentDate.getDate() - dob.getDate();

    if (month < 0 || (month === 0 && day < 0)) {
        year--;
        month += 12;
    }

    if (day < 0) {
        month--;
        let prevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
        day += prevMonth.getDate();
    }

    document.getElementById('age').innerHTML = `Your current age is: ${year} year(s), ${month} month(s), and ${day} day(s)`;
}
window.addEventListener('DOMContentLoaded', () => {
  const dobInput = document.getElementById('dob');
  const today = new Date().toISOString().split('T')[0];
  dobInput.setAttribute('max', today);
});

