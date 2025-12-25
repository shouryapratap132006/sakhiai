"use client";

import { useState } from 'react';
import {
    Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer,
    RadialBarChart, RadialBar, Legend, Tooltip
} from 'recharts';

const FEATURE_NAMES = [
    "radius", "texture", "perimeter", "area", "smoothness",
    "compactness", "concavity", "concave_points", "symmetry", "fractal_dimension"
];

const INITIAL_STATE = {
    mean_radius: 0, mean_texture: 0, mean_perimeter: 0, mean_area: 0, mean_smoothness: 0,
    mean_compactness: 0, mean_concavity: 0, mean_concave_points: 0, mean_symmetry: 0, mean_fractal_dimension: 0,
    radius_error: 0, texture_error: 0, perimeter_error: 0, area_error: 0, smoothness_error: 0,
    compactness_error: 0, concavity_error: 0, concave_points_error: 0, symmetry_error: 0, fractal_dimension_error: 0,
    worst_radius: 0, worst_texture: 0, worst_perimeter: 0, worst_area: 0, worst_smoothness: 0,
    worst_compactness: 0, worst_concavity: 0, worst_concave_points: 0, worst_symmetry: 0, worst_fractal_dimension: 0
};

const DEMO_MALIGNANT = {
    mean_radius: 17.99, mean_texture: 10.38, mean_perimeter: 122.8, mean_area: 1001.0, mean_smoothness: 0.1184,
    mean_compactness: 0.2776, mean_concavity: 0.3001, mean_concave_points: 0.1471, mean_symmetry: 0.2419, mean_fractal_dimension: 0.07871,
    radius_error: 1.095, texture_error: 0.9053, perimeter_error: 8.589, area_error: 153.4, smoothness_error: 0.006399,
    compactness_error: 0.04904, concavity_error: 0.05373, concave_points_error: 0.01587, symmetry_error: 0.03003, fractal_dimension_error: 0.006193,
    worst_radius: 25.38, worst_texture: 17.33, worst_perimeter: 184.6, worst_area: 2019.0, worst_smoothness: 0.1622,
    worst_compactness: 0.6656, worst_concavity: 0.7119, worst_concave_points: 0.2654, worst_symmetry: 0.4601, worst_fractal_dimension: 0.1189
};

const DEMO_BENIGN = {
    mean_radius: 13.54, mean_texture: 14.36, mean_perimeter: 87.46, mean_area: 566.3, mean_smoothness: 0.09779,
    mean_compactness: 0.08129, mean_concavity: 0.06664, mean_concave_points: 0.04781, mean_symmetry: 0.1885, mean_fractal_dimension: 0.05766,
    radius_error: 0.2699, texture_error: 0.7886, perimeter_error: 2.058, area_error: 23.56, smoothness_error: 0.008462,
    compactness_error: 0.0146, concavity_error: 0.02387, concave_points_error: 0.01315, symmetry_error: 0.0198, fractal_dimension_error: 0.0023,
    worst_radius: 15.11, worst_texture: 19.26, worst_perimeter: 99.7, worst_area: 711.2, worst_smoothness: 0.144,
    worst_compactness: 0.1773, worst_concavity: 0.239, worst_concave_points: 0.1288, worst_symmetry: 0.2977, worst_fractal_dimension: 0.07259
};

