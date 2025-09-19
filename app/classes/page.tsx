import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/sections/PageHeader";
import Section1 from "@/components/sections/classes/Section1";
import Section5 from "@/components/sections/about/Section5";
import Section6 from "@/components/sections/about/Section6";
import Pagination from "@/components/elements/Pagination";
export default function Home() {
    return (
        <>
            <Layout>
                <PageHeader title="Our Classes" current_page="Our Classes" />
                <Section1 />
                <Pagination />
                <Section5 classList="pt-0" display="d-none" />
                <Section6 />
            </Layout>
        </>
    );
}
