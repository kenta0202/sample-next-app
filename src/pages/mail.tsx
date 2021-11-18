/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useMail } from "hooks/useMail";

export default function Mail() {
  const { setName, setMessage, send } = useMail();
  return (
    <div className="flex flex-col gap-4 mt-5 ">
      <input
        className="w-2/5"
        type="text"
        onChange={(e) => setName(e.target.value)}
      />
      <textarea onChange={(e) => setMessage(e.target.value)} />

      <button type="button" onClick={send}>
        Send
      </button>
    </div>
  );
}
