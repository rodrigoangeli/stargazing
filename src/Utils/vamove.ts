import { createApi, IOptions } from "instamancer";
import * as fs from "fs";

const result: any = [];

const user = createApi("user", process.argv[2], {
  total: parseFloat(process.argv[3]),
  headless: true,
  fullAPI: true,
});
(async () => {
  for await (let post of user.generator()) {
    console.log(JSON.stringify(post));
  }
})();
