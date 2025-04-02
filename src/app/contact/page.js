"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import { useContext, useState } from "react";
import MyContext from "../context-provider";
import ReCAPTCHA from "react-google-recaptcha";


export default function Contact() {
    const { language, text } = useContext(MyContext);
    const [confirmation, setConfirmation] = useState("");
    const [textColor, setTextColor] = useState("red");
    const [recaptchaValue, setRecaptchaValue] = useState(null);

    const initialValues = {
        fname: "",
        lname: "",
        phone: "",
        email: "",
        company: "",
        interest: "",
        freeText: "",
    };

    const validationSchema = Yup.object({
        fname: Yup.string().required(
            `${text[language].contactFirstName} ${text[language].contactIsRequired}`
        ),
        lname: Yup.string().required(
            `${text[language].contactLastName} ${text[language].contactIsRequired}`
        ),
        phone: Yup.string()
            .required(
                `${text[language].contactPhone} ${text[language].contactIsRequired}`
            )
            .matches(/^[0-9]+$/, `${text[language].contactNumeric}`),
        email: Yup.string()
            .email(`${text[language].contactEmailError}`)
            .required(`${text[language].contactEmailRequired}`),
        company: Yup.string(),
        interest: Yup.string(),
        freeText: Yup.string(),
    });

    
    const handleSubmit = async (values, { resetForm }) => {
        if (!recaptchaValue) {
            setConfirmation(`${text[language].contactRecaptchaError}`);
            setTextColor("red");
            return;
        }

        const serviceID = process.env.SERVICE_ID;
        const templateID = process.env.TEMPLATE_ID;
        const publicKey = process.env.EMAILJS_PUBLIC_KEY;

        

        const templateParams = {
            ...values,
        };

        emailjs.send(serviceID, templateID, templateParams, publicKey).then(
            () => {
                console.log("success");
                setTextColor("green");
                setConfirmation(`${text[language].contactEmailSentSuccess}`);

                resetForm();
            },
            (error) => {
                console.error("Error sending email:", error);
                setConfirmation(`${text[language].contactEmailSentError}`);
                setTextColor("red");
            }
        );
    };

    return (
        <div className="serviceIntro text-white flex flex-1 flex-col justify-center px-6 pb-12 lg:px-8">
            <div className="mx-auto w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl text-center">
                <h1>{text[language].contactHeader}</h1>
            </div>
            <div
                className="mx-auto w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl text-center"
                style={{ color: textColor }}
            >
                {!confirmation ? "" : confirmation}
            </div>
            <div className="mx-auto w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl text-belazurblue">
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    <Form className="flex flex-col">
                        <label htmlFor="fname" className="pb-2">
                            {text[language].contactFirstName}: *
                        </label>
                        <Field
                            type="text"
                            id="fname"
                            name="fname"
                            className="border-none rounded-md shadow-md contactfield"
                        />
                        <ErrorMessage
                            name="fname"
                            component="div"
                            className="text-red-800 bold text-sm"
                        />

                        <label htmlFor="lname" className="pt-4 pb-2">
                            {text[language].contactLastName}: *
                        </label>
                        <Field
                            type="text"
                            id="lname"
                            name="lname"
                            className="border-none rounded-md shadow-md contactfield"
                        />
                        <ErrorMessage
                            name="lname"
                            component="div"
                            className="text-red-800 bold text-sm"
                        />

                        <label htmlFor="phone" className="pt-4 pb-2">
                            {text[language].contactPhone}: *
                        </label>
                        <Field
                            type="text"
                            id="phone"
                            name="phone"
                            className="border-none rounded-md shadow-md contactfield"
                        />
                        <ErrorMessage
                            name="phone"
                            component="div"
                            className="text-red-800 bold text-sm"
                        />

                        <label htmlFor="email" className="pt-4 pb-2">
                            {text[language].contactEmail}: *
                        </label>
                        <Field
                            type="email"
                            id="email"
                            name="email"
                            className="border-none rounded-md shadow-md contactfield"
                        />
                        <ErrorMessage
                            name="email"
                            component="div"
                            className="text-red-800 bold text-sm"
                        />

                        <label htmlFor="company" className="pt-4 pb-2">
                            {text[language].contactCompany}:
                        </label>
                        <Field
                            type="text"
                            id="company"
                            name="company"
                            className="border-none rounded-md shadow-md contactfield"
                        />

                        <label htmlFor="interest" className="pt-4 pb-2">
                            {text[language].contactInterest}:
                        </label>
                        <Field
                            as="select"
                            name="interest"
                            className="mb-2 border-none rounded-md shadow-md text-belazurblue contactfield"
                        >
                            <option value="">
                                {text[language].contactInterestOption1}
                            </option>
                            <option value="One-Page Website">
                                {text[language].contactInterestOption2}
                            </option>
                            <option value="Multi-Page Website">
                                {text[language].contactInterestOption3}
                            </option>
                            <option value="E-commerce Website">
                                {text[language].contactInterestOption4}
                            </option>
                            <option value="Other">
                                {text[language].contactInterestOption5}
                            </option>
                        </Field>

                        <label htmlFor="freeText" className="pt-4 pb-2">
                            {text[language].contactAdditionalInfo}:
                        </label>
                        <Field
                            as="textarea"
                            id="freeText"
                            name="freeText"
                            className="mb-6 border-none rounded-md shadow-md contactfield-extra"
                        />
                        <div className="pt-4 mb-6 flex justify-center">
                            <ReCAPTCHA
                                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY}
                                onChange={(token) => setRecaptchaValue(token)}
                            />
                        </div>
                        <button
                            type="submit"
                            className="button-contact font-semibold rounded"
                        >
                            {text[language].contactButton}
                        </button>
                    </Form>
                </Formik>
            </div>
        </div>
    );
}
