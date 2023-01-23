
const date = new Date();
const day = date.getDay();
const month = date.getMonth();
const year = date.getFullYear();


// component making
function Card(props){
  const {cardTitle, discription} = props;// destructuring
  return    <div className='card'>
     
  <h1 className='cardTitle'>{cardTitle}</h1>
  <p className='cardDece'>{discription}</p>
  <h2 className='footer'>{  
    day + "/" + month+1 + "/" +year
      }
  </h2>
</div>
}
export default Card;