import AgoraService from "./AgoraService";
import AgoraClient from "../infra/AgoraClient";

/**
 * service
 */
const agoraService = new AgoraService();

/**
 * ServiceFactory
 */
export default class ServiceFactory {
  public static getAgoraService = () => agoraService;
}