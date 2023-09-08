import React from "react";
import { Dimensions, Image } from "react-native";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';


const { width, height } = Dimensions.get("screen")

const CustomKeyboard = ({ onKeyPress, deleteLet, dot, style }) => {


  const deleteItem = () => {
    deleteLet()
  }

  return (
    <View style={{ ...styles.container, ...style }}>
      <View style={styles.row}>
        <View style={styles.contain}>
          <TouchableOpacity
            style={styles.key}
            onPress={() => onKeyPress("1")}
          >
            <Text style={styles.keyText}>1</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.contain}>
          <TouchableOpacity
            style={styles.key}
            onPress={() => onKeyPress("2")}
          >
            <Text style={styles.keyText}>2</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.contain}>
          <TouchableOpacity
            style={styles.key}
            onPress={() => onKeyPress("3")}
          >
            <Text style={styles.keyText}>3</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.contain}>
          <TouchableOpacity
            style={styles.key}
            onPress={() => onKeyPress("4")}
          >
            <Text style={styles.keyText}>4</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.contain}>
          <TouchableOpacity
            style={styles.key}
            onPress={() => onKeyPress("5")}
          >
            <Text style={styles.keyText}>5</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.contain}>
          <TouchableOpacity
            style={styles.key}
            onPress={() => onKeyPress("6")}
          >
            <Text style={styles.keyText}>6</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.contain}>
          <TouchableOpacity
            style={styles.key}
            onPress={() => onKeyPress("7")}
          >
            <Text style={styles.keyText}>7</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.contain}>
          <TouchableOpacity
            style={styles.key}
            onPress={() => onKeyPress("8")}
          >
            <Text style={styles.keyText}>8</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.contain}>
          <TouchableOpacity
            style={styles.key}
            onPress={() => onKeyPress("9")}
          >
            <Text style={styles.keyText}>9</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.contain}>
          <TouchableOpacity
            style={styles.key}
            onPress={() => dot ? onKeyPress(".") : null}
          >
            <Text style={styles.keyText}>.</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.contain}>
          <TouchableOpacity
            style={styles.key}
            onPress={() => onKeyPress("0")}
          >
            <Text style={styles.keyText}>0</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.contain}>
          <TouchableOpacity
            style={styles.key}
            onPress={deleteItem}
          >
            <Ionicons name="backspace-outline" size={width / 12} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  contain: {
    flex: 1
  },
  container: {
    height: "100%",
    width: "100%",
    paddingHorizontal: 20,
    // paddingVertical: 10,
    backgroundColor: "transparent",
    borderRadius: 10,

    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    flexShrink: 4
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 15,
    marginBottom: 5,
    flexGrow: 3,
    flex: 1,
  },
  key: {
    width: "auto",
    flex: 1,
    height: 40,
    backgroundColor: "transparent",
    borderRadius: 5,
    marginHorizontal: 5,
    alignItems: "center",
    justifyContent: "center",

  },
  keyText: {
    fontSize: width / 10,
    fontFamily: "Montserrat",
    color: "#fff"
  },
});

export default CustomKeyboard;
