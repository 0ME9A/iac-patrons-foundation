import { useActionState } from "react";
import Btn from "~/components/Btn";
import { countryCode } from "~/data/countryCode";

interface FormDataInt {
  fullName: string;
  email: string;
  phoneNumber?: string;
  subject: string;
  message: string;
}

const sendNewMessage = async (data: FormDataInt) => {
  console.log("Sending message:", data);
  // Api logic here
};

export default function Form() {
  async function sendMessage(_prevState: any, formData: FormData) {
    "use server";

    try {
      const fullName = formData.get("fullName") as string;
      const email = formData.get("email") as string;
      const countryCode = formData.get("countryCode") as string;
      const phoneRaw = formData.get("phoneNumber") as string;
      const subject = formData.get("subject") as string;
      const message = formData.get("message") as string;

      if (!fullName || !email || !subject || !message) {
        return "Please fill all required fields.";
      }

      // ✅ Combine phone number with country code
      const phoneNumber = phoneRaw ? `+${countryCode}${phoneRaw}` : undefined;

      await sendNewMessage({ fullName, email, phoneNumber, subject, message });
      return "Message sent successfully!";
    } catch (err: any) {
      return `Error: ${err.message || err.toString()}`;
    }
  }

  const [message, sendMessageAction] = useActionState(sendMessage, null);

  return (
    <div className="bg-white dark:bg-green-900/40 rounded-3xl shadow-lg space-y-6 p-8 sm:p-10">
      <h3 className="text-xl font-semibold text-green-900 dark:text-white mb-4">
        Send us a message
      </h3>

      <form
        action={sendMessageAction}
        id="send-message"
        className="space-y-4 text-black"
      >
        <div>
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-charcoal dark:text-misty-white"
          >
            Your name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            minLength={3}
            maxLength={32}
            title="Only letters and single spaces between words are allowed"
            pattern="^[A-Za-z]+(?: [A-Za-z]+)*$"
            className="w-full px-4 py-2 mt-1 rounded-md border border-green-900/20 focus:ring-2 focus:ring-fresh-leaf focus:outline-none dark:bg-charcoal-20 dark:text-white"
            required
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-charcoal dark:text-misty-white"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 mt-1 rounded-md border border-green-900/20 focus:ring-2 focus:ring-fresh-leaf focus:outline-none dark:bg-charcoal-20 dark:text-white"
            required
          />
        </div>

        <div>
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium text-charcoal dark:text-misty-white"
          >
            Phone number
          </label>
          <div className="flex mt-1 gap-2">
            <select
              name="countryCode"
              defaultValue={countryCode.find((item) => item.iso === "IN")?.code}
              className="border border-green-900/20 rounded-lg px-2 py-2 text-sm dark:bg-charcoal-20 dark:text-white"
            >
              {countryCode.map((item) => (
                <option key={item.code} value={item.code}>
                  +{item.code} {item.iso}
                </option>
              ))}
            </select>
            <input
              type="number"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Your number"
              minLength={10}
              maxLength={10}
              title="Add phone number (digits only)"
              className="w-full px-4 py-2 rounded-md border border-green-900/20 focus:ring-2 focus:ring-fresh-leaf focus:outline-none dark:bg-charcoal-20 dark:text-white"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-charcoal dark:text-misty-white"
          >
            Subject <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            minLength={10}
            maxLength={200}
            className="w-full px-4 py-2 mt-1 rounded-md border border-green-900/20 focus:ring-2 focus:ring-fresh-leaf focus:outline-none dark:bg-charcoal-20 dark:text-white"
            required
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-charcoal dark:text-misty-white"
          >
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            maxLength={2000}
            className="w-full px-4 py-2 mt-1 rounded-md border border-green-900/20 focus:ring-2 focus:ring-fresh-leaf focus:outline-none dark:bg-charcoal-20 dark:text-white"
            required
          />
        </div>

        <Btn type="submit" title="Send message">
          Send Message
        </Btn>

        {message && (
          <p className="text-sm text-green-700 dark:text-green-300">
            "Thank you for reaching out! Our team will get back to you within
            24–48 hours."
            {/* {message} */}
          </p>
        )}
      </form>
    </div>
  );
}
