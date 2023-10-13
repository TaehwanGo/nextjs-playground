import { BehaviorSubject } from "rxjs";
import { distinctUntilChanged, map } from "rxjs/operators";

type Cell = {
  val: () => any;
  addWatcher: (handler: (value: any) => void) => void;
  update: (f: (param: any) => any) => void;
};

export function ValueCell(initialValue: Cell) {
  const subject = new BehaviorSubject(initialValue);

  return {
    val: () => subject.value,
    update: (f: (param: any) => any) => {
      const newValue = f(subject.value);
      subject.next(newValue);
    },
    addWatcher: (handler: (value: any) => void) => {
      subject.pipe(distinctUntilChanged()).subscribe(handler);
    },
  };
}

export function FormulaCell(upstreamCell: Cell, f: (value: any) => void) {
  const derivedValue = new BehaviorSubject(f(upstreamCell.val()));

  upstreamCell.addWatcher((newValue) => {
    derivedValue.next(f(newValue));
  });

  return {
    val: () => derivedValue.value,
    addWatcher: (handler: (value: any) => void) => {
      derivedValue.pipe(distinctUntilChanged()).subscribe(handler);
    },
  };
}
