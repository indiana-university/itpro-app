/**
 * Copyright (C) 2018 The Trustees of Indiana University
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from "react";

export const ChildrenUnitsIcon: React.SFC<IIconProps> = props => (
  <>
    <svg width="41" height="35" viewBox="0 0 41 35" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#clip0)">
        <rect width="41" height="35" />
        <rect x="15.3528" y="0.5" width="10.2944" height="10.2904" fill="#C4C4C4" stroke="black" />
        <rect x="15.3528" y="24.21" width="10.2944" height="10.2904" fill="#DF3603" stroke="black" />
        <rect x="30.2056" y="24.21" width="10.2944" height="10.2904" fill="#DF3603" stroke="black" />
        <rect x="0.5" y="24.21" width="10.2944" height="10.2904" fill="#DF3603" stroke="black" />
        <line x1="20.0001" y1="23.71" x2="20.0001" y2="11.2905" stroke="black" />
        <path d="M35.585 24.1118V16.334H5.4151V24.1118" stroke="black" />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="41" height="35" fill="white" />
        </clipPath>
      </defs>
    </svg>
  </>
);

export const ParentUnitIcon: React.SFC<IIconProps> = props => (
  <>
    <svg width="41" height="35" viewBox="0 0 41 35" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#clip0)">
        <rect width="41" height="35" />
        <rect x="15.3528" y="0.5" width="10.2944" height="10.2904" fill="#DF3603" stroke="black" />
        <rect x="15.3528" y="24.21" width="10.2944" height="10.2904" fill="#C4C4C4" stroke="black" />
        <rect x="30.2056" y="24.21" width="10.2944" height="10.2904" fill="#C4C4C4" stroke="black" />
        <rect x="0.5" y="24.21" width="10.2944" height="10.2904" fill="#C4C4C4" stroke="black" />
        <line x1="20.0001" y1="23.71" x2="20.0001" y2="11.2905" stroke="black" />
        <path d="M35.585 24.1118V16.334H5.4151V24.1118" stroke="black" />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="41" height="35" fill="white" />
        </clipPath>
      </defs>
    </svg>
  </>
);
export const Chevron: React.SFC<IIconProps> = props => (
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" {...props}>
    <path
      fill="currentColor"
      d="M8,12.46a2,2,0,0,1-1.52-.7L1.24,5.65a1,1,0,1,1,1.52-1.3L8,10.46l5.24-6.11a1,1,0,0,1,1.52,1.3L9.52,11.76A2,2,0,0,1,8,12.46Z"
    />
  </svg>
);
export const Pencil: React.SFC<IIconProps> = props => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M14.62 3.16938L11.74 0.319375C11.5339 0.114803 11.2554 7.01325e-09 10.965 7.01325e-09C10.6746 7.01325e-09 10.3961 0.114803 10.19 0.319375L0 10.5994V14.9794H4.45L14.64 4.70938C14.8389 4.50115 14.9482 4.22323 14.9445 3.93529C14.9407 3.64736 14.8242 3.37237 14.62 3.16938ZM3.62 12.9794H2V11.4194L8 5.41938L9.58 6.97938L3.62 12.9794ZM11 5.54938L9.4 3.97938L11 2.37938L12.57 3.97938L11 5.54938Z"
      fill="currentColor"
    />
  </svg>
);
export const ArrowUp: React.SFC<IIconProps> = props => (
  <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M9.71409 4.2958L5.71409 0.295798C5.62113 0.20207 5.51053 0.127676 5.38867 0.0769069C5.26681 0.0261382 5.1361 -1.35258e-10 5.00409 -1.35258e-10C4.87208 -1.35258e-10 4.74137 0.0261382 4.61951 0.0769069C4.49766 0.127676 4.38705 0.20207 4.29409 0.295798L0.294092 4.2958C0.105788 4.4841 -1.1037e-07 4.7395 -1.1037e-07 5.0058C-1.1037e-07 5.2721 0.105788 5.52749 0.294092 5.7158C0.482395 5.9041 0.73779 6.00989 1.00409 6.00989C1.27039 6.00989 1.52579 5.9041 1.71409 5.7158L4.00409 3.4158L4.00409 15.0058C4.00409 15.271 4.10945 15.5254 4.29699 15.7129C4.48452 15.9004 4.73888 16.0058 5.00409 16.0058C5.26931 16.0058 5.52366 15.9004 5.7112 15.7129C5.89873 15.5254 6.00409 15.271 6.00409 15.0058L6.00409 3.4158L8.29409 5.7058C8.48539 5.86962 8.73147 5.95523 8.98314 5.94551C9.23482 5.93579 9.47356 5.83146 9.65165 5.65336C9.82975 5.47527 9.93408 5.23653 9.9438 4.98485C9.95352 4.73318 9.86792 4.4871 9.70409 4.2958H9.71409Z"
      fill="currentColor"
    />
  </svg>
);
export const ArrowDown: React.SFC<IIconProps> = props => (
  <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M0.230245 11.7101L4.23024 15.7101C4.32321 15.8038 4.43381 15.8782 4.55567 15.929C4.67753 15.9797 4.80823 16.0059 4.94024 16.0059C5.07226 16.0059 5.20296 15.9797 5.32482 15.929C5.44668 15.8782 5.55728 15.8038 5.65024 15.7101L9.65024 11.7101C9.83855 11.5218 9.94434 11.2664 9.94434 11.0001C9.94434 10.7338 9.83855 10.4784 9.65024 10.2901C9.46194 10.1018 9.20655 9.99597 8.94024 9.99597C8.67394 9.99597 8.41855 10.1018 8.23024 10.2901L5.94024 12.5901L5.94025 1.00006C5.94025 0.734844 5.83489 0.48049 5.64735 0.292954C5.45982 0.105418 5.20546 6.06209e-05 4.94025 6.05977e-05C4.67503 6.05745e-05 4.42068 0.105418 4.23314 0.292954C4.0456 0.48049 3.94025 0.734844 3.94025 1.00006L3.94024 12.5901L1.65025 10.3001C1.45894 10.1362 1.21287 10.0506 0.961192 10.0603C0.709516 10.0701 0.470777 10.1744 0.292682 10.3525C0.114587 10.5306 0.0102544 10.7693 0.00053354 11.021C-0.00918728 11.2727 0.0764193 11.5188 0.240245 11.7101L0.230245 11.7101Z"
      fill="currentColor"
    />
  </svg>
);
export const TrashCan: React.SFC<IIconProps> = props => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M10.5 11.5V7.5C10.5 6.9 10.1 6.5 9.5 6.5C8.9 6.5 8.5 6.9 8.5 7.5V11.5C8.5 12.1 8.9 12.5 9.5 12.5C10.1 12.5 10.5 12.1 10.5 11.5Z"
      fill="currentColor"
    />
    <path
      d="M7.5 11.5V7.5C7.5 6.9 7.1 6.5 6.5 6.5C5.9 6.5 5.5 6.9 5.5 7.5V11.5C5.5 12.1 5.9 12.5 6.5 12.5C7.1 12.5 7.5 12.1 7.5 11.5Z"
      fill="currentColor"
    />
    <path
      d="M15 3H11V1C11 0.4 10.6 0 10 0H6C5.4 0 5 0.4 5 1V3H1C0.4 3 0 3.4 0 4C0 4.6 0.4 5 1 5H2V15C2 15.6 2.4 16 3 16H13C13.6 16 14 15.6 14 15V5H15C15.6 5 16 4.6 16 4C16 3.4 15.6 3 15 3ZM7 2H9V3H7V2ZM12 5V14H4V5H12Z"
      fill="currentColor"
    />
  </svg>
);

export const AddUser: React.SFC<IIconProps> = props => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M15 6H14V5C14 4.73478 13.8946 4.48043 13.7071 4.29289C13.5196 4.10536 13.2652 4 13 4C12.7348 4 12.4804 4.10536 12.2929 4.29289C12.1054 4.48043 12 4.73478 12 5V6H11C10.7348 6 10.4804 6.10536 10.2929 6.29289C10.1054 6.48043 10 6.73478 10 7C10 7.26522 10.1054 7.51957 10.2929 7.70711C10.4804 7.89464 10.7348 8 11 8H12V9C12 9.26522 12.1054 9.51957 12.2929 9.70711C12.4804 9.89464 12.7348 10 13 10C13.2652 10 13.5196 9.89464 13.7071 9.70711C13.8946 9.51957 14 9.26522 14 9V8H15C15.2652 8 15.5196 7.89464 15.7071 7.70711C15.8946 7.51957 16 7.26522 16 7C16 6.73478 15.8946 6.48043 15.7071 6.29289C15.5196 6.10536 15.2652 6 15 6Z"
      fill="currentColor"
    />
    <path
      d="M6 8C6.79113 8 7.56448 7.76541 8.22228 7.32588C8.88008 6.88635 9.39277 6.26164 9.69552 5.53074C9.99827 4.79983 10.0775 3.99556 9.92314 3.21964C9.7688 2.44372 9.38784 1.73098 8.82843 1.17157C8.26902 0.612165 7.55629 0.231202 6.78036 0.0768607C6.00444 -0.0774802 5.20017 0.00173312 4.46927 0.304484C3.73836 0.607234 3.11365 1.11992 2.67412 1.77772C2.2346 2.43552 2 3.20888 2 4C2 5.06087 2.42143 6.07828 3.17157 6.82843C3.92172 7.57857 4.93913 8 6 8ZM6 2C6.39556 2 6.78224 2.1173 7.11114 2.33706C7.44004 2.55683 7.69638 2.86918 7.84776 3.23464C7.99913 3.60009 8.03874 4.00222 7.96157 4.39018C7.8844 4.77814 7.69392 5.13451 7.41421 5.41422C7.13451 5.69392 6.77814 5.8844 6.39018 5.96157C6.00222 6.03874 5.60009 5.99914 5.23463 5.84776C4.86918 5.69639 4.55682 5.44004 4.33706 5.11114C4.1173 4.78224 4 4.39556 4 4C4 3.46957 4.21071 2.96086 4.58579 2.58579C4.96086 2.21072 5.46957 2 6 2Z"
      fill="currentColor"
    />
    <path
      d="M8 9H4C2.93913 9 1.92172 9.42143 1.17157 10.1716C0.421427 10.9217 0 11.9391 0 13L0 14.75C0 15.0815 0.131696 15.3995 0.366117 15.6339C0.600537 15.8683 0.918479 16 1.25 16H10.75C10.9142 16 11.0767 15.9677 11.2284 15.9048C11.38 15.842 11.5178 15.75 11.6339 15.6339C11.75 15.5178 11.842 15.38 11.9048 15.2284C11.9677 15.0767 12 14.9142 12 14.75V13C12 11.9391 11.5786 10.9217 10.8284 10.1716C10.0783 9.42143 9.06087 9 8 9ZM10 14H2V13C2 12.4696 2.21071 11.9609 2.58579 11.5858C2.96086 11.2107 3.46957 11 4 11H8C8.53043 11 9.03914 11.2107 9.41421 11.5858C9.78929 11.9609 10 12.4696 10 13V14Z"
      fill="currentColor"
    />
  </svg>
);

export const Eye: React.SFC<IIconProps> = props => (
  <svg width="16" height="16" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="16" height="16" fill="white" />
    <path
      d="M0.999756 8L0.347277 7.63017C0.217249 7.85958 0.217249 8.14042 0.347277 8.36983L0.999756 8ZM15.0002 8L15.6527 8.36983C15.7828 8.14042 15.7828 7.85958 15.6527 7.63017L15.0002 8ZM1.65223 8.36983C2.86995 6.22143 5.24946 4.75 8 4.75V3.25C4.70806 3.25 1.83073 5.01294 0.347277 7.63017L1.65223 8.36983ZM8 4.75C10.7505 4.75 13.13 6.22143 14.3478 8.36983L15.6527 7.63017C14.1693 5.01294 11.2919 3.25 8 3.25V4.75ZM14.3478 7.63017C13.13 9.77857 10.7505 11.25 8 11.25V12.75C11.2919 12.75 14.1693 10.9871 15.6527 8.36983L14.3478 7.63017ZM8 11.25C5.24946 11.25 2.86995 9.77857 1.65223 7.63017L0.347277 8.36983C1.83073 10.9871 4.70806 12.75 8 12.75V11.25Z"
      fill="#666666"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M7.99976 10.8877C9.47876 10.8877 10.6777 9.62695 10.6777 8.07129C10.6777 7.80078 10.6416 7.53906 10.5742 7.29199C10.3645 7.83203 9.86035 8.21191 9.27222 8.21191C8.49561 8.21191 7.86621 7.5498 7.86621 6.73242C7.86621 6.11328 8.22778 5.58398 8.74097 5.36328C8.50562 5.29199 8.25684 5.25391 7.99976 5.25391C6.52075 5.25391 5.32178 6.51465 5.32178 8.07129C5.32178 9.62695 6.52075 10.8877 7.99976 10.8877Z"
      fill="#666666"
    />
  </svg>
);

export const CloseX: React.SFC<IIconProps> = props => (
  <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M8.46954 7.00409L13.7595 1.71409C13.9234 1.52279 14.009 1.27671 13.9993 1.02504C13.9895 0.773362 13.8852 0.534623 13.7071 0.356528C13.529 0.178434 13.2903 0.0741014 13.0386 0.0643803C12.7869 0.0546591 12.5408 0.140265 12.3495 0.304092L7.05954 5.59409L1.76954 0.294092C1.58124 0.105788 1.32585 -3.72428e-09 1.05954 -1.74018e-09C0.793242 2.43924e-10 0.537847 0.105788 0.349544 0.294092C0.16124 0.482395 0.055452 0.73779 0.055452 1.00409C0.055452 1.27039 0.16124 1.52579 0.349544 1.71409L5.64954 7.00409L0.349544 12.2941C0.244862 12.3837 0.159841 12.4941 0.0998179 12.6181C0.0397946 12.7422 0.00606467 12.8773 0.000745174 13.015C-0.00457432 13.1528 0.0186315 13.2901 0.0689061 13.4184C0.119181 13.5467 0.195439 13.6633 0.292893 13.7607C0.390348 13.8582 0.506896 13.9345 0.635221 13.9847C0.763546 14.035 0.900878 14.0582 1.0386 14.0529C1.17632 14.0476 1.31145 14.0138 1.43551 13.9538C1.55958 13.8938 1.6699 13.8088 1.75954 13.7041L7.05954 8.41409L12.3495 13.7041C12.5408 13.8679 12.7869 13.9535 13.0386 13.9438C13.2903 13.9341 13.529 13.8297 13.7071 13.6517C13.8852 13.4736 13.9895 13.2348 13.9993 12.9831C14.009 12.7315 13.9234 12.4854 13.7595 12.2941L8.46954 7.00409Z"
      fill="currentColor"
    />
  </svg>
);

interface IIconProps {
  width?: number | string;
  height?: number | string;
}
