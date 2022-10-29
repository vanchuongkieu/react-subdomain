import NotFound from '../components/NotFound';
import { APPS } from './constants';

export const initializeApp = () => {
    const hostname = window.location.hostname;
    const subdomain = setupSubdomain(hostname);

    const mainApp = APPS.find(app => app.main)!;
    if (!subdomain) return mainApp.router;
    console.log(subdomain);
    
    const appSubdomain = APPS.find(app => app.subdomain === subdomain)!;
    if (appSubdomain) return appSubdomain.router;
    return NotFound;
}

const setupSubdomain = (location: string) => {
    location = location.replace('www.', '')
    const parts = location.split('.');
    const isLocalhost = parts.slice(-1)[0] === 'localhost';
    const sliceStill = isLocalhost ? -1 : -2;
    return parts.slice(0, sliceStill).join('');
}