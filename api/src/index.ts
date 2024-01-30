import { connect } from "./database";
import app from "./app";
const port = 3002;
connect();
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
