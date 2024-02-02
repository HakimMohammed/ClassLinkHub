import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        nom: '',
        prenom: '',
        cin: '',
        user_type: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <form onSubmit={submit}>
                <div className="mb-3">
                    <InputLabel htmlFor="nom" value="Nom" />

                    <TextInput
                        id="nom"
                        name="nom"
                        value={data.nom}
                        className="form-control"
                        autoComplete="nom"
                        autoFocus
                        onChange={(e) => setData('nom', e.target.value)}
                        required
                    />

                    <InputError message={errors.nom} className="mt-2" />
                </div>

                <div className="mb-3">
                    <InputLabel htmlFor="prenom" value="Prenom" />

                    <TextInput
                        id="prenom"
                        name="prenom"
                        value={data.prenom}
                        className="form-control"
                        onChange={(e) => setData('prenom', e.target.value)}
                        required
                    />

                    <InputError message={errors.prenom} className="mt-2" />
                </div>

                <div className="mb-3">
                    <InputLabel htmlFor="cin" value="CIN" />

                    <TextInput
                        id="cin"
                        name="cin"
                        value={data.cin}
                        className="form-control"
                        onChange={(e) => setData('cin', e.target.value)}
                        required
                    />

                    <InputError message={errors.cin} className="mt-2" />
                </div>

                <div className="mb-3">
                    <InputLabel htmlFor="user_type" value="User Type" />

                    <select
                        id="user_type"
                        name="user_type"
                        value={data.user_type}
                        className="form-control"
                        onChange={(e) => setData('user_type', e.target.value)}
                        required
                    >
                        <option value="">Select an option</option>
                        <option value="Tuteur">Tuteur</option>
                        <option value="Professeur">Professeur</option>
                    </select>

                    <InputError message={errors.user_type} className="mt-2" />
                </div>

                <div className="mb-3">
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="form-control"
                        autoComplete="username"
                        onChange={(e) => setData('email', e.target.value)}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mb-3">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="form-control"
                        autoComplete="new-password"
                        onChange={(e) => setData('password', e.target.value)}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mb-3">
                    <InputLabel htmlFor="password_confirmation" value="Confirm Password" />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="form-control"
                        autoComplete="new-password"
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        required
                    />

                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>

                <div className="d-flex justify-content-end">
                    <Link
                        href={route('login')}
                        className="underline text-sm text-gray-600"
                    >
                        Already registered?
                    </Link>

                    <PrimaryButton className="btn btn-primary ml-4" disabled={processing}>
                        Register
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
