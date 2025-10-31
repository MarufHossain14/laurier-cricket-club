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
        url: 'https://recreation.laurierathletics.com/sports/2022/4/29/mens-cricket.aspx',
        type: 'main',
        icon: 'users',
        on: true
    },
    {
        title: 'Match Results & Stats',
        url: 'https://cricheroes.com/team-profile/6767409/laurier-hawks/matches',
        type: 'main',
        icon: 'barChart3',
        on: true
    },
    {
        title: 'Membership Fees & Payment',
        url: 'https://secure.laurierathletics.com/ecommerce/products.php?ProductID=3232',
        type: 'main',
        icon: 'creditCard',
        on: true
    },
    {
        title: 'Contact Us',
        url: 'menscricket@laurierathletics.com',
        type: 'main',
        icon: 'mail',
        on: true,
        isEmail: true
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
        url: 'https://chat.whatsapp.com/GFPnL6VIpzB2Hbb6ScCvOh?mode=wwt',
        type: 'custom',
        icon: 'messageCircle',
        on: true,
        customStyle: 'whatsapp'
    },
    {
        title: 'Feedback & Suggestions',
        url: 'https://docs.google.com/forms/d/e/1FAIpQLSePJdTEBFXKYLoM9QbHeFBWP26CGV4Zz6MFAv-QEb74J0XzYw/viewform?usp=sharing&ouid=101070476898382431907',
        type: 'custom',
        icon: 'messageSquare',
        on: true,
        customStyle: 'feedback'
    },
];

export default webLinks;


