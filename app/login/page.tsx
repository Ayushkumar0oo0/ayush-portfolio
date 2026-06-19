import { signIn } from "@/auth";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <form
        action={async () => {
          "use server";

          await signIn("google", {
            redirectTo: "/admin",
          });
        }}
      >
        <button
          className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold"
        >
          Continue with Google
        </button>
      </form>
    </div>
  );
}