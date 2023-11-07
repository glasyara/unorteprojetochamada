import * as fs from "fs";

const filePath = "../data/students.json";

const data = "Hello World!!";

function helloWorld() {
  fs.writeFileSync(filePath, data, "utf8");
}

export { helloWorld };
