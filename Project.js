
function toggleTerm(row){
  const details = row.nextElementSibling;

  if(details.style.maxHeight){
    details.style.maxHeight = null;
    row.querySelector("span").innerHTML = "▼ " + row.querySelector("span").innerText.replace("▲ ","");
  } else {
    details.style.maxHeight = details.scrollHeight + "px";
    row.querySelector("span").innerHTML = "▲ " + row.querySelector("span").innerText.replace("▼ ","");
  }
}

// API URL
const API_URL = "https://6954d7fe1cd5294d2c7da4f2.mockapi.io/todo/api/v1/db";

// Fetch student data
async function fetchStudentData() {
  try {
    const response = await fetch(API_URL);
    const result = await response.json();

    // API me array hai, first student le rahe hain
    const student = result[0].student;

    /* ================= BASIC INFO ================= */
    document.getElementById("studentNameTop").innerText = student.name;
    document.getElementById("studentName").innerText = student.name;
    document.getElementById("rollNo").innerText = student.rollNo;
    document.getElementById("semester").innerText = student.semester;
    document.getElementById("cgpa").innerText = student.cgpa;
    document.getElementById("studentImage").src = student.image;

    /* ================= SUBJECTS ================= */
    student.subjects.forEach((subject, index) => {
      const num = index + 1;

      const subName = document.getElementById(`sub${num}_name`);
      const subGrade = document.getElementById(`sub${num}_grade`);

      if (subName && subGrade) {
        subName.innerText = subject.name;
        subGrade.innerText = subject.grade;
      }
    });

  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Call function
fetchStudentData();
