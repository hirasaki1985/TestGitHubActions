import { config } from "dotenv";

config({ path: __dirname + "/../../.env" });

/**
 * DotEnv
 */
export default class DotEnvUtil {
  public static getServerConfig = () => {
    return {
      port: Number(process.env.NODE_APP_SERVER_PORT as string),
    };
  };

  public static getAgoraConfig = () => {
    return {
      appId: process.env.NODE_APP_AGORA_APP_ID as string,
      appCertificate: process.env.NODE_APP_AGORA_APP_CERTIFICATE as string,
      howHoursTokenValid: Number(process.env.NODE_APP_AGORA_HOW_HOURS_TOKEN_VALID as string)
    };
  };
}
