/* eslint-disable react/prop-types */
const ModeSelect = ({ setMode }) => {
  return (
    <div className="mode-select">
<div className="logo-group">
  
      <h1 className='logo'>Minus</h1>
      <img  src="/assets/7.png" alt="" />
</div>
<div className="the-number">
  <h1>1000</h1>
</div>
      <div className="btn-group">
      <button onClick={() => setMode('normal')}>Play Normal</button>
      <button onClick={() => setMode('random')}>Play Random</button>
      </div>
    </div>
  );
};

export default ModeSelect;
