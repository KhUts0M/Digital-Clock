function updateClock() {
  const container = document.querySelector(".container");
  container.classList.toggle("flipped");

  const now = new Date();

  const day = now.toLocaleString("en-us", { weekday: "long" });
  const date = now.getDate();
  const month = now.toLocaleString("en-us", { month: "long" });
  const year = now.getFullYear();

  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  const dateString = `${day}, ${date} ${month} ${year}`;
  const timeString = `${hours} : ${minutes} : ${seconds}`;

  document.getElementById("clock").innerHTML = `
    <div>${dateString}</div>  
    <div>${timeString}</div>
  `;
}

setInterval(updateClock, 1000);

updateClock();
