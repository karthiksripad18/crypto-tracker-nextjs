import Head from 'next/head';

const Layout = ({children, title = 'Crypto Tracker'}) => {
    return (
        <div className="h-full w-full">
            <Head>
                <title>{title}</title>
            </Head>
            <main>{children}</main>
        </div>
    )
};

export default Layout;