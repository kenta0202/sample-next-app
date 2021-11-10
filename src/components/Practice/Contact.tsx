import { ContactParams } from "types/ContactParams";
import { useFormState } from "hooks/contact/useFormState";
import { useSendContactForm } from "hooks/contact/useSendContactForm";

const Contact: React.VFC = () => {
  const [contact, handleChange] = useFormState<ContactParams>({
    name: "",
    email: "",
    message: "",
  });
  const [errorMessage, sendContactForm] = useSendContactForm();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendContactForm(contact);
  };

  return (
    <div className="p-2 my-2 mx-2 bg-red-200 rounded-lg">
      <h2>お問い合わせ</h2>
      {errorMessage && <p>{errorMessage}</p>}
      <form method="post" onSubmit={handleSubmit} className=" space-y-2">
        <div className="">
          <label>お名前</label>
          <div>
            <input
              type="text"
              placeholder="お名前"
              name="name"
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div>
          <label>メールアドレス</label>
          <div>
            <input
              type="email"
              placeholder="メールアドレス"
              name="email"
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div>
          <label>お問い合わせ内容</label>
          <div>
            <textarea
              placeholder="Your Message"
              name="message"
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <button type="submit">お問い合わせをする</button>
      </form>
    </div>
  );
};

export default Contact;
