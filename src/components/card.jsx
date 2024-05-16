export const Card = ({price, title, imageLink,desc,second__price}) => {
    return(
        <div className="card">
        <div className="card__img">
          <img src={imageLink} alt="" />
        </div>
        <h4 className='card__title'>{ title }</h4>
        <p className="card__description">{desc}</p>
        <div className="prices">
        <p className="price">{price}</p>
        <p className="price2">{second__price}</p>
        </div>
      </div>
    )
}