import React from "react";
export type DocWidgetProps = React.PropsWithChildren<{
  w: number;
}>;
export const WidthSpacer = ({ children, w }: DocWidgetProps) => (
  <div style={{ width: w }}>{children}</div>
);
