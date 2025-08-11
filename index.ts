import server from "./src/server";
import { LogError, LogSuccess } from "./src/utils";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  LogSuccess(`[SERVER ON]: Running in http://localhost:${PORT}/api`);
});

server.on("ERROR", (error) => {
  LogError(`[SERVER ERROR]: ${error}`);
});
