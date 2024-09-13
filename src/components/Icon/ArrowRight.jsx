import { EIconColor } from '@/components/Icon/Icon.enum';

const Svg = ({ color = EIconColor.BLACK }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={54}
      height={48}
      viewBox="0 0 54 48"
      fill="none"
    >
      <path d="M2.58594 24H50.5859H2.58594Z" fill="#DF822D" />
      <path
        d="M2.58594 24H50.5859"
        stroke="white"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M31.6524 43.3799L51.0318 24.0005L31.6524 4.62104"
        stroke="white"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default Svg;