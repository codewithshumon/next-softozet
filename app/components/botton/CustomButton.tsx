/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from "react";

import useMouse from "@/app/hooks/useMouse";
import ArrowRightLeft from "../global/ArrowRightLeft";

interface CustomButtonProps {
  arrow?: {
    rightArrow?: boolean;
    leftArrow?: boolean;
    color: string;
    strokeWidth: string;
    className: string;
    size: number;
  };
  isArrow?: boolean;
  textColor: string;
  buttonArrowColor: string;
  borderColor: string;
  buttonBgColor: string;
  bottonText: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  textColor,
  borderColor,
  buttonBgColor,
  bottonText,
  arrow,
  isArrow,
}) => {
  const { x, y } = useMouse();
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    updateButtonStyle();
  }, [x, y]);

  const updateButtonStyle = () => {
    const btn = btnRef.current;

    if (btn) {
      const rect = btn.getBoundingClientRect();
      const mouseX = x - rect.left;
      const mouseY = y - rect.top;
      btn.style.setProperty("--x", mouseX + "px");
      btn.style.setProperty("--y", mouseY + "px");
    }
  };
  return (
    <button
      ref={btnRef}
      className={`relative w-fit circle-button-bg  flex flex-row items-center justify-center gap-2 border-[1px] rounded-full px-3 py-2 overflow-hidden border-[${borderColor}] text-${textColor}`}
      style={{ "--button-bg-color": buttonBgColor } as React.CSSProperties}
    >
      <span className={`font-bold text-${textColor}`}>{bottonText}</span>
      {isArrow && (
        <ArrowRightLeft
          rightArrow={arrow?.rightArrow}
          leftArrow={arrow?.leftArrow}
          color={arrow?.color}
          strokeWidth={arrow?.strokeWidth}
          className={arrow?.className}
          size={arrow?.size}
        />
      )}
    </button>
  );
};

export default CustomButton;
