import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/sections/PageHeader";
import Section1 from "@/components/sections/classes-details/Section1";
import Section6 from "@/components/sections/about/Section6";
import Section4 from "@/components/sections/home/Section4";
export default function Home() {
    return (
        <>
            <Layout>
                <PageHeader title="Blissful balance yoga" current_page="Classes Details" />
                <Section1 />
                <Section4 />
                <Section6 />
            </Layout>
        </>
    );
}
