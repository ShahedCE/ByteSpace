import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | ByteSpace",
  description: "Login to your ByteSpace account",
};

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <div className="w-full max-w-md rounded-lg border border-gray-200 p-8 text-center shadow-sm">
        <h1 className="text-2xl font-bold text-gray-900">Login</h1>
        <p className="mt-2 text-sm text-gray-500">
          Login form will be implemented here.
        </p>
      </div>
    </main>
  );
}
