import React from "react";
import Btn from "~/components/Btn";

export default function Form() {
  return (
    <div className="bg-white dark:bg-green-900/40 rounded-3xl shadow-lg space-y-6 p-8 sm:p-10">
      <h3 className="text-xl font-semibold text-green-900 dark:text-white mb-4">
        Send us a message
      </h3>
      <form className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-charcoal dark:text-misty-white"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 mt-1 rounded-md border border-green-900/20 focus:ring-2 focus:ring-fresh-leaf focus:outline-none dark:bg-charcoal-20 dark:text-white"
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-charcoal dark:text-misty-white"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 mt-1 rounded-md border border-green-900/20 focus:ring-2 focus:ring-fresh-leaf focus:outline-none dark:bg-charcoal-20 dark:text-white"
            required
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-charcoal dark:text-misty-white"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            className="w-full px-4 py-2 mt-1 rounded-md border border-green-900/20 focus:ring-2 focus:ring-fresh-leaf focus:outline-none dark:bg-charcoal-20 dark:text-white"
            required
          />
        </div>
        <Btn type="submit" title="Send message">
          Send Message
        </Btn>
      </form>
    </div>
  );
}
