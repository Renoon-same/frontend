import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
const SignupForm = () => {
  return (
    <div>
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle>Sign Up</CardTitle>
          <CardDescription> First Time with Rename Soon? Your Journey Start Here!</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full gap-4">
              <div className="flex flex-col space-y-3">
                <Label htmlFor="email" className="text-left">
                  Email
                </Label>
                <Input id="email" placeholder="Enter your email" />

                <Label htmlFor="name" className="text-left">
                  Username
                </Label>
                <Input id="username" placeholder="Enter your username" />

                <Label htmlFor="password" className="text-left">
                  Password
                </Label>
                <Input id="password" placeholder="Enter your password" />

                <Label htmlFor="confirm-pw" className="text-left">
                  Confirm Your Password
                </Label>
                <Input id="confirm-pw" placeholder="Enter your password again" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button className="w-full bg-green-600 hover:bg-green-700">Sign Up</Button>

          <Button className="w-full" variant="outline">
            Sign Up with Google Account
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignupForm;
