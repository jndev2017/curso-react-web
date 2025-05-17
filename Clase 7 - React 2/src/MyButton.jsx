import './MyButton.css'

function MyButton({ count, incrementCount }) {

  return (
    <button className='buttonContainer' onClick={ incrementCount }>{ "Count: " + count }</button>
  );
}

export default MyButton;