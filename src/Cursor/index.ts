const calculateLerp = (a: number, b: number, n: number) => (1 - n) * a + n * b;

class Cursor {
  private animationFrameID: number | null;
  private target: Matrix;
  private cursor: Matrix;
  private speed: number;

  constructor(private elementRef: HTMLDivElement, speed: number) {
    this.animationFrameID = null;
    this.target = { x: 0.5, y: 0.5 };
    this.cursor = { x: 0.5, y: 0.5 };
    this.speed = speed;
    this.init();
  }

  private handleMouseMove = (e: MouseEvent) => {
    this.target.x = e.clientX / window.innerWidth;
    this.target.y = e.clientY / window.innerHeight;

    if (!this.animationFrameID) this.animationFrameID = requestAnimationFrame(this.render);
  };

  private render = () => {
    const { target, cursor, speed, elementRef } = this;

    cursor.x = calculateLerp(cursor.x, target.x, speed);
    cursor.y = calculateLerp(cursor.y, target.y, speed);

    elementRef.style.setProperty('--cursor-x', cursor.x.toString());
    elementRef.style.setProperty('--cursor-y', cursor.y.toString());

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
    const { target, cursor } = this;
    const delta = Math.sqrt(Math.pow(target.x - cursor.x, 2) + Math.pow(target.y - cursor.y, 2));

    return delta < 0.001;
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
