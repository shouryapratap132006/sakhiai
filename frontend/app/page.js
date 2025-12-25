import Link from 'next/link';

export default function Home() {
    return (
        <div className="bg-white font-sans">
            <div className="relative isolate px-6 pt-10 lg:px-8">
                <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:py-32">
                    <div className="text-center">
                        <h1 className="text-4xl font-extrabold tracking-tight text-teal-900 sm:text-6xl">
                            AI-Powered Breast Cancer Risk Analysis
                        </h1>
                        <p className="mt-4 text-lg leading-8 text-gray-600">
                            A simple yet powerful tool to analyze breast tumor features.
                            Designed for educational purposes to demonstrate how Machine Learning can assist in healthcare.
                        </p>
                        <div className="mt-8 flex items-center justify-center gap-x-6">
                            <Link
                                href="/predict"
                                className="rounded-full bg-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 transition transform hover:-translate-y-1"
                            >
                                Start Analysis
                            </Link>
                            <Link href="/about" className="text-sm font-semibold leading-6 text-gray-900 hover:text-teal-600 transition">
                                Learn more <span aria-hidden="true">→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-12 sm:py-16 bg-teal-50">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:text-center">
                        <h2 className="text-base font-semibold leading-7 text-teal-600">Advanced Technology</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Reliable Predictions & Visual Insights
                        </p>
                    </div>
                    <div className="mx-auto mt-10 max-w-2xl sm:mt-12 lg:mt-16 lg:max-w-4xl">
                        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                            <div className="relative pl-16 bg-white p-6 rounded-2xl shadow-sm border border-teal-100">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div className="absolute left-4 top-6 flex h-10 w-10 items-center justify-center rounded-lg bg-teal-600">
                                        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                                        </svg>
                                    </div>
                                    High Accuracy Model
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-600">
                                    We use Logistic Regression, a trusted statistical method, to predict malignancy with high reliability.
                                </dd>
                            </div>
                            <div className="relative pl-16 bg-white p-6 rounded-2xl shadow-sm border border-teal-100">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div className="absolute left-4 top-6 flex h-10 w-10 items-center justify-center rounded-lg bg-teal-600">
                                        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                        </svg>
                                    </div>
                                    Visual Data Analysis
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-600">
                                    See your data come to life with interactive charts that help you understand the risk factors.
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    );
}
