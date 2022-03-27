import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as React from "react";
import { RecoilRoot, useRecoilState } from "recoil";
import Actual from "./Actual";

export default function App() {
  return (
    <SafeAreaView>
      <RecoilRoot>
        <StatusBar />
        <Actual />
      </RecoilRoot>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
