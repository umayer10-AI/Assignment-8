import React from 'react';

const Tips = () => {

    const tips = [
        "Healthy animal select koro (active & bright eyes)",
        "Age check koro (minimum required age maintain)",
        "Kono disease ba injury ase kina dekho",
        "Proper feeding & water ensure koro",
        "Trusted seller theke kinar chesta koro",
        "Qurbani rules & sunnah follow koro",
    ];

    return (
        <div className='mt-15'>
            <div className="px-4">
                <h2 className="text-3xl font-bold text-center mb-8">🐐 Qurbani Tips</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {
                        tips.map((v, i) => (
                        <div key={i} className="p-5 rounded-xl shadow-md border hover:scale-110 duration-500 transition">
                            <p className="text-gray-700">{v}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Tips;