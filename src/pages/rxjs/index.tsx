import { useEffect, useRef } from "react";
import { fromEvent, throttleTime, map, scan, range, filter } from "rxjs";

export default function RxJSPage() {
  const button1Ref = useRef<HTMLButtonElement>(null);
  const button2Ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    fromEvent(button1Ref.current!, "click")
      .pipe(
        throttleTime(1000),
        scan((count) => count + 1, 0)
      )
      .subscribe((count) => console.log(`Clicked ${count} times`));

    fromEvent<MouseEvent>(button2Ref.current!, "click")
      .pipe(
        throttleTime(1000),
        map((event) => event.clientX),
        scan((count, clientX) => count + clientX, 0)
      )
      .subscribe((count) => console.log(count));

    range(1, 200)
      .pipe(
        filter((x) => x % 2 === 1),
        map((x) => x + x)
      )
      .subscribe((x) => console.log(x));
  }, []);

  return (
    <div>
      <h1>RxJS</h1>
      <div>
        <button ref={button1Ref}>button1 with throttle 1000</button>
      </div>
      <div>
        <button ref={button2Ref}>button2</button>
      </div>
    </div>
  );
}
