import * as fs from "fs";

const filePath = "../data/students.json";

const data = "Hello World!!";

fs.writeFileSync(filePath, data, "utf8");
