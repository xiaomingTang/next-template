import type { BreakpointOverrides as MuiBreakpointOverrides } from '@mui/material'

declare module '@mui/material' {
  export interface BreakpointOverrides extends MuiBreakpointOverrides {
    mobile: true; // 添加 `mobile` 断点
    tablet: true;
    desktop: true;
  }
}
