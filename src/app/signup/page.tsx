import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up | ByteSpace",
  description: "Create a new ByteSpace account",
};

export default function SignupPage() {
  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <div className="w-full max-w-md rounded-lg border border-gray-200 p-8 text-center shadow-sm">
        <h1 className="text-2xl font-bold text-gray-900">Sign Up</h1>
        <p className="mt-2 text-sm text-gray-500">
          Sign up form will be implemented here.
        </p>
      </div>
    </main>
  );
}
