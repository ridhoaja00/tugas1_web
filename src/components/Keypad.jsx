function Keypad({ onClick, onClear, onBackspace, onCalculate }) {
  const buttons = [
    { label: 'Clear', className: 'highlight', id: 'clear', onClick: onClear },
    { label: 'C', className: 'highlight', id: 'backspace', onClick: onBackspace },
    { label: '÷', className: 'highlight', name: '/', onClick },
    { label: '×', className: 'highlight', name: '*', onClick },
    { label: '7', name: '7', onClick },
    { label: '8', name: '8', onClick },
    { label: '9', name: '9', onClick },
    { label: '-', className: 'highlight', name: '-', onClick },
    { label: '4', name: '4', onClick },
    { label: '5', name: '5', onClick },
    { label: '6', name: '6', onClick },
    { label: '+', className: 'highlight', name: '+', onClick },
    { label: '1', name: '1', onClick },
    { label: '2', name: '2', onClick },
    { label: '3', name: '3', onClick },
    { label: '.', name: '.', onClick },
    { label: '0', name: '0', onClick }, 
    { label: '=', className: 'highlight', id: 'result', onClick: onCalculate },
  ];

  return (
    <div className="keypad">
      {buttons.map((btn, index) => (
        <button
          key={index}
          className={btn.className || ''}
          id={btn.id || ''}
          name={btn.name}
          onClick={btn.onClick || onClick} 
        >
          {btn.label}
        </button>
      ))}
    </div>
  );
}

export default Keypad;