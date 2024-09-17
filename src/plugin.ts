import {HesCConfApi, shellRegions } from "@uxland/hes-cconf-shell";
import { MyIframeElement } from "./my-iframe-element";

export const initialize = (api: HesCConfApi) => {
  console.log(`Plugin ${api.pluginInfo.pluginId} initialized`);
  //obtener la URL a partir del pluginId con un servicio vuestro
  const url = "https://www.sport.es/es/";
  // Define el custom element con el nombre dinámico
  customElements.define(`my-iframe-element-${api.pluginInfo.pluginId}`, MyIframeElement);
  api.regionManager.registerMainView({
    id: api.pluginInfo.pluginId,
    factory: () =>  Promise.resolve(new MyIframeElement(url)) , //pasar la URL por constructor
  });
  
  return Promise.resolve();
};
export const dispose = (api: HesCConfApi) => {
  console.log(`Plugin ${api.pluginInfo.pluginId} disposed`);
  api.regionManager.removeView(shellRegions.main, api.pluginInfo.pluginId);
  return Promise.resolve();
}