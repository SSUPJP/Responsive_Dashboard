const ctx1 = document.getElementById("myChart").getContext("2d");
const ctx2 = document.getElementById("earning1").getContext("2d");

const myChart = new Chart(ctx1, {
  type: "polarArea",
  data: {
    labels: ["Amazon", "Coupang", "Naver"],
    datasets: [
      {
        data: [1400, 1500, 1300],
        backgroundColor: [
          "rgba(255, 180, 42, 1)",
          "rgba(54, 162, 235, 1)",

          "rgba(87, 190, 87, 1)",
        ],
      },
    ],
  },
  options: {
    responsive: true,
  },
});

const earning1 = new Chart(ctx2, {
  type: "bar",
  data: {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "# of orders",
        data: [
          1200, 1900, 3000, 1760, 2200, 1300, 1500, 1900, 1280, 1390, 2000,
          3700,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",

          "rgba(55, 99, 132, 0.2)",
          "rgba(154, 162, 235, 0.2)",
          "rgba(55, 206, 86, 0.2)",
          "rgba(175, 192, 192, 0.2)",
          "rgba(53, 102, 255, 0.2)",
          "rgba(55, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(55, 99, 132, 1)",
          "rgba(154, 162, 235, 1)",
          "rgba(55, 206, 86, 1)",
          "rgba(175, 192, 192, 1)",
          "rgba(53, 102, 255, 1)",
          "rgba(55, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
  },
});