export default function Predict() {
    const [formData, setFormData] = useState(INITIAL_STATE);
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: parseFloat(value) || 0 }));
    };

    const fillDemo = (type) => {
        setFormData(type === 'malignant' ? DEMO_MALIGNANT : DEMO_BENIGN);
        setResult(null);
        setError("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setResult(null);

        const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

        try {
            const response = await fetch(`${API_URL}/predict`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to fetch prediction');
            }

            const data = await response.json();
            setResult(data);
        } catch (err) {
            setError("An error occurred while fetching the prediction. Is the backend running?");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const radarData = FEATURE_NAMES.map(feature => ({
        feature: feature.replace('_', ' '),
        value: formData[`mean_${feature}`],
        fullMark: 100
    }));

    const gaugeData = result ? [
        { name: 'Probability', value: (result.probability * 100).toFixed(1), fill: result.prediction === 'Malignant' ? '#ef4444' : '#22c55e' }
    ] : [];

    return (
        <div className="bg-teal-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-teal-900 tracking-tight">Breast Cancer Risk Analysis</h1>
                    <p className="mt-4 text-lg text-teal-700">Enter clinical features below to analyze risk probability.</p>
                    <div className="mt-6 space-x-4">
                        <button onClick={() => fillDemo('benign')} className="bg-white text-teal-600 px-4 py-2 rounded-full shadow-sm hover:bg-teal-50 font-medium transition">Fill Benign Demo</button>
                        <button onClick={() => fillDemo('malignant')} className="bg-white text-red-600 px-4 py-2 rounded-full shadow-sm hover:bg-red-50 font-medium transition">Fill Malignant Demo</button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 bg-white shadow-xl rounded-2xl p-8 border border-teal-100">
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div>
                                <h3 className="text-xl font-semibold text-teal-800 mb-4 border-b border-teal-100 pb-2">Mean Features</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {FEATURE_NAMES.map(feature => (
                                        <div key={`mean_${feature}`}>
                                            <label htmlFor={`mean_${feature}`} className="block text-sm font-medium text-gray-600 capitalize mb-1">
                                                Mean {feature.replace('_', ' ')}
                                            </label>
                                            <input
                                                type="number"
                                                step="any"
                                                name={`mean_${feature}`}
                                                id={`mean_${feature}`}
                                                value={formData[`mean_${feature}`]}
                                                onChange={handleChange}
                                                className="w-full rounded-lg border-2 border-gray-300 bg-white p-2 focus:border-teal-500 focus:ring-teal-500 transition shadow-sm text-gray-900"
                                                required
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-teal-800 mb-4 border-b border-teal-100 pb-2">Standard Error Features</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {FEATURE_NAMES.map(feature => (
                                        <div key={`${feature}_error`}>
                                            <label htmlFor={`${feature}_error`} className="block text-sm font-medium text-gray-600 capitalize mb-1">
                                                {feature.replace('_', ' ')} Error
                                            </label>
                                            <input
                                                type="number"
                                                step="any"
                                                name={`${feature}_error`}
                                                id={`${feature}_error`}
                                                value={formData[`${feature}_error`]}
                                                onChange={handleChange}
                                                className="w-full rounded-lg border-2 border-gray-300 bg-white p-2 focus:border-teal-500 focus:ring-teal-500 transition shadow-sm text-gray-900"
                                                required
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-teal-800 mb-4 border-b border-teal-100 pb-2">Worst (Largest) Features</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {FEATURE_NAMES.map(feature => (
                                        <div key={`worst_${feature}`}>
                                            <label htmlFor={`worst_${feature}`} className="block text-sm font-medium text-gray-600 capitalize mb-1">
                                                Worst {feature.replace('_', ' ')}
                                            </label>
                                            <input
                                                type="number"
                                                step="any"
                                                name={`worst_${feature}`}
                                                id={`worst_${feature}`}
                                                value={formData[`worst_${feature}`]}
                                                onChange={handleChange}
                                                className="w-full rounded-lg border-2 border-gray-300 bg-white p-2 focus:border-teal-500 focus:ring-teal-500 transition shadow-sm text-gray-900"
                                                required
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex justify-end pt-4">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full sm:w-auto bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 disabled:opacity-50 transition transform hover:-translate-y-0.5"
                                >
                                    {loading ? 'Analyzing...' : 'Analyze Tumor Risk'}
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="lg:col-span-1 space-y-8">
                        <div className="bg-white shadow-xl rounded-2xl p-6 border border-teal-100">
                            <h3 className="text-lg font-semibold text-teal-800 mb-4 text-center">Feature Visualization</h3>
                            <div className="h-64 w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                                        <PolarGrid stroke="#e5e7eb" />
                                        <PolarAngleAxis dataKey="feature" tick={{ fill: '#4b5563', fontSize: 10 }} />
                                        <PolarRadiusAxis angle={30} domain={[0, 'auto']} tick={false} />
                                        <Radar name="Input" dataKey="value" stroke="#0d9488" fill="#0d9488" fillOpacity={0.4} />
                                        <Tooltip />
                                    </RadarChart>
                                </ResponsiveContainer>
                            </div>
                            <p className="text-xs text-gray-500 text-center mt-2">Visual representation of mean features.</p>
                        </div>

                        {result && (
                            <div className={`bg-white shadow-xl rounded-2xl p-6 border-t-8 ${result.prediction === 'Malignant' ? 'border-red-500' : 'border-green-500'}`}>
                                <h3 className="text-xl font-bold text-gray-800 text-center mb-2">Prediction Result</h3>
                                <div className={`text-4xl font-extrabold text-center mb-4 ${result.prediction === 'Malignant' ? 'text-red-600' : 'text-green-600'}`}>
                                    {result.prediction}
                                </div>

                                <div className="h-48 w-full relative">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <RadialBarChart cx="50%" cy="50%" innerRadius="60%" outerRadius="100%" barSize={20} data={gaugeData} startAngle={180} endAngle={0}>
                                            <RadialBar
                                                background
                                                dataKey="value"
                                                cornerRadius={10}
                                            />
                                            <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }} content={() => (
                                                <div className="text-center">
                                                    <span className="text-3xl font-bold text-gray-700">{(result.probability * 100).toFixed(1)}%</span>
                                                    <p className="text-xs text-gray-500">Probability</p>
                                                </div>
                                            )} />
                                        </RadialBarChart>
                                    </ResponsiveContainer>
                                </div>

                                <div className="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-100">
                                    <p className="text-xs text-yellow-800 text-center">
                                        <strong>Disclaimer:</strong> This is an educational tool. Consult a doctor for medical advice.
                                    </p>
                                </div>
                            </div>
                        )}

                        {error && (
                            <div className="bg-red-50 p-4 rounded-xl border border-red-200">
                                <p className="text-sm text-red-700 text-center">{error}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
