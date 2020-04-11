import { createApi, IOptions } from "instamancer";
import * as fs from "fs";

const result = [];
let options: IOptions = {
  total: 80,
  headless: true,
  fullAPI: true,
};
const user = createApi("user", process.argv[2], options);

(async () => {
  for await (let post of user.generator()) {
    console.log(JSON.stringify(post));
  }
})();
