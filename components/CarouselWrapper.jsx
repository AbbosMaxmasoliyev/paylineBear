import React, { useState, useRef } from "react";
import { Text, View, Dimensions, Image } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";

export const SLIDER_WIDTH = Dimensions.get("window").width + 50;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);

const data = [
    {
        id: 1,
        name: "Bear Partner",
        url: require("../assets/images/nature.jpeg"),
    },
    {
        id: 2,
        name: "Bear Partner",
        url: require("../assets/images/nature.jpeg"),
    },
    {
        id: 3,
        name: "Bear Partner",
        url: require("../assets/images/nature.jpeg"),
    },
];

const renderItem = ({ item }) => {
    return (
        <View style={{ position: "relative" }}>
            <Image
                source={item.url}
                style={{
                    width: "100%",
                    height: 150,
                    borderRadius: 10,

                }}
            />
            <Text
                style={{
                    marginVertical: 10,
                    paddingHorizontal: 10,
                    fontSize: 20,
                    fontWeight: "bold",
                    position: "absolute",
                    color: "#fff",
                    top: 25,
                }}
            >
                {item.name}
            </Text>
        </View>
    );
};

const CarouselWrapper = () => {
    const [index, setIndex] = useState(0);
    const isCarousel = useRef(null);
    return (
        <View
            style={{
                alignItems: "center",
                height: 230,
                paddingTop: 50,
                paddingBottom: 0,
            }}
        >
            <Carousel
                ref={isCarousel}
                data={data}
                renderItem={renderItem}
                sliderWidth={SLIDER_WIDTH + 15}
                itemWidth={ITEM_WIDTH + 15}
                onSnapToItem={(index) => setIndex(index)}
                autoplay={true}
                loop={true}
                autoplayDelay={10}
            />
            <Pagination
                dotsLength={data.length}
                activeDotIndex={index}
                carouselRef={isCarousel}
                dotContainerStyle={{
                    margin: 0,
                    padding: 0,
                    width: 5,
                    height: 5,
                }}
                containerStyle={{
                    paddingBottom: 10,
                    backgroundColor: "transparent",
                    justifyContent: "center",
                    // height:30
                    position: "absolute",
                    bottom: 0,
                    gap: -5
                }}
                dotStyle={{
                    width: 7,
                    height: 7,
                    borderRadius: 5,
                    marginHorizontal: 8,
                    backgroundColor: "#FF6B01",
                    margin: 0,
                }}
                tappableDots={true}
                inactiveDotStyle={{
                    backgroundColor: "#fff",
                    // Define styles for inactive dots here
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
            />
        </View>
    );
};

export default CarouselWrapper;
