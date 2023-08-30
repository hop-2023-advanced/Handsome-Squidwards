import { ClerkProvider, SignedIn, SignedOut, useAuth } from "@clerk/clerk-expo";
import { PaperProvider } from "react-native-paper";
import { useState } from "react";
import SignInScreen from "./screen/SignInScreen";
import SignUpScreen from "./screen/SignUpScreen";
import Homescreen from "./screen/HomeScreen";

export default function App() {
  CLERK_PUBLISHABLE_KEY =
    "pk_test_cmFwaWQtb3JjYS0zNi5jbGVyay5hY2NvdW50cy5kZXYk";
  const [signed, setSigned] = useState(true);
  return (
    <PaperProvider>
      <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY}>
        <SignedIn>
          <Homescreen />
        </SignedIn>
        <SignedOut>
          {/* {signed ? (
            <SignInScreen pressed={() => setSigned(false)} />
          ) : (
            <SignUpScreen pressed={() => setSigned(true)} />
          )} */}
          <Homescreen />
        </SignedOut>
      </ClerkProvider>
    </PaperProvider>
  );
}
