type ButtonProps = {
  text: string;
  variant?: 'primary' | 'success' | 'danger';
  onClick: () => void;
};

export const Button = ({ text, variant = 'primary', onClick }: ButtonProps) => {
  let color = '';

  switch (variant) {
    case 'primary':
      color = 'bg-blue-700';
      break;
    case 'success':
      color = 'bg-green-700';
      break;
    case 'danger':
      color = 'bg-red-700';
      break;
    default:
      color = 'bg-blue-700';
  }

  return (
    <button className={`${color} rounded-lg px-4 py-1`} onClick={onClick}>
      {text}
    </button>
  );
};
