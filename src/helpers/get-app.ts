import NotFound from '../components/NotFound';
import { APPS } from './constants';

export const initializeApp = () => {
    const hostname = window.location.host;
    const subdomain = setupSubdomain(hostname);

    const mainApp = APPS.find(app => app.main)!;
    if (!subdomain) return mainApp.router;
    
    const appSubdomain = APPS.find(app => app.subdomain === subdomain)!;
    if (appSubdomain) return appSubdomain.router;
    return NotFound;
}

const setupSubdomain = (location: string) => {
    const parts = location.split('.');
    const isLocalhost = parts.slice(-1)[0].includes('localhost');
    return parts.slice(0, isLocalhost ? -1 : -2).join('');
}