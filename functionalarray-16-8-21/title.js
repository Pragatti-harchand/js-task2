var arr = [
    {
        title: 'Overview',
        routeLink: '/dashboard',
        iconClass: 'vs-over-ico',
        permissions: [1, 2, 3],
        active: true,
        sequence: 1
    },
    {
        title: 'Brands',
        routeLink: '/brands',
        iconClass: 'vs-brand-ico',
        permissions: [1],
        active: false,
        sequence: 2
    },
    {
        title: 'Bloggers',
        routeLink: '/bloggers',
        iconClass: 'vs-blog-ico',
        permissions: [1, 2],
        active: false,
        sequence: 3
    },
    {
        title: 'Create Campaign',
        routeLink: '/campaign-form',
        iconClass: 'vs-camp-ico',
        permissions: [2],
        active: true,
        sequence: 4
    },
    {
        title: 'Brief Note',
        routeLink: '/brief-note',
        iconClass: 'vs-note-ico',
        permissions: [2, 3],
        active: false,
        sequence: 5
    },
    {
        title: 'Add ons',
        routeLink: '/add-ons',
        iconClass: 'vs-addon-ico',
        permissions: [2],
        active: false,
        sequence: 6
    },
    {
        title: 'Payment',
        routeLink: '/payment',
        iconClass: 'vs-payment-ico',
        permissions: [1],
        active: true,
        sequence: 7
    },
    {
        title: 'Reports & Statistics',
        routeLink: '/reports',
        iconClass: 'vs-report-ico',
        permissions: [1],
        active: false,
        sequence: 8
    },
    {
        title: 'Settings',
        routeLink: '/settings',
        iconClass: 'vs-setting-ico',
        permissions: [1],
        active: false,
        sequence: 9
    },
    {
        title: 'Profile',
        routeLink: '/profile',
        iconClass: 'vs-setting-ico',
        permissions: [2, 3],
        active: true,
        sequence: 10
    }
]

myfun(arr);

function myfun(arr) {
    let activearr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].title == arr[i].routeLink) {
            activearr.push(arr[i]);
        }
    }
    console.log(activearr);
}