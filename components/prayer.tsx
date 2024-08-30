"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
  prayer: z.string().min(10, {
    message: "Prayer request must be at least 10 characters.",
  }),
  Phone: z.string().min(10, {
    message: "Phone number must be at least 10 characters.",
  }),
})

const PrayerRequest = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      prayer: "",
      email: "",
      Phone: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 bg-gray-700 rounded-lg shadow-lg">
      <h1 className="text-3xl text-white mb-4">Prayer Requests</h1>
      <p className="text-md text-white mb-8">Prayer is a powerful tool. Submit your prayer request here.</p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Username</FormLabel>
                <FormControl>
                  <Input placeholder="John" {...field} />
                </FormControl>
                <FormDescription className="text-white">
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Email</FormLabel>
                <FormControl>
                  <Input placeholder="johndoe@gmail.com" {...field} />
                </FormControl>
                <FormDescription className="text-white">
                  Your email please
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="prayer"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Prayer Request</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormDescription className="text-white">
                  Your request here
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="Phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Phone</FormLabel>
                <FormControl>
                  <Input placeholder="+2519...." {...field} />
                </FormControl>
                <FormDescription className="text-white">
                  Your phone number here
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white">Send</Button>
        </form>
      </Form>
    </div>
  );
}

export default PrayerRequest;
