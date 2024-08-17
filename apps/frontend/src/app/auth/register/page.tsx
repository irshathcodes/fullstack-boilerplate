"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { routeMap } from "@/lib/constants";
import { type FormEventHandler } from "react";
import { usePostMutation } from "@/hooks/use-post-mutation";
import { Loader } from "lucide-react";

export default function RegisterForm() {
  const registerMutation = usePostMutation("/auth/register/email");

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    const fd = new FormData(e.target as HTMLFormElement);
    const name = (fd.get("name") ?? null) as string | null;
    const email = fd.get("email") as string;
    const password = fd.get("password") as string;

    registerMutation.mutate({ body: { name, email, password } });
  };
  //localhost:3000
  http: return (
    <form
      onSubmit={handleSubmit}
      className="h-screen flex justify-center items-center"
    >
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-xl">Sign Up</CardTitle>
          <CardDescription>
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" placeholder="Jon" />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="jon@westeros.com"
                required
                name="email"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" name="password" required />
            </div>
            <Button type="submit" className="w-full gap-2">
              {registerMutation.isPending ? (
                <>
                  <Loader className="animate-spin w-4 h-4" />
                  Creating...
                </>
              ) : (
                "Create an account"
              )}
            </Button>
            {/* <Button variant="outline" className="w-full">
              Sign up with GitHub
            </Button> */}
          </div>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href={routeMap.login} className="underline">
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </form>
  );
}
