import './App.css';

function App(a) {
  // code here
  return(
    <div className='app'>
      <h1>Kalvim Gallery</h1>
      <div className='img'>
      {a.data.map((image)=>{
        return <img src={image.img} alt="" />
      })}
      </div>
    </div>
  )
}

export default App;
