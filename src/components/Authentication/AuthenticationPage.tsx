import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import bg from "../../assets/img/bg-login:singup.svg";
import SigninForm from "./SigninForm";
import SignupForm from "./SignupForm";
function Authentication() {
  return (
    <div className="flex h-screen items-center justify-around gap-x-5">
      <div className="bg-img-container w-full object-fill">
        <img src={bg} alt="log-in-img" />
      </div>
      <div className="form-container w-full">
        <Tabs defaultValue="sign-in" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="sign-in">Sign In</TabsTrigger>
            <TabsTrigger value="sign-up">Sign Up</TabsTrigger>
          </TabsList>
          <TabsContent value="sign-in">
            <SigninForm />
          </TabsContent>
          <TabsContent value="sign-up">
            <SignupForm />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
export default Authentication;
