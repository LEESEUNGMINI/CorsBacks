const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/sound/:name", (req, res) => {
  const { name } = req.params;
  if (name == "dog") {
    res.json({ sound: "멍멍" });
  } else if (name == "cat") {
    res.json({ sound: "야옹" });
  } else if (name == "fig") {
    res.json({ sound: "꿀꿀" });
  } else {
    res.json({ sound: "알수없음" });
  }
});

app.get("/cat", (req, res) => {
  res.send({ name: "고양이" });
});

app.get("/neople", (req, res) => {
  fetch(
    "https://api.neople.co.kr/df/jobs?apikey=Mw0fYJwiAJL76wBNq1mezxFH01NMosOZ"
  )
    .then((response) => response.json())
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      res.status(500).json({ error: "Error fetching data from Neople API" });
    });
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on localhost:${PORT}`);
});
