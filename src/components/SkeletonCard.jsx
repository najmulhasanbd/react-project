import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const SkeletonCard = () => {
    return (
        <div className="col-lg-6 mb-4">
            <div className="project-item rounded-20 overflow-hidden border p-3">
                {/* ইমেজের জন্য স্কেলিটন */}
                <Skeleton height={250} borderRadius={20} />
                <div className="mt-3">
                    {/* ক্যাটাগরির জন্য ছোট লাইন */}
                    <Skeleton width="40%" height={15} />
                    {/* টাইটেলের জন্য বড় লাইন */}
                    <Skeleton width="80%" height={25} style={{ marginTop: '10px' }} />
                </div>
            </div>
        </div>
    );
};

export default SkeletonCard;