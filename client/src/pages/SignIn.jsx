import { SignIn } from "@clerk/clerk-react";

export default function SignInPage() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <SignIn routing="path" path="/sign-in" />
    </div>
  );
}
