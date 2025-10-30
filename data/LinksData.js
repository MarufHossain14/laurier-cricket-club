// date 30-Oct, 2025
import { socialIcons } from '../components/SocialIcons';

const webLinks = [
    // All social profiles
    {
        title: 'Instagram',
        url: 'https://instagram.com/lauriercricketclub',
        type: 'social',
        icon: 'instagram',
        on: true
    },
    {
        title: 'Twitter',
        url: 'https://twitter.com/lauriercricket',
        type: 'social',
        icon: 'twitter',
        on: false  // Disabled - no account yet
    },
    {
        title: 'Facebook',
        url: 'https://facebook.com/lauriercricketclub',
        type: 'social',
        icon: 'facebook',
        on: true
    },
    {
        title: 'LinkedIn',
        url: 'https://www.linkedin.com/company/laurier-cricket-club',
        type: 'social',
        icon: 'linkedin',
        on: false
    },
    {
        title: 'Youtube',
        url: 'https://youtube.com/@lauriercricketclub',
        type: 'social',
        icon: 'youtube',
        on: false  // Disabled - no account yet
    },

    // Main Links - Cricket Club specific
    {
        title: 'Join the Club',
        url: 'https://lauriercricketclub.com/membership',
        type: 'main',
        icon: 'users',
        on: true
    },
    {
        title: 'Match Schedule',
        url: 'https://lauriercricketclub.com/schedule',
        type: 'main',
        icon: 'calendar',
        on: true
    },
    {
        title: 'Team Registration',
        url: 'https://lauriercricketclub.com/register',
        type: 'main',
        icon: 'people',
        on: true
    },
    {
        title: 'Training Sessions',
        url: 'https://lauriercricketclub.com/training',
        type: 'main',
        icon: 'activity',
        on: true
    },
    {
        title: 'Match Results & Stats',
        url: 'https://lauriercricketclub.com/results',
        type: 'main',
        icon: 'barChart3',
        on: true
    },
    {
        title: 'Photo Gallery',
        url: 'https://lauriercricketclub.com/gallery',
        type: 'main',
        icon: 'image',
        on: true
    },
    {
        title: 'Contact Us',
        url: 'https://lauriercricketclub.com/contact',
        type: 'main',
        icon: 'mail',
        on: true
    },
    {
        title: 'Sponsors',
        url: 'https://lauriercricketclub.com/sponsors',
        type: 'other',
        icon: 'handshake',
        on: true
    },
    {
        title: 'Club Shop',
        url: 'https://lauriercricketclub.com/shop',
        type: 'other',
        icon: 'shoppingCart',
        on: false
    },

    // Custom Links
    {
        title: 'WhatsApp Community',
        url: 'https://wa.me/1234567890?text=Hi%2C%20I%20want%20to%20join%20Laurier%20Cricket%20Club',
        type: 'custom',
        icon: 'messageCircle',
        on: true,
        customStyle: 'whatsapp'
    },
    {
        title: 'Membership Fees & Payment',
        url: 'https://lauriercricketclub.com/membership-fees',
        type: 'custom',
        icon: 'creditCard',
        on: true,
        customStyle: 'membership'
    },
    {
        title: 'Feedback & Suggestions',
        url: 'https://forms.gle/your-google-form-id',
        type: 'custom',
        icon: 'messageSquare',
        on: true,
        customStyle: 'feedback'
    },
];

export default webLinks;


