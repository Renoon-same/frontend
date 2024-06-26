import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const ForgotPasswordForm = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Reset Account Password</CardTitle>
          <CardDescription>
            Enter your email or username and we'll send you a link to get back into your account.{" "}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Input id="name" placeholder="Type your username or email" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button className="bg-green-600 hover:bg-green-700">Reset Password</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ForgotPasswordForm;
