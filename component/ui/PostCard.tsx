import { View, Text, StyleSheet, Pressable, Image, Dimensions } from "react-native";
import React from "react";
import { FontAwesome, FontAwesome5, FontAwesome6, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
// import imagepic from ""

type CardProps = {
  data: {
    user: {
      username: string;
      userAt: string;
    };
    content: {
      createdAt: string;
      image: string[];
      text: string;
    };
    like: string;
    comment: string;
    retweet: string;
    share: string;
  };
};

const PostCard = ({ data }: CardProps) => {
  const screenwidth = Dimensions.get("window")?.width;
  const image = data.content.image;
  const imageCount = image.length;
  const displayedImages = image.slice(0, 5);

  const getimageStyle = (index: number) => {
    if (imageCount === 1) return { width: "100%", height: 300 };
    if (imageCount === 2) return { width: "40%", height: 300 };
    if (imageCount === 3) {
      return index === 0 ? { width: "66.5%", height: 200 } : { width: "34%", height: 100 };
    }
    if (imageCount === 4) return { width: "40%", height: 160 };
    if (imageCount >= 5) return { width: "32.3%", height: 150 };

    return {};
  };

  return (
    <View style={style.container}>
      {/* title  */}
      <View style={[style.flexcontainer, style.header]}>
        <View style={[style.flexcontainer, { gap: 5 }]}>
          <Image style={{ backgroundColor: "#0008", borderRadius: 100 }} height={50} width={50} />
          <View>
            <Text style={{ fontSize: 15, fontWeight: 700 }}>{data.user.username}</Text>
            <View style={[style.flexcontainer, { justifyContent: "space-between" }]}>
              <Text style={{ fontSize: 12 }}>{data.user.userAt} </Text>
              <Text>&rarr;</Text>
              <Text style={{ fontSize: 12 }}>{data.content.createdAt} </Text>
            </View>
          </View>
        </View>

        <Pressable style={[style.flexcontainer, style.folowBtn]}>
          <Text>Folow</Text>
          <MaterialCommunityIcons name="plus" />
        </Pressable>
      </View>

      {/* main post */}
      <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 2 }}>
        {displayedImages.map((uri, index) => {
          const islast = index === 4 && imageCount > 5;
          return (
            <View key={index} style={[{ flex: 0, flexGrow: 1 }, getimageStyle(index) as { width: any }]}>
              <Image source={{ uri }} style={style.image} />
              {islast && (
                <View style={style.overlay}>
                  <Text style={style.overlaytext}>+{imageCount - 5}</Text>
                </View>
              )}
            </View>
          );
        })}
      </View>
      <View>{data.content.text && <Text style={{ padding: 8 }}>{data.content.text}</Text>}</View>

      {/* action buttons (icons) {likes, comment, retweet} */}
      <View style={[style.iconContainer, style.flexcontainer]}>
        <View style={style.flexcontainer}>
          <MaterialCommunityIcons name="heart-outline" size={25} />
          <Text>{data.like}</Text>
        </View>
        <View style={[style.flexcontainer, { gap: 10 }]}>
          <View style={style.flexcontainer}>
            <MaterialCommunityIcons name="comment-outline" size={25} />
            <Text>{data.comment}</Text>
          </View>
          <View style={style.flexcontainer}>
            <FontAwesome6 name="retweet" size={25} />
            <Text>{data.retweet}</Text>
          </View>
          <View style={style.flexcontainer}>
            <MaterialCommunityIcons name="share" size={25} />
            <Text>{data.share}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  flexcontainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "rgb(239, 236, 231)",
    marginBottom: 8,
    justifyContent: "center",
  },

  header: {
    padding: 10,
    justifyContent: "space-between",
  },
  iconContainer: {
    flex: 1,
    justifyContent: "space-between",
    padding: 15,
  },
  folowBtn: {
    backgroundColor: "rgb(255, 130, 20)",
    padding: 10,
    borderRadius: 5,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    backgroundColor: "#0001",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  overlaytext: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default PostCard;
