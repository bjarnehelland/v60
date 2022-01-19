import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  PropsWithChildren,
} from "react";

type Props = {
  label: string;
  value: number;
  onChange: (value: number) => void;
  step?: number;
};

export function Input({
  label,
  value,
  onChange,
  step = 1,
  children,
}: PropsWithChildren<Props>) {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="text-2xl text-center">{label}</div>
      <div className="grid grid-cols-layout">
        <Button
          onClick={() => {
            const rounded = Math.round(value / step) * step;
            onChange(rounded > value ? rounded : rounded + step);
          }}
        >
          +
        </Button>
        <span className="text-9xl text-center">
          {children ? children : value}
        </span>

        <Button
          onClick={() => {
            const rounded = Math.round(value / step) * step;
            onChange(rounded < value ? rounded : rounded - step);
          }}
        >
          -
        </Button>
      </div>
    </div>
  );
}

function Button(
  props: DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) {
  return (
    <button
      {...props}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-6xl cursor-pointer w-32 h-32"
    ></button>
  );
}
