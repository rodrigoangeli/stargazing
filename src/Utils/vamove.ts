import { createApi, IOptions } from "instamancer"
import * as fs from "fs";


const result = [];
let options: IOptions = {
	total: 10,
	headless: true,
	fullAPI: false,
};
const user = createApi("user", "therock", options);

(async () => {
	for await (const post of user.generator()) {
			result.push(post)
		}
		console.log(JSON.stringify(result))
})();