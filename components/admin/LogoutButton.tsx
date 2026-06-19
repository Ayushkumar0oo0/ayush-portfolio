import { signOut } from "@/auth";

export default function LogoutButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut({
          redirectTo: "/login",
        });
      }}
    >
      <button
        className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500"
      >
        Logout
      </button>
    </form>
  );
}