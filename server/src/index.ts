import { getServer } from "./web_server/server";
import DotEnvUtil from "./util/DotEnvUtil";

const main = async () => {
  const server = await getServer();
  const serverConfig = DotEnvUtil.getServerConfig();

  const PORT = serverConfig.port || 3000;
  server.listen(PORT, () => {
    console.log("server listen start, ", PORT);
  });
};

main().then();
