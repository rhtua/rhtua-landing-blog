"use client";

export const Opening: React.FC = () => {
  return (
    <div className="opening overflow-y-hidden flex">
      <div className="opening-text flex items-end text-3xl font-semibold text-gray-50">
        <div className="flex">
          <span>a</span>
        </div>
        <div className="middle-text flex">
          <div className="flex items-end gap-1">
            <span>rthur</span>
            <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mb-3" />
          </div>
        </div>
      </div>
    </div>
  );
};
