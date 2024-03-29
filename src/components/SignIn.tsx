import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { UserAuth } from '../contexts/AuthContext';

type Inputs = {
    email: string;
    pass: string;
};

const SignIn = () => {
    const { loginUser } = UserAuth();
    const navigate = useNavigate();

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
        })
        .required();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>({
        resolver: yupResolver(schema),
    });

    const onSubmit: SubmitHandler<Inputs> = async (formData) => {
        try {
            await loginUser(formData.email, formData.pass);
            navigate('/account');
        } catch (err) {
            console.log('Sua vida foi um erro', err);
        }
    };

    console.log(errors);

    return (
        <section className="">
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
                <label htmlFor="btn">
                    <button className="submit-btn" type="submit">
                        Send &nbsp; &rarr;
                    </button>
                </label>
            </form>
        </section>
    );
};

export default SignIn;
