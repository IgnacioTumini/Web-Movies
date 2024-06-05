import { server } from "./src/server.js";
import { dbCon } from "./src/config/dbCon.js";

dbCon().then((res) => {
  server.listen(3000, () => console.log("Server up on port 3000"));
});
