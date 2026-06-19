import {
  getMessages,
  deleteMessage,
  markMessageAsRead,
} from "@/actions/message.actions";

export default async function MessagesPage() {
  const messages = await getMessages();

  const unreadCount = messages.filter(
    (message: any) => !message.read
  ).length;

  return (
    <div className="space-y-8">

      {/* Header */}
      <div>
        <p className="text-blue-500 uppercase tracking-widest text-sm mb-2">
          Messages
        </p>

        <h1 className="text-4xl font-black">
          Inbox
        </h1>

        <p className="text-zinc-500 mt-2">
          Manage contact form submissions.
        </p>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
          <p className="text-zinc-500 text-sm">
            Total Messages
          </p>

          <h2 className="text-4xl font-black mt-2">
            {messages.length}
          </h2>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
          <p className="text-zinc-500 text-sm">
            Unread
          </p>

          <h2 className="text-4xl font-black mt-2 text-red-500">
            {unreadCount}
          </h2>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
          <p className="text-zinc-500 text-sm">
            Read
          </p>

          <h2 className="text-4xl font-black mt-2 text-green-500">
            {messages.length - unreadCount}
          </h2>
        </div>

      </div>

      {/* Messages */}
      <div className="space-y-6">

        {messages.length === 0 ? (
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 text-center">

            <h3 className="text-2xl font-bold mb-3">
              No Messages Yet
            </h3>

            <p className="text-zinc-500">
              Contact form submissions will appear here.
            </p>

          </div>
        ) : (
          messages.map((message: any) => (
            <div
              key={message._id}
              className={`border rounded-3xl p-8 ${
                message.read
                  ? "bg-zinc-900 border-zinc-800"
                  : "bg-blue-950/20 border-blue-500/30"
              }`}
            >

              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">

                <div>

                  <div className="flex items-center gap-3 mb-2">

                    <h2 className="text-xl font-bold">
                      {message.name}
                    </h2>

                    {!message.read && (
                      <span className="px-3 py-1 text-xs rounded-full bg-red-500">
                        New
                      </span>
                    )}

                  </div>

                  <p className="text-zinc-400">
                    {message.email}
                  </p>

                </div>

                <div className="text-zinc-500 text-sm">
                  {new Date(
                    message.createdAt
                  ).toLocaleDateString()}
                </div>

              </div>

              <div className="mb-6">

                <h3 className="font-semibold mb-3">
                  {message.subject}
                </h3>

                <p className="text-zinc-400 whitespace-pre-wrap leading-relaxed">
                  {message.message}
                </p>

              </div>

              <div className="flex gap-3">

                {!message.read && (
                  <form
                    action={async () => {
                      "use server";

                      await markMessageAsRead(
                        message._id
                      );
                    }}
                  >
                    <button
                      type="submit"
                      className="px-5 py-2 rounded-xl bg-green-600 hover:bg-green-500 transition"
                    >
                      Mark Read
                    </button>
                  </form>
                )}

                <form
                  action={async () => {
                    "use server";

                    await deleteMessage(
                      message._id
                    );
                  }}
                >
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-red-600 hover:bg-red-500 transition"
                  >
                    Delete
                  </button>
                </form>

              </div>

            </div>
          ))
        )}

      </div>

    </div>
  );
}