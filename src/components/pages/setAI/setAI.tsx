/* eslint-disable */
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Input } from "@/components/ui/input"

export default function SetAI({
    setAPIKey
}: {
    setAPIKey: Function
}) {
    
    async function hashPassword(password: string, salt = "someSecretSalt123!") {
        const encoder = new TextEncoder();
        const data = encoder.encode(password + salt);
        const hashBuffer = await crypto.subtle.digest("SHA-256", data);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
        return hashHex;
    }

    // Other form schema
    async function verifyPassword(rawPassword: string) {
        let storedPassword = localStorage.getItem("apiKey");
        if (!storedPassword) {
            localStorage.setItem("apiKey", await hashPassword(rawPassword))
            toast.success("Successfully inputted your hashed API key!")
        }
        const hashedPassword = await hashPassword(rawPassword);
        return hashedPassword === storedPassword;
    }

    const APIKeyFormSchema = z.object({
        apiKey: z.string().min(1, { message: "API Key is required" }),
    })

    const APIKeyForm = useForm<z.infer<typeof APIKeyFormSchema>>({
        defaultValues: {
            apiKey: "",
        },
    })

    async function onSubmitAPIKey(values: z.infer<typeof APIKeyFormSchema>) {
        const isValid = await verifyPassword(values.apiKey);
        if (!isValid) {
            toast.error("API Key is invalid.")
        } else {
            setAPIKey(values.apiKey);
        }
    }



    return <Form {...APIKeyForm}>
        <form onSubmit={APIKeyForm.handleSubmit(onSubmitAPIKey)} className="space-y-6 max-w-sm mx-auto">
            <FormField
                control={APIKeyForm.control}
                name="apiKey"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Enter API Key or Referral Code</FormLabel>
                        <FormControl>
                            <Input type="password" placeholder="Your API Key or referral code" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />

            <Button type="submit" className="w-full">
                Verify & Continue
            </Button>
        </form>
    </Form>
}