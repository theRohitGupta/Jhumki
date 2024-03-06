export interface ProductDetailsType {
  rating?: number;
  title?: string;
  tags?: string[];
  description?: string;
  btn?: React.ReactNode;
  discountedPrice?: number;
  MRP?: number;
  discountPercentage?: number;
}

export interface Images {
  src: string[];
  data?: ProductDetailsType
}

export interface SwiperSlideCustomProps {
  images: Images[];
  width: number;
  height: number;
  alt: string;
  wishlist?: boolean;
}

export interface SwiperComponentProps {
  swiperSlideData: SwiperSlideCustomProps;
  navigation?: boolean;
  autoplay?: boolean;
  loop?: boolean;
  slidesPerView?: number;
  spaceBetween?: number;
  freeMode?: boolean;
  modules?: string[];
  scrollbar?: boolean;
  mousewheel?: boolean;
  keyboard? : boolean;
  cssMode? : boolean
}

export interface MyImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface TitleBarProps {
  title?: string;
  subTitle?: string;
  extraInfo?: React.ReactNode;
  btn?: React.ReactNode;
}

export interface SaleEndsInProps {
  endDate: string;
  outputFormat?: 'text';
}

export interface CountdownBoxProps {
  label: string;
  value: number;
}

export interface CustomButtonProps {
  onClick?: () => void;
  text: string;
}