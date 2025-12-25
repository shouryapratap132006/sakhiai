export default function About() {
    return (
        <div className="bg-white px-6 py-32 lg:px-8 font-sans">
            <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
                <p className="text-base font-semibold leading-7 text-teal-600">About the Project</p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Breast Cancer Risk Prediction System</h1>
                <p className="mt-6 text-xl leading-8">
                    This project demonstrates how we can use computer algorithms to help doctors identify breast cancer risks.
                </p>
                <div className="mt-10 max-w-2xl">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">How it Works</h2>
                    <p className="mt-6">
                        We use a dataset of breast tumor measurements. The computer "learns" patterns from this data to distinguish between
                        <strong> Benign</strong> (safe) and <strong>Malignant</strong> (harmful) tumors.
                    </p>

                    <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-900">The Technology</h2>
                    <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
                        <li className="flex gap-x-3">
                            <span><strong className="font-semibold text-gray-900">Machine Learning:</strong> We use a model called "Logistic Regression". It's like finding a line that best separates the two groups of tumors.</span>
                        </li>
                        <li className="flex gap-x-3">
                            <span><strong className="font-semibold text-gray-900">Backend:</strong> We use <strong>Flask</strong>, a simple Python tool, to handle the calculations.</span>
                        </li>
                        <li className="flex gap-x-3">
                            <span><strong className="font-semibold text-gray-900">Frontend:</strong> We use <strong>Next.js</strong> and <strong>Recharts</strong> to create this beautiful and interactive website.</span>
                        </li>
                    </ul>

                    <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-900">Disclaimer</h2>
                    <div className="mt-6 border-l-4 border-yellow-500 bg-yellow-50 p-4 rounded-r-lg">
                        <p className="text-sm text-yellow-700">
                            <strong>Educational Use Only:</strong> This is a student project. It is NOT a real medical device.
                            Always listen to your doctor for medical advice.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
