import { MainRouter, UsersRouter, TeachersRouter } from './../routes/index';

type AppType = {
    subdomain: string;
    router: () => JSX.Element;
    main: boolean;
}

export const APPS: AppType[] = [
    {
        subdomain: 'www',
        router: MainRouter,
        main: true
    },
    {
        subdomain: 'user',
        router: UsersRouter,
        main: false
    },
    {
        subdomain: 'teacher',
        router: TeachersRouter,
        main: false
    }
]