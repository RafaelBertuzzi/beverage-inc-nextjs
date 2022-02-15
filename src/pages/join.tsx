import {useState} from "react";

import {PageLayout} from "../components/PageLayout";
import {InputContainer, InputControl, InputError, InputLabel} from "../components/Input";
import {Button} from "../components/Button";
import {emailValidation} from "../validations";

export default function Join() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    function submit() {
        if (!emailValidation(email)) {
            setError(true)
        } else {
            setShowSuccessMessage(true)
        }
    }

    return (
        <>
            <PageLayout title={"Join Us"}>
                <div className={"ml-20"}>
                    {!showSuccessMessage ? (
                        <>
                            <div className={"mb-2"}>
                                <span className={"text-3xl"}>
                                    Sign up to join our event to experience the new <br/>
                                </span>
                            </div>
                            <div className={"mb-10"}>
                                <span className={"text-4xl font-bold uppercase"}>Corona Extra</span>
                            </div>
                            <div className={"w-3/4"}>
                                <InputContainer>
                                    <InputLabel title={"Enter your email address below:"} />
                                    <InputControl
                                        type={"email"}
                                        onChange={setEmail}
                                    />
                                    {error && <InputError title={"Enter the email correctly"}/>}
                                </InputContainer>
                                <div className={"mt-5 flex justify-end"}>
                                    <Button text={"I want to join"} onClick={submit} />
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className={"mb-10"}>
                                <span className={"text-5xl"}>
                                    We are happy with your registration!
                                </span>
                            </div>
                            <div>
                                <span className={"text-xl"}>
                                    Check your email to learn more about the event and next steps.
                                </span>
                            </div>
                        </>
                    )}
                </div>
            </PageLayout>
        </>
    )
}
