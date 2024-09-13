import { EIconColor } from '@/components/Icon/Icon.enum';

const Svg = ({ color = EIconColor.STYLE_ARROW }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={123}
      height={122}
      viewBox="0 0 123 122"
      fill="none"
    >
      <g filter="url(#filter0_ddf_744_72908)">
        <circle cx="62.254" cy="57.9913" r="54.67" fill="white" />
      </g>
      <path d="M42.439 71.918L81.6326 44.2077L42.439 71.918Z" fill="black" />
      <path
        d="M42.439 71.918L81.6326 44.2077"
        stroke="black"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M77.3608 70.963L81.9971 43.9513L54.9854 39.315"
        stroke="black"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <filter
          id="filter0_ddf_744_72908"
          x="0.583984"
          y="0.321289"
          width="122.34"
          height="121.34"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx={2} dy={5} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.822526 0 0 0 0 0.0127181 0 0 0 0 0.450014 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_744_72908"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx={-4} />
          <feGaussianBlur stdDeviation="1.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.2 0 0 0 0 0 0 0 0 0 1 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_744_72908"
            result="effect2_dropShadow_744_72908"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_744_72908"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="0.5"
            result="effect3_foregroundBlur_744_72908"
          />
        </filter>
      </defs>
    </svg>
  );
};
export default Svg;