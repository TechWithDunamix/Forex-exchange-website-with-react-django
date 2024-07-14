// src/components/DepositCard.jsx
import React from 'react';

const DepositCard = ({ deposit, onConfirm }) => {
  console.log(deposit.pending)
  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl">
      <h3 className="text-lg font-semibold">{deposit.user.username}</h3>
      <p className="text-gray-500">Amount: ${deposit.amount.toLocaleString()}</p>
      <p className="text-gray-500">Date: {new Date(deposit.date).toLocaleDateString()}</p>
      <p>{deposit.user_email}</p>
      <button
        onClick={() => onConfirm(deposit.id)}
        disabled={!deposit.pending}
        className="disabled:bg-slate-400 mt-2 bg-green-600 text-white py-1 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600"
      >
        Confirm
      </button>
    </div>
  );
};

export default DepositCard;
