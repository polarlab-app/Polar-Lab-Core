export const metadata = {
    title: 'Polar Core',
    description: 'The core management dashboard for Polar Lab Projects',
};

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body className='body' id='body'>
                {children}
            </body>
        </html>
    );
}
