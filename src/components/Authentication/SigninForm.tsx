import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import toast from "react-hot-toast";

const formSchema = z.object({
  username: z.string().min(3, { message: "Username must be at least 3 characters long" }),
  email: z.string().email({ message: "Email must be a valid email address" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
});

export type SigninFormData = z.infer<typeof formSchema>;

const SigninForm = () => {
  const [loading, setLoading] = useState(false);

  const form = useForm<SigninFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
    },
  });
  const onSubmit = async (values: SigninFormData) => {
    try {
      setLoading(true);
      console.log(values);
      toast.success("Signup successful!");
      form.reset();
    } catch (error) {
      toast.error("Something went wrong");
      console.error("Unexpected error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <Card className="w-[400px]">
            <CardHeader>
              <CardTitle>Sign In</CardTitle>
              <CardDescription> Trade and Sell your Stuff with DePauw Swipe</CardDescription>
            </CardHeader>
            <CardContent className="text-left">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email or username</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your email or username" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-left">Password</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your username" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
              <Button className="w-full bg-green-600 hover:bg-green-700" disabled={loading}>
                {loading ? "Signing In..." : "Sign In"}
              </Button>

              <Button className="w-full" variant="outline">
                Sign In with Google Account
              </Button>

              <Link to="/forgot-password">
                <p className="w-full underline">Forgot Password? </p>
              </Link>
            </CardFooter>
          </Card>
        </form>
      </Form>
    </div>
  );
};

export default SigninForm;
