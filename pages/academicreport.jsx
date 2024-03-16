import AcademicReportPage from "../components/AcademicReport/AcademicReportPage";
import Head from 'next/head';

const academicreport = () => {
    return (
        <>
            <Head>
                <title>
                    JNTUH RESULTS | ACADEMIC RESULT
                </title>
                <meta
                    name="description"
                    content="Check out academic result with in a go."
                    key="desc"
                />
            </Head>
            <AcademicReportPage backlog={false} />
        </>
    )
}

export default academicreport;