import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { useState } from "react";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";

const formSchema = z.object({
  email: z.string().email({ message: "Email must be a valid email address" }),
});
export type ForgotPassData = z.infer<typeof formSchema>;

const ForgotPasswordForm = () => {
  const form = useForm<ForgotPassData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });
  const [loading, setLoading] = useState(false);
  const onSubmit = async (values: ForgotPassData) => {
    try {
      setLoading(true);
      console.log(values);
      toast.success("Password reset link sent to your email!");
      form.reset();
    } catch (error) {
      toast.error("Something went wrong");
      console.error("Unexpected error:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex h-screen items-center justify-center">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <Card className="w-[350px]">
            <CardHeader>
              <CardTitle>Reset Account Password</CardTitle>
              <CardDescription>
                Enter your email or username and we'll send you a link to get back into your account.{" "}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm your email</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button type="submit" className="flex bg-green-500 text-white hover:bg-green-600" disabled={loading}>
                {loading ? "Reseting Password" : "Reset Password"}
              </Button>
            </CardFooter>
          </Card>
        </form>
      </Form>
    </div>
  );
};

export default ForgotPasswordForm;
