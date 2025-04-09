const FishIngredient = (props) => {
    return (
    <li>
      {props.name}     {props.amount}     {props.measurement}
    </li>
    )
  }

  export default FishIngredient;