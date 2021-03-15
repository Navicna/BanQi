import * as React from 'react';
import Svg, {SvgProps, Path, Rect} from 'react-native-svg';

export function CarnesSvg(props: SvgProps) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M3 3.997C3 3.447 3.446 3 4 3h16c.554 0 1 .447 1 .997V21.3a7.792 7.792 0 01-.36-.241c-.24-.168-.49-.359-.76-.563l-.035-.026c-.276-.21-.571-.433-.86-.634a7.061 7.061 0 00-.9-.546C17.795 19.148 17.414 19 17 19c-.664 0-1.208.28-1.626.564-.305.209-.622.479-.9.716-.084.071-.164.14-.24.202-.716.597-1.356 1.018-2.234 1.018-.878 0-1.518-.42-2.235-1.018l-.239-.202c-.278-.237-.595-.508-.9-.716C8.208 19.28 7.664 19 7 19c-.414 0-.796.148-1.085.29-.306.15-.614.346-.9.545-.289.201-.584.424-.86.634l-.035.026c-.27.204-.52.395-.76.563A7.808 7.808 0 013 21.3V3.997zM7 7h10M7 11h10M7 15h10"
        stroke="#EC008C"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function ScannerSvg(props: SvgProps) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        stroke="#EC008C"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7.5 7v10M16.5 7v10M13.5 7v7M10.5 7v7"
      />
      <Path
        stroke="#EC008C"
        strokeWidth={2}
        strokeLinecap="round"
        d="M2 22v-6M8 22H2M2 2v6M8 2H2M22 2v6M16 2h6M22 22v-6M16 22h6"
      />
    </Svg>
  );
}

export function CardsSvg(props: SvgProps) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M17 2H5a1 1 0 00-1 1v16"
        stroke="#EC008C"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Rect
        x={20}
        y={6}
        width={16}
        height={12}
        rx={1}
        transform="rotate(90 20 6)"
        stroke="#EC008C"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.663 14A4.5 4.5 0 018 17.947v-7.894A4.5 4.5 0 0114.663 14zM11.207 15.293l4 4"
        stroke="#EC008C"
        strokeWidth={2}
      />
    </Svg>
  );
}

export function HomeSvg(props: SvgProps) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M3 10.89a1 1 0 01.331-.743l8-7.2a1 1 0 011.338 0l8 7.2a1 1 0 01.331.744V20a1 1 0 01-1 1H4a1 1 0 01-1-1v-9.11z"
        stroke="#000000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Rect
        x={9}
        y={13}
        width={6}
        height={8}
        rx={1}
        stroke="#000000"
        strokeWidth={2}
      />
    </Svg>
  );
}

export function MarketSvg(props: SvgProps) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M4.773 7.876A1 1 0 015.766 7h12.468a1 1 0 01.993.876l1.5 12A1 1 0 0119.734 21H4.266a1 1 0 01-.993-1.124l1.5-12z"
        stroke="#EC008C"
        strokeWidth={2}
      />
      <Path
        d="M17 7.486V7.48v.005zm-.02-.542c-.725.054-2.148.056-4.966.056-1.712 0-2.931 0-3.804-.012a29.252 29.252 0 01-1.164-.032C7.222 4.846 9.265 3 12.014 3c2.745 0 4.785 1.84 4.967 3.944zM7 7.652a.152.152 0 010 0z"
        stroke="#EC008C"
        strokeWidth={2}
      />
    </Svg>
  );
}
