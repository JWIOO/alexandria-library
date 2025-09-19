import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/sections/PageHeader";
import Section1 from "@/components/sections/experts/Section1";
import Section6 from "@/components/sections/about/Section6";
import Pagination from "@/components/elements/Pagination";
import Section9 from "@/components/sections/home/Section9";
export default function Home() {
    return (
        <>
            <Layout>
                <PageHeader title="Our Instructors" current_page="Experts" />
                <Section1 />
                <Pagination />
                <Section9 classList="border-top" />
                <Section6 />
            </Layout>
        </>
    );
}
