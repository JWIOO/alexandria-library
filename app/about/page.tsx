import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/about/Section1";
import Section2 from "@/components/sections/about/Section2";
import Section3 from "@/components/sections/about/Section3";
import Section4 from "@/components/sections/about/Section4";
import Section5 from "@/components/sections/about/Section5";
import Section6 from "@/components/sections/about/Section6";
import Section9 from "@/components/sections/home/Section9";
import PageHeader from "@/components/sections/PageHeader";
export default function Home() {
    return (
        <>
            <Layout>
                <PageHeader title="About Us" current_page="About Us" />
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
                <Section5 classList="bg-secondary-2" />
                <Section9 classList="" />
                <Section6 />
            </Layout>
        </>
    );
}
