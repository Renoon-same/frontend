import { useForm } from "react-hook-form";
import { useState } from "react";
import * as z from "zod";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";

const formSchema = z.object({
  firstName: z.string().min(2, { message: "First name must be at least 2 characters long" }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters long" }),
  username: z.string().min(3, { message: "Username must be at least 3 characters long" }),
  email: z.string().email({ message: "Email must be a valid email address" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
  phone: z.string().regex(/^\d{10}$/, { message: "Phone number must be a 10-digit number" }),
});

export type SignupFormData = z.infer<typeof formSchema>;

const SignupForm = () => {
  const [loading, setLoading] = useState(false);

  const form = useForm<SignupFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      phone: "",
    },
  });

  const onSubmit = async (values: SignupFormData) => {
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
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card className="mx-auto max-w-4xl p-5">
          <CardHeader className="text-center">
            <CardTitle>Sign Up</CardTitle>
            <CardDescription>Fill out the form below to create a new account.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 text-left">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name*</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name*</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username*</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email*</FormLabel>
                  <FormControl>
                    <Input {...field} />
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
                  <FormLabel>Password*</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone*</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <div className="flex w-full flex-col">
              <Button
                type="submit"
                className="flex w-full bg-green-500 text-white hover:bg-green-600"
                disabled={loading}
              >
                {loading ? "Signing Up..." : "Sign Up"}
              </Button>
            </div>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
};

export default SignupForm;
