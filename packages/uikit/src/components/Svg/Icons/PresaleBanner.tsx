import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg
      {...props}
      viewBox="0 0 321 82"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect x="321" y="82" width="321" height="82" rx="20" transform="rotate(-180 321 82)" fill="url(#pattern0)" />
      <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_633_1350" transform="translate(0 -2.11677) scale(0.000976562 0.00382289)" />
        </pattern>
        <image
          id="image0_633_1350"
          width="1024"
          height="1369"
        />
      </defs>
    </Svg>
  );
};

export default Icon;