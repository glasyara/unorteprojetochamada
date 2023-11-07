import * as fs from "fs";

const filePath = "./data/students.json";

const data = "Hello World!!";

function helloWorld() {
  const data = fs.readFileSync(filePath, "utf8");
  return data;

  //fs.writeFileSync(filePath, data, "utf8");
}

export { helloWorld };
