import React from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  interface Window {
    VConsole: new () => any;
    safari?: any;
    MSStream?: any;
    /**
     * 会在运行时注入到 html script 标签中
     */
    INJECTED_NEXT_PUBLIC_APP_ENV?: 'production' | 'preprod' | 'staging' | 'development';
  }

  interface Document {
    mozFullScreenElement?: Element;
    webkitFullscreenElement?: Element;
    msFullscreenElement?: Element;

    mozFullScreenEnabled?: Document['fullscreenEnabled'];
    webkitFullScreenEnabled?: Document['fullscreenEnabled'];
    webkitFullscreenEnabled?: Document['fullscreenEnabled'];
    msFullscreenEnabled?: Document['fullscreenEnabled'];

    mozCancelFullScreen?: Document['exitFullscreen'];
    webkitExitFullscreen?: Document['exitFullscreen'];
    webkitExitFullScreen?: Document['exitFullscreen'];
    msExitFullscreen?: Document['exitFullscreen'];
  }

  interface Element {
    mozRequestFullScreen?: Element['requestFullscreen'];
    webkitRequestFullscreen?: Element['requestFullscreen'];
    webkitRequestFullScreen?: Element['requestFullscreen'];
    msRequestFullscreen?: Element['requestFullscreen'];
  }

  interface Error {
    cause?: Error;
    code?: number;
    message: string;
  }

  type ElementClassName = React.HTMLAttributes<HTMLDivElement>['className']
}

export {}
