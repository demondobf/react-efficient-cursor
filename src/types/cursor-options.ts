export interface CursorOptions {
  /** Speed of the component following the cursor. It is not recommended to set it below `0` and above `1` */
  speed?: number;
  /** Optional action that is being invoked when moving the cursor. */
  onMove?: (e: MouseEvent) => void;
}
