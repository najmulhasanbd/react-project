import React from 'react';
import { texSliderData } from '../data/texSlider';

const TexSlider = () => {
    return (
        <section className="ep-text-slider-section pt-120 overflow-hidden">
            <div className="slider-main d-flex align-items-center">
                
                {/* স্লাইডার আইটেম ১ */}
                <div className="slider-item d-flex align-items-center">
                    {texSliderData.map((item) => (
                        <h2 key={item.id} className="title d-flex align-items-center gap-2 mx-4">
                            <img src={item.icon} alt="globe-icon" />
                            {item.title}
                        </h2>
                    ))}
                </div>

                {/* স্লাইডার আইটেম ২ (লুপের জন্য হুবহু কপি) */}
                <div className="slider-item d-flex align-items-center">
                    {texSliderData.map((item) => (
                        <h2 key={`copy-${item.id}`} className="title d-flex align-items-center gap-2 mx-4">
                            <img src={item.icon} alt="globe-icon" />
                            {item.title}
                        </h2>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default TexSlider;