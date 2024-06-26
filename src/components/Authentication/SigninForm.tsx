import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

const SigninForm = () => {
  return (
    <div>
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle>Sign In</CardTitle>
          <CardDescription> Trade and Sell your Stuff with DePauw Swipe</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name" className="text-left">
                  Username or Email
                </Label>
                <Input id="name" placeholder="Enter your username or email" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="framework" className="flex flex-col text-left">
                  Password
                </Label>
                <Input id="password" placeholder="Enter your password" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button className="w-full bg-green-600 hover:bg-green-700">Sign In</Button>

          <Button className="w-full" variant="outline">
            Sign In with Google Account
          </Button>

          <Link to="/forgot-password">
            <p className="w-full underline">Forgot Password? </p>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SigninForm;
