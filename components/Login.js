import React from 'react';
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import Image from "next/image";
import {signIn} from "next-auth/react";
import signInWithGoogle from "../pages/api/auth";


function Login(props) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Image src="/googleDocLogo.png"
                   height="300"
                   width="550"
                   objectFit="contain"
            />
            <Button color="blue"
                    buttonType="filled"
                    className="w-44 mt-10"
                    ripple="light"
                    onClick={signInWithGoogle}>
                Login
            </Button>
        </div>
    );
}

export default Login;