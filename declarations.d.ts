// SVG Module Declaration
declare module "*.svg" {
  import React from "react";
  import { SvgProps } from "react-native-svg";

  const content: React.FC<SvgProps>;
  export default content;
}

// Carousel Module Declaration
declare module "react-native-snap-carousel" {
  import { Component } from "react";
  import { FlatListProps, ViewStyle, StyleProp } from "react-native";

  interface CarouselProps<T> extends FlatListProps<T> {
    data: T[];
    renderItem: (item: { item: T; index: number }) => JSX.Element;
    sliderWidth: number;
    itemWidth: number;
    loop?: boolean;
    autoplay?: boolean;
    autoplayDelay?: number;
    autoplayInterval?: number;
    onSnapToItem?: (index: number) => void;
    inactiveSlideOpacity?: number;
    inactiveSlideScale?: number;
    containerCustomStyle?: StyleProp<ViewStyle>;
    contentContainerCustomStyle?: StyleProp<ViewStyle>;
  }

  export default class Carousel<T> extends Component<CarouselProps<T>> {}
}
