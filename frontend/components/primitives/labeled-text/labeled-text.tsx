import React from 'react';

const LabeledText: React.FC<LabeledTextProperties> = ({ label, text }) => {
  return (
    <p>
      <strong>{label}</strong>: {text}
    </p>
  );
};

interface LabeledTextProperties {
  label: string;
  text: string;
}

export default LabeledText;
