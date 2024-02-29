import { connect } from "./database";
import app from "./app";
const port = 3003;
connect();
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
