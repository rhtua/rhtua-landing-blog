interface ArrowIconProps {
  className?: string;
  width?: string | number;
  height?: string | number;
}

export const ArrowIcon = ({ className = "", width = "11", height = "17", ...props }: ArrowIconProps) => (
  <svg
    role="img"
    width={width}
    height={height}
    viewBox="0 0 11 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`shrink-0 ${className}`}
    {...props}
  >
    <path
      d="M0.662299 1.85718C0.558917 1.95186 0.500033 2.0856 0.5 2.22579C0.499967 2.36598 0.558788 2.49974 0.662127 2.59447L7.10415 8.50003L0.663353 14.4056C0.560061 14.5003 0.501254 14.634 0.501261 14.7741C0.501267 14.9143 0.560085 15.048 0.663387 15.1427L2.00065 16.3686C2.19183 16.5438 2.48527 16.5438 2.67643 16.3685L9.96587 9.68497C9.96609 9.68478 9.9663 9.68458 9.96652 9.68438C10.1323 9.53324 10.2664 9.35119 10.3589 9.1474C10.4516 8.94319 10.5 8.72244 10.5 8.49826C10.5 8.27409 10.4516 8.05334 10.3589 7.84913C10.2664 7.64531 10.1322 7.46323 9.96643 7.31207C9.96625 7.3119 9.96606 7.31173 9.96587 7.31156L2.67634 0.631375C2.48524 0.456246 2.19198 0.456203 2.00083 0.631275L0.662299 1.85718Z"
      fill="currentColor"
      stroke="transparent"
      strokeLinejoin="round"
    />
  </svg>
);
