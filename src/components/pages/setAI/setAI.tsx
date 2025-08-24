/* eslint-disable */
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { encrypt } from "@/lib/ED";

export default function SetAI({ setAPIKey }: { setAPIKey: Function }) {
  const APIKeyFormSchema = z.object({
    apiKey: z.string().min(1, { message: "API Key is required" }),
  });

  const APIKeyForm = useForm<z.infer<typeof APIKeyFormSchema>>({
    defaultValues: { apiKey: "" },
  });

  async function onSubmitAPIKey(values: z.infer<typeof APIKeyFormSchema>) {
    if (typeof values.apiKey !== "string") {
      toast.error("Invalid API Key format.");
      return;
    }

    try {
      setAPIKey(values.apiKey);
      toast.success("API Key saved securely!");
    } catch (err) {
      console.error(err);
      toast.error("Failed to encrypt API Key.");
    }
  }

  return (
    <Form {...APIKeyForm}>
      <form
        onSubmit={APIKeyForm.handleSubmit(onSubmitAPIKey)}
        className="space-y-6 max-w-sm mx-auto"
      >
        <FormField
          control={APIKeyForm.control}
          name="apiKey"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Enter API Key or Referral Code</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Your API Key or referral code"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">
          Save Securely
        </Button>
      </form>
    </Form>
  );
}
