import { calculateDifference, calculatePosition } from './utils';

class Cursor {
  private animationFrameID: number | null;
  private cursorDestination: Matrix;
  private cursorGhost: Matrix;
  private speed: number;

  constructor(private elementRef: HTMLDivElement, speed: number) {
    this.animationFrameID = null;
    this.cursorDestination = { x: 0.5, y: 0.5 };
    this.cursorGhost = { x: 0.5, y: 0.5 };
    this.speed = speed;
    this.init();
  }

  private handleMouseMove = (e: MouseEvent) => {
    this.cursorDestination.x = e.clientX / window.innerWidth;
    this.cursorDestination.y = e.clientY / window.innerHeight;

    if (!this.animationFrameID) this.animationFrameID = requestAnimationFrame(this.render);
  };

  private render = () => {
    const { cursorDestination, cursorGhost, speed, elementRef } = this;

    cursorGhost.x = calculatePosition(cursorGhost.x, cursorDestination.x, speed);
    cursorGhost.y = calculatePosition(cursorGhost.y, cursorDestination.y, speed);

    elementRef.style.setProperty('--cursor-x', cursorGhost.x.toString());
    elementRef.style.setProperty('--cursor-y', cursorGhost.y.toString());

    if (this.isCursorIdle()) {
      this.handleAnimationFrameCleanup();
      return;
    }

    this.animationFrameID = requestAnimationFrame(this.render);
  };

  private handleAnimationFrameCleanup() {
    this.animationFrameID && cancelAnimationFrame(this.animationFrameID);
    this.animationFrameID = null;
  }

  private isCursorIdle(): boolean {
    const cursorTargetDifference = calculateDifference(this.cursorGhost, this.cursorDestination);
    return cursorTargetDifference < 0.001;
  }

  private init() {
    window.addEventListener('mousemove', this.handleMouseMove);
    this.animationFrameID = requestAnimationFrame(this.render);
  }

  public destroy() {
    window.removeEventListener('mousemove', this.handleMouseMove);
  }
}

export default Cursor;
