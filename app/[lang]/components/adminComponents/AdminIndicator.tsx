import React from "react";

const AdminIndicator = ({ admin }: { admin: string }) => {
  if (!admin) return null;
  return (
    <div className="flex items-center gap-2 px-4 text-2xl">
      <span className="text-cdd-red underline">Logged in:</span>
      {admin}
    </div>
  );
};

export default AdminIndicator;
