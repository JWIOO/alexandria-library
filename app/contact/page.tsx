import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/sections/PageHeader";
import Section1 from "@/components/sections/contact/Section1";
import Section6 from "@/components/sections/about/Section6";
import Section7 from "@/components/sections/home/Section7";
export default function Home() {
    return (
        <>
            <Layout>
                <PageHeader title="Get in touch" current_page="Contact Us" />
                <Section7 />
                <Section1 />
                <Section6 />
            </Layout>
        </>
    );
}
