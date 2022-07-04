import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

type Inputs = {
    email: string;
    pass: string;
    confirmPass: string;
    terms: boolean;
};

const SignUp = () => {
    const schema = yup
        .object({
            email: yup
                .string()
                .email()
                .required('You need to provide a valid email'),
            pass: yup
                .string()
                .min(6, 'The password must have at least 6 digits')
                .required('You need to provide a pasword'),
            confirmPass: yup
                .string()
                .min(6, 'The password must have at least 6 digits')
                .oneOf([yup.ref('pass')])
                .required('You need to provide a confirmation of the password'),
            terms: yup
                .boolean()
                .default(false)
                .oneOf([true])
                .required('You need to accept the terms without read it'),
        })
        .required();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>({
        resolver: yupResolver(schema),
    });

    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        console.log(formData);
    };

    console.log(errors);

    return (
        <section className="">
            <h1 className="title">Sign Up!</h1>
            <h3 className="subtitle">The best platform for you</h3>
            <form className="form-control" onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">
                    Name
                    <input
                        type="text"
                        {...register('email', { required: true })}
                    />
                </label>
                <span className="form-error">
                    {errors.email && 'Digit a valid email'}
                </span>
                <label htmlFor="name">
                    Passwords
                    <input
                        type="password"
                        {...register('pass', { required: true })}
                    />
                </label>
                <span className="form-error">
                    {errors.pass && 'A strong password is required'}
                </span>
                <label htmlFor="name">
                    Confirm Password
                    <input
                        type="password"
                        {...register('confirmPass', { required: true })}
                    />
                </label>
                <span className="form-error">
                    {errors.confirmPass &&
                        'A confirmation of password is required'}
                </span>
                <label htmlFor="terms">
                    <div style={{ marginRight: 'auto' }}>
                        <input
                            type="checkbox"
                            style={{ position: 'fixed', left: '200px' }}
                            {...register('terms', { required: true })}
                        />
                        &nbsp; I accept all the terms that i do not read
                    </div>
                </label>
                <span className="form-error">
                    {errors.terms && 'Accept the required terms'}
                </span>
                <label htmlFor="btn">
                    <button className="submit-btn" type="submit">
                        Send &nbsp; &rarr;
                    </button>
                </label>
            </form>
        </section>
    );
};

export default SignUp;
