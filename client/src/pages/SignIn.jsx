import { SignIn } from "@clerk/clerk-react";

export default function SignInPage() {
  return <SignIn routing="path" path="/sign-in" />;
}