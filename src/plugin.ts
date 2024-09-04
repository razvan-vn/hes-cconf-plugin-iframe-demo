import {HesCConfApi, shellRegions } from "@uxland/hes-cconf-shell";
import { MyIframeElement } from "./my-iframe-element";

export const initialize = (api: HesCConfApi) => {
  console.log(`Plugin ${api.pluginInfo.pluginId} initialized`);
  api.regionManager.registerMainView({
    id: api.pluginInfo.pluginId,
    factory: () =>  Promise.resolve(new MyIframeElement()) ,
  }, "iframe plugin");
  
  return Promise.resolve();
};
export const dispose = (api: HesCConfApi) => {
  console.log(`Plugin ${api.pluginInfo.pluginId} disposed`);
  api.regionManager.removeView(shellRegions.main, api.pluginInfo.pluginId);
  return Promise.resolve();
}