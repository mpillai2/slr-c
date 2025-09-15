import { Stack } from "expo-router";

export default function RootLayout() {
  return (
  <Stack>
    <Stack.Screen
      name="index"
      options={{ headerShown: false }}
    />
    {/* <Stack.Screen name="catch" options={{ headerShown: false, title: "SLR-C1" }} />     */}
    <Stack.Screen name="about" options={{ headerShown: false, title: "About" }} />
    <Stack.Screen name="checkout" options={{ headerShown: false, title: "Checkout" }} />

  </Stack>
  );
}
