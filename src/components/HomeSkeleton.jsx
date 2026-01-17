import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const HomeSkeleton = () => {
    return (
        <div className="home-skeleton-wrapper container mt-5">
            {/* Hero Section Skeleton */}
            <div className="row mb-5">
                <div className="col-lg-6">
                    <Skeleton height={40} width="60%" className="mb-3" />
                    <Skeleton count={3} height={20} className="mb-3" />
                    <Skeleton height={50} width={150} borderRadius={25} />
                </div>
                <div className="col-lg-6">
                    <Skeleton height={400} borderRadius={20} />
                </div>
            </div>

            {/* Section Title Skeleton */}
            <div className="text-center mb-5">
                <Skeleton width={150} height={20} />
                <Skeleton width={300} height={40} />
            </div>

            {/* Services Grid Skeleton */}
            <div className="row g-4">
                {[1, 2, 3].map((i) => (
                    <div className="col-lg-4" key={i}>
                        <div className="p-4 border rounded-20">
                            <Skeleton circle height={60} width={60} className="mb-3" />
                            <Skeleton height={25} width="80%" className="mb-2" />
                            <Skeleton count={2} height={15} />
                        </div>
                    </div>
                ))}
            </div>

            {/* Projects/Portfolio Skeleton */}
            <div className="row mt-5 g-4">
                {[1, 2, 3, 4].map((i) => (
                    <div className="col-lg-6" key={i}>
                        <Skeleton height={300} borderRadius={20} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomeSkeleton;