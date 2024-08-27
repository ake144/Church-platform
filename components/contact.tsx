"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
// import emailjs from '@emailjs/browser'
import { useRef } from 'react'
import { useForm } from "react-hook-form"
import { useToast } from "@/components/ui/use-toast"
import { ReloadIcon } from "@radix-ui/react-icons"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
// import * as Sentry from '@sentry/nextjs';

const ContactUsForm = z.object({
    firstName: z.string().min(3, {
        message: "First name is required"
    }),
    lastName: z.string().min(3, {
        message: "Last name is required"
    }),
    message: z.string().min(3, {
        message: "Message is required"
    }),
    email: z.string().email().min(5, {
        message: "Valid email is required"
    })
})

type ContactUsFormInput = z.infer<typeof ContactUsForm>

export default function ContactUs() {
    const { register, handleSubmit, watch, formState: { errors, isSubmitting }, reset, } = useForm<ContactUsFormInput>({
        resolver: zodResolver(ContactUsForm),
        defaultValues: {
            firstName: "",
            lastName: "",
            message: "",
            email: ""
        }
    });
    const form = useRef();
    const { toast } = useToast()

    const onSubmit = async (data: z.infer<typeof ContactUsForm>) => {
        // const transaction = Sentry.startTransaction({
        //     name: "Contact Us From Submission",
        // });

        // Sentry.configureScope((scope) => {
        //     scope.setSpan(transaction);
        // });

        // emailjs.sendForm('service_p9gb36g', 'template_uqbopbj', form.current as any, 'fbXgpdLqo_SRGMh72')
        //     .then((result) => {
        //         toast({
        //             title: "Message Sent.",
        //             description: "Thank you for contacting us. We will get back to you shortly.",
        //         })
        //         reset()
        //     }, (error) => {

        //         toast({
        //             title: "Message Failed.",
        //             description: error.text,
        //         })
        //         throw new Error(error.text);
        //     });

        // try {
        //     const response = await fetch(`/api/store-email`, {
        //         method: "POST",
        //         body: JSON.stringify({
        //             firstName: data?.firstName,
        //             lastName: data?.lastName,
        //             email: data?.email,
        //             message: data?.message,
        //             source: "Contact Us"
        //         })
        //     })

        //     const result = await response.json()

        //     return result
        // } catch (error) {
        //     throw new Error("Storing Emails in db Frontend Error", error as any);
        // } finally {
        //     transaction.finish();
        // }

        console.log(data)
    }
    return (
        <div className="flex  bg-gray-500 items-center justify-center p-2">
            <div className="grid grid-cols-1 md:grid-cols-2 ">

                <div>
                <Card className="mt-[150px] mb-9">
                <CardContent>
                    <div className="space-y-8 pt-7">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-semibold">
                                Contact Us
                            </h2>
                            <p className="text-zinc-500 dark:text-zinc-400">
                                Fill out the form below and we&apos;ll get back to you as soon as possible.
                            </p>
                        </div>
                        <form ref={form as any} onSubmit={handleSubmit(onSubmit)}>
                            <div className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label>
                                            First name
                                        </Label>
                                        <Input {...register("firstName", { required: true })} placeholder="Enter your first name" />
                                        {errors?.firstName?.message && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
                                    </div>
                                    <div className="space-y-2">
                                        <Label>
                                            Last name
                                        </Label>
                                        <Input {...register("lastName", { required: true })} placeholder="Enter your last name" />
                                        {errors?.lastName?.message && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label>
                                        Email
                                    </Label>
                                    <Input {...register("email", { required: true })} placeholder="Enter your email" type="email" />
                                    {errors?.email?.message && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                                </div>
                                <div className="space-y-2">
                                    <Label>
                                        Message
                                    </Label>
                                    <Textarea className="min-h-[100px]" {...register("message", { required: true })} placeholder="Enter your message" />
                                    {errors?.message?.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
                                </div>
                                <Button disabled={isSubmitting} type="submit">
                                    {isSubmitting && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}
                                    Send message
                                </Button>
                            </div>
                        </form>
                    </div>
                </CardContent>
            </Card>

                </div>
                <div className="mt-[150px] mb-9 mx-9" >
                    <Card>


                    <CardContent>
                        <div className="space-y-8 pt-7">
                            <h2 className="text-4xl "> 
                                Contact Info 
                            </h2>
                         </div>
                      

                      <div className="flex flex-col gap-6">
                            <div className="flex flex-col gap-2">
                                <h3 className="text-xl font-semibold">Our Email</h3>
                                <p className="text-lg">
                                ace@acieth.org
                                </p>
                             </div>
                            <div className="flex flex-col gap-2">
                                <h3 className="text-xl font-semibold">Our Phone</h3>
                                <p className="text-lg">
                                +251-114660086
                                </p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h3 className="text-xl font-semibold">Our Address</h3>
                              <p className="text-md">
                                Mauritius Street ,Gofa
                                Near Gaky Engineering
                              </p>
                                <p className="text-lg">
                                Addis Ababa, Ethiopia
                                </p>
                            </div>
                      </div>
                         </CardContent>
                        </Card>
                  

                </div>
            </div>
            
        </div>
    )
}